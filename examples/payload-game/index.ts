/**
 * payload-game is a simple game that encompasses a number of core HYTOPIA SDK systems.
 * This example utilizes entities, spawning, rigid body, colliders and sensors, 
 * collision groups, audio, entity controller hooks, and more.
 * 
 * This example is a quick and dirty implementation of an overwatch style push the payload
 * in a multiplayer PvE style. Players start the game around the payload and must stay near it
 * for it to move towards the next waypoint. Enemies spawn near the next arget waypoint of 
 * the payload and swarm towards the players. Players can left click to shoot spiders with
 * bullets.
 * 
 * This example is not meant to be a polished game, but rather a demonstration of how to use
 * the SDK to build your own games. 
 * 
 * In a polished implementation, we'd be using multiple files and not just index.ts to
 * break out and properly organize game behavior and mechanics.
 */

import {
  Audio,
  BlockType,
  PlayerCameraMode,
  ColliderShape,
  CollisionGroup,
  PlayerEntityController,
  Entity,
  PlayerEntity,
  RigidBodyType,
  SimpleEntityController,
  Vector3,
  World,
  startServer,
  Collider,
} from 'hytopia';

import type {
  PlayerInput,
  PlayerCameraOrientation,
  QuaternionLike,
  Vector3Like,
} from 'hytopia';

import map from './assets/map.json';

// Constants
const BULLET_SPEED = 50;

const PATHFIND_ACCUMULATOR_THRESHOLD = 60;
const PAYLOAD_SPAWN_COORDINATE = { x: 1.5, y: 2.6, z: 69.5 };
const PAYLOAD_PER_PLAYER_SPEED = 1;
const PAYLOAD_MAX_SPEED = 5;
const PAYLOAD_WAYPOINT_COORDINATES = [
  { x: 1.5, y: 0, z: 1.5 },
  { x: 60.5, y: 0, z: 1.5 },
  { x: 60.5, y: 0, z: -62.5 },
];
const PLAYER_SPAWN_COORDINATES = [
  { x: 4, y: 3, z: 71 },
  { x: -2, y: 3, z: 68 },
  { x: 0, y: 3, z: 66 },
  { x: 3, y: 3, z: 66 },
  { x: 5, y: 3, z: 68 },
];
const PAYLOAD_WAYPOINT_ENEMY_SPAWNS = [
  [
    { x: -16, y: 2, z: 1 },
    { x: 9, y: 2, z: -18 },
  ],
  [
    { x: 61, y: 2, z: 19 },
    { x: 75, y: 2, z: -7 },
  ],
  [
    { x: 44, y: 2, z: -62 },
    { x: 60, y: 2, z: -76 },
    { x: 76, y: 2, z: -76 },
  ],
];

// Simple game state tracking via globals.
const enemyHealth: Record<number, number> = {}; // Entity id -> health
const enemyPathfindAccumulators: Record<number, number> = {}; // Entity id -> accumulator, so we don't pathfind each tick
const enemyPathfindingTargets: Record<number, Vector3Like> = {}; // Entity id -> target coordinate
const playerEntityHealth: Record<number, number> = {}; // Player entity id -> health
let started = false; // Game started flag
let payloadEntity: Entity | null = null; // Payload entity
let payloadPlayerEntityCount = 0; // Number of player entities within the payload sensor, minus number of enemies
let playerCount = 0; // Number of players in the game
let targetWaypointCoordinateIndex = 0; // Current waypoint coordinate index for the payload

// Run
startServer(world => { // Perform our game setup logic in the startServer init callback here.
  const chatManager = world.chatManager;

  // Uncomment this to visualize physics vertices, will cause noticable lag.
  // world.simulation.enableDebugRendering(true);

  // Load Map
  world.loadMap(map);

  // Setup Player Join & Spawn Controlled Entity
  world.onPlayerJoin = player => {
    const playerEntity = new PlayerEntity({ // Create an entity our newly joined player controls
      player,
      name: 'Player',
      modelUri: 'models/player-with-gun.gltf',
      modelLoopedAnimations: [ 'idle' ],
      modelScale: 0.5,
    });

    player.ui.load('ui/index.html');

    // Setup a first person camera for the player
    player.camera.setMode(PlayerCameraMode.FIRST_PERSON); // set first person mode
    player.camera.setOffset({ x: 0, y: 0.4, z: 0 }); // shift camrea up on Y axis so we see from "head" perspective.
    player.camera.setModelHiddenNodes([ 'head', 'neck' ]); // hide the head node from the model so we don't see it in the camera, this is just hidden for the controlling player.
    player.camera.setForwardOffset(0.3); // Shift the camera forward so we are looking slightly in front of where the player is looking.

    // Spawn the player entity at a random coordinate
    const randomSpawnCoordinate = PLAYER_SPAWN_COORDINATES[Math.floor(Math.random() * PLAYER_SPAWN_COORDINATES.length)];
    playerEntity.spawn(world, randomSpawnCoordinate);

    // We need to do some custom logic for player inputs, so let's assign custom onTick handler to the default player controller.
    playerEntity.controller!.onTickWithPlayerInput = onTickWithPlayerInput;

    // Set custom collision groups for the player entity, this is so we can reference the PLAYER collision group
    // specifically in enemy collision sensors.
    playerEntity.setCollisionGroupsForSolidColliders({
      belongsTo: [ CollisionGroup.ENTITY, CollisionGroup.PLAYER ],
      collidesWith: [ CollisionGroup.ALL ],
    });

    // Initialize player health
    playerEntityHealth[playerEntity.id!] = 20;

    // Increment player count
    playerCount++;

    // Send a message to all players informing them that a new player has joined
    chatManager.sendBroadcastMessage(`Player ${player.username} has joined the game!`, 'FFFFFF');

    // If the game hasn't started yet, send a message to all players to start the game
    if (!started) {
      chatManager.sendBroadcastMessage('Enter command /start to start the game!', 'FFFFFF');
    }
  };

  // Setup Player Leave & Despawn Controlled Entity
  world.onPlayerLeave = player => {
    // Despawn all player entities for the player that left
    // We apply a translation prior to despawn because of a bug in the RAPIER
    // physics engine we use where entities despawned to not trigger a collision
    // event for leaving a sensor. This is a workaround till a better solution is found.
    world.entityManager.getPlayerEntitiesByPlayer(player).forEach(entity => {
      entity.setPosition({ x: 0, y: 100, z: 0 });
      setTimeout(() => entity.despawn(), 50); // Despawn after a short delay so we step the physics after translating it so leaving the sensor registers.
    });

    playerCount--;

    chatManager.sendBroadcastMessage(`Player ${player.username} has left the game!`, 'FFFFFF');
  };

  // Spawn Payload
  spawnPayloadEntity(world);

  // Start spawning enemies
  startEnemySpawnLoop(world);

  // Game Commands
  chatManager.registerCommand('/start', () => {
    chatManager.sendBroadcastMessage('Game started!');
    started = true;
  });

  chatManager.registerCommand('/stop', () => {
    chatManager.sendBroadcastMessage('Game stopped!');
    started = false;
  });

  // Start ambient music for all players
  (new Audio({
    uri: 'audio/music/game.mp3',
    loop: true,
    volume: 0.2,
  })).play(world);
});

// Helper Functions
function startEnemySpawnLoop(world: World) {
  let spawnInterval;

  const spawn = () => { // Simple spawn loop that spawns enemies relative to the payload's current waypoint
    const possibleSpawnCoordinate = PAYLOAD_WAYPOINT_ENEMY_SPAWNS[targetWaypointCoordinateIndex];
    
    if (!possibleSpawnCoordinate) {
      return console.warn('No possible spawn coordinate found!');
    }

    if (started) {
      for (let i = 0; i < playerCount; i++) {
        spawnSpider(world, possibleSpawnCoordinate[Math.floor(Math.random() * possibleSpawnCoordinate.length)]);
      }
    }

    spawnInterval = 3500 - targetWaypointCoordinateIndex * 1000;

    setTimeout(spawn, spawnInterval);
  };

  spawn();
}

function spawnBullet(world: World, coordinate: Vector3Like, direction: Vector3Like) {
  // Spawn a bullet when the player shoots.
  const bullet = new Entity({
    name: 'Bullet',
    modelUri: 'models/bullet.gltf',
    modelScale: 0.3,
    rigidBodyOptions: {
      type: RigidBodyType.KINEMATIC_VELOCITY, // Kinematic means entity's rigid body will not be affected by physics. KINEMATIC_VELOCITY means the entity is moved by setting velocity.
      linearVelocity: {
        x: direction.x * BULLET_SPEED,
        y: direction.y * BULLET_SPEED,
        z: direction.z * BULLET_SPEED,
      },
      rotation: getRotationFromDirection(direction), // Get the rotation from the direction vector so it's facing the right way we shot it
    },
  });

  bullet.onBlockCollision = (bullet: Entity, block: BlockType, started: boolean) => { // If the bullet hits a block, despawn it
    if (started) {
      bullet.despawn();
    }
  };

  bullet.onEntityCollision = (bullet: Entity, otherEntity: Entity, started: boolean) => { // If the bullet hits an enemy, deal damage if it is a Spider
    if (!started || otherEntity.name !== 'Spider') {
      return;
    }
    
    enemyHealth[otherEntity.id!]--;

    // Apply knockback, the knockback effect is less if the spider is larger, and more if it is smaller
    // because of how the physics simulation applies forces relative to automatically calculated mass from the spider's
    // size
    const bulletDirection = bullet.directionFromRotation;
    const mass = otherEntity.mass;
    const knockback = 14 * mass;

    otherEntity.applyImpulse({
      x: -bulletDirection.x * knockback,
      y: 0,
      z: -bulletDirection.z * knockback,
    });

    if (enemyHealth[otherEntity.id!] <= 0) {
      // YEET the spider before despawning it so it registers leaving the sensor
      otherEntity.setPosition({ x: 0, y: 100, z: 0 });
      setTimeout(() => { otherEntity.despawn(); }, 50); // Despawn after a short delay so we step the physics after translating it so leaving the sensor registers.
    }

    bullet.despawn();
  };

  bullet.spawn(world, coordinate);

  // Play a bullet noise that follows the bullet spatially
  (new Audio({
    uri: 'audio/sfx/shoot.mp3',
    playbackRate: 2,
    volume: 1,
    attachedToEntity: bullet,
    referenceDistance: 20,
  })).play(world);

  return bullet;
}

function spawnPayloadEntity(world: World) {
  if (payloadEntity) {
    return console.warn('Payload entity already exists!');
  }

  payloadEntity = new Entity({
    controller: new SimpleEntityController(),
    name: 'Payload',
    modelUri: 'models/payload.gltf',
    modelScale: 0.7,
    modelLoopedAnimations: [ 'idle' ],
    rigidBodyOptions: {
      type: RigidBodyType.KINEMATIC_POSITION,
      colliders: [
        // Get hitbox collider as collider options based on the model & scale.
        Collider.optionsFromModelUri('models/payload.gltf', 0.7),
        {
          shape: ColliderShape.BLOCK, // Create a proximity sensor for movement when players are near.
          halfExtents: { x: 3.75, y: 2, z: 6 },
          isSensor: true,
          collisionGroups: {
            belongsTo: [ CollisionGroup.ENTITY_SENSOR ],
            collidesWith: [ CollisionGroup.PLAYER, CollisionGroup.ENTITY ],
          },
          // We use a onCollision handler specific to this sensor, and 
          // not the whole entity, so we can track the number of players in the payload sensor.
          onCollision: (other: BlockType | Entity, started: boolean) => { 
            if (other instanceof PlayerEntity) {
              started ? payloadPlayerEntityCount++ : payloadPlayerEntityCount--;
            } else if (other instanceof Entity) {
              started ? payloadPlayerEntityCount-- : payloadPlayerEntityCount++;
            }
          },
        },
      ],
    },
  });

  payloadEntity.onTick = onTickPathfindPayload; // Use our own basic pathfinding function each tick of the game for the payload.
  payloadEntity.spawn(world, PAYLOAD_SPAWN_COORDINATE); // Spawn the payload at the designated spawn coordinate

  (new Audio({ // Play a looped idle sound that follows the payload spatially
    uri: 'audio/sfx/payload-idle.mp3',
    loop: true,
    attachedToEntity: payloadEntity,
    volume: 0.25,
    referenceDistance: 5, // Reference distance affects how loud the audio is relative to a player's proximity to the entity
  })).play(world);
} 

function spawnSpider(world: World, coordinate: Vector3Like) {
  const baseScale = 0.5;
  const baseSpeed = 3;
  const randomScaleMultiplier = Math.random() * 2 + 1; // Random value between 1 and 3 // Random scale multiplier to make each spider a different size
  const targetPlayers = new Set<PlayerEntity>();

  const spider = new Entity({
    controller: new SimpleEntityController(),
    name: 'Spider',
    modelUri: 'models/spider.gltf',
    modelLoopedAnimations: [ 'walk' ],
    modelScale: baseScale * randomScaleMultiplier,
    rigidBodyOptions: {
      type: RigidBodyType.DYNAMIC,
      enabledRotations: { x: false, y: true, z: false },
      colliders: [
        // Get hitbox collider as collider options based on the model & scale.
        Collider.optionsFromModelUri('models/spider.gltf', baseScale * randomScaleMultiplier),
        {
          shape: ColliderShape.CYLINDER,
          radius: 20,
          halfHeight: 1,
          isSensor: true,
          tag: 'aggro-sensor', // unecessary but for clarity
          collisionGroups: {
            belongsTo: [ CollisionGroup.ENTITY_SENSOR ],
            collidesWith: [ CollisionGroup.PLAYER ],
          },
          onCollision: (other: BlockType | Entity, started: boolean) => { // If a player enters or exits the aggro sensor, add or remove them from the target players set
            if (other instanceof PlayerEntity) {
              started ? targetPlayers.add(other) : targetPlayers.delete(other);
            }
          },
        },
      ],
    },
  });

  spider.onTick = (entity: Entity, tickDeltaMs: number) => onTickPathfindEnemy( // Use our own basic pathfinding function each tick of the game for the enemy
    entity,
    targetPlayers,
    baseSpeed * randomScaleMultiplier,
    tickDeltaMs,
  );

  spider.onEntityCollision = (spider: Entity, entity: Entity, started: boolean) => { // If the spider hits a player, deal damage and apply knockback
    if (started && entity instanceof PlayerEntity && entity.isSpawned) {
      const spiderDirection = spider.directionFromRotation;
      const knockback = 4 * randomScaleMultiplier;

      entity.applyImpulse({
        x: -spiderDirection.x * knockback,
        y: 4,
        z: -spiderDirection.z * knockback,
      });

      (new Audio({
        uri: 'audio/sfx/damage.wav',
        volume: 0.2,
        attachedToEntity: spider,
        referenceDistance: 8,
      })).play(world);

      damagePlayer(entity);
    }
  };

  spider.spawn(world, coordinate);

  // Give the spider a health value relative to its size, bigger = more health
  enemyHealth[spider.id!] = 2 * Math.round(randomScaleMultiplier);
}

function onTickPathfindPayload(entity: Entity) { // Movement logic for the payload
  const speed = started // Set the payload speed relative to the number of players in the payload sensor
    ? Math.max(Math.min(PAYLOAD_PER_PLAYER_SPEED * payloadPlayerEntityCount, PAYLOAD_MAX_SPEED), 0)
    : 0;

  if (!speed) { // Play animations based on if its moving or not
    entity.stopModelAnimations(Array.from(entity.modelLoopedAnimations).filter(v => v !== 'idle'));
    entity.startModelLoopedAnimations([ 'idle' ]);
  } else {
    entity.stopModelAnimations(Array.from(entity.modelLoopedAnimations).filter(v => v !== 'walk'));
    entity.startModelLoopedAnimations([ 'walk' ]);
  }

  const targetWaypointCoordinate = PAYLOAD_WAYPOINT_COORDINATES[targetWaypointCoordinateIndex];

  if (!targetWaypointCoordinate) {
    return console.warn('Payload destination reached!! Game won!!');
  }

  if (!(entity.controller instanceof SimpleEntityController)) { // type guard
    return console.warn('Payload entity does not have a SimpleEntityController!');
  }

  entity.controller.move(targetWaypointCoordinate, speed, {
    moveCompleteCallback: () => targetWaypointCoordinateIndex++,
    moveIgnoreAxes: { y: true },
  });

  entity.controller.face(targetWaypointCoordinate, speed / 2);
}

function onTickPathfindEnemy(entity: Entity, targetPlayers: Set<PlayerEntity>, speed: number, _tickDeltaMs: number) {
  if (!entity.isSpawned || !payloadEntity) return;
  
  const entityId = entity.id!;
  enemyPathfindAccumulators[entityId] ??= 0; // Initialize the accumulator for this enemy if it isn't initialized yet

  if (!enemyPathfindingTargets[entityId] || enemyPathfindAccumulators[entityId] >= PATHFIND_ACCUMULATOR_THRESHOLD) {
    const targetPlayer = targetPlayers.values().next().value as PlayerEntity | undefined;

    enemyPathfindingTargets[entityId] = targetPlayer?.isSpawned
      ? targetPlayer.position
      : payloadEntity.position;

    enemyPathfindAccumulators[entityId] -= PATHFIND_ACCUMULATOR_THRESHOLD;

    // Make the spider jump if its close to the target player
    const currentPosition = entity.position;
    const dx = enemyPathfindingTargets[entityId].x - currentPosition.x;
    const dz = enemyPathfindingTargets[entityId].z - currentPosition.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    if (distance < 10) {
      const mass = entity.mass;
      entity.applyImpulse({ x: 0, y: (10 * Math.random() + 5) * mass, z: 0 });
    }

    // Handle Movement
    if (!(entity.controller instanceof SimpleEntityController)) {
      return console.warn('Enemy entity does not have a SimpleEntityController!');
    }
  
    const targetPosition = enemyPathfindingTargets[entityId];
    entity.controller.move(targetPosition, speed, { moveIgnoreAxes: { y: true } });
    entity.controller.face(targetPosition, speed / 2);
  }

  enemyPathfindAccumulators[entityId]++;
}

function onTickWithPlayerInput(this: PlayerEntityController, entity: PlayerEntity, input: PlayerInput, cameraOrientation: PlayerCameraOrientation, _deltaTimeMs: number) {
  if (!entity.world) return;

  if (input.ml) {
    const world = entity.world;
    const direction = Vector3.fromVector3Like(entity.directionFromRotation);

    direction.y = Math.sin(cameraOrientation.pitch);

    // Adjust horizontal components based on pitch
    const cosP = Math.cos(cameraOrientation.pitch);
    direction.x = -direction.x * cosP;
    direction.z = -direction.z * cosP;

    // Normalize the direction vector to unit length
    direction.normalize();

    entity.startModelOneshotAnimations([ 'shoot' ]);

    // Adjust bullet origin roughly for camera offset so crosshair is accurate
    const bulletOrigin = entity.position;
    bulletOrigin.y += 0.65;

    const bullet = spawnBullet(world, bulletOrigin, direction);
    setTimeout(() => bullet.isSpawned && bullet.despawn(), 2000);
  }
}

function damagePlayer(playerEntity: PlayerEntity) {
  const chatManager = playerEntity.world!.chatManager;
  
  playerEntityHealth[playerEntity.id!]--;

  chatManager.sendPlayerMessage(
    playerEntity.player, 
    `You have been hit! You have ${playerEntityHealth[playerEntity.id!]} health remaining.`, 
    'FF0000',
  );

  if (playerEntityHealth[playerEntity.id!] <= 0) {
    chatManager.sendPlayerMessage( // Alert the player they've been damaged, since we don't have UI support yet, we just use chat
      playerEntity.player,
      'You have died!',
      'FF0000',
    );

    playerEntity.despawn();
  }
}

function getRotationFromDirection(direction: Vector3Like): QuaternionLike {
  // Calculate yaw (rotation around Y-axis)
  const yaw = Math.atan2(-direction.x, -direction.z);
  
  // Calculate pitch (rotation around X-axis)
  const pitch = Math.asin(direction.y);

  // Pre-calculate common terms
  const halfYaw = yaw * 0.5;
  const halfPitch = pitch * 0.5;
  const cosHalfYaw = Math.cos(halfYaw);
  const sinHalfYaw = Math.sin(halfYaw);
  const cosHalfPitch = Math.cos(halfPitch);
  const sinHalfPitch = Math.sin(halfPitch);

  // Convert to quaternion
  return {
    x: sinHalfPitch * cosHalfYaw,
    y: sinHalfYaw * cosHalfPitch,
    z: sinHalfYaw * sinHalfPitch,
    w: cosHalfPitch * cosHalfYaw,
  };
}
