import {
  startServer,
  Audio,
  Player,
  PlayerEntity,
  PlayerUI,
} from 'hytopia';

import worldMap from './assets/map.json';

// Simple map for player -> singular controlled entity
const playerEntityMap = new Map<Player, PlayerEntity>();

startServer(world => {
  world.loadMap(worldMap);

  world.onPlayerJoin = player => {
    // Load the UI for the player.
    // This is loaded directly into a sandboxed iframe
    // overlaying the game. As long as it's an HTML file,
    // it can be loaded. You can bundle React, Svelte, or
    // any other framework into the UI you want to serve,
    // or just use plain HTML like in this example.
    player.ui.load('ui/index.html');

    const playerEntity = new PlayerEntity({
      player,
      name: 'Player',
      modelUri: 'models/player.gltf',
      modelLoopedAnimations: [ 'idle' ],
      modelScale: 0.5,
    });

    playerEntity.spawn(world, { x: 0, y: 10, z: 0 });

    // Set the player entity on our map for when
    // we do player list updates.
    playerEntityMap.set(player, playerEntity);

    // Handle data sent from player to server by client UI interactions we define. 
    // See the ui/index.html file for the UI code that sends the data.
    player.ui.onData = (playerUI: PlayerUI, data: Record<string, any>) => {
      if (data.type === 'teleport') {
        const randomX = Math.random() * 40 - 20; // Random between -20 and 20
        const randomY = Math.random() * 13 + 2;  // Random between 2 and 15
        const randomZ = Math.random() * 40 - 20; // Random between -20 and 20

        playerEntity.setPosition({ x: randomX, y: randomY, z: randomZ });
      }
    };
  };

  world.onPlayerLeave = player => {
    world.entityManager.getPlayerEntitiesByPlayer(player).forEach(entity => entity.despawn());
    // Remove the player entity from our map for our list.
    playerEntityMap.delete(player);
  };

  // Update the player list every 1 second, no need to send too frequently.
  // We want to balance not sending too much UI data too frequently, because
  // it is currently sent over the same connection as game packets and will
  // compete for critical game packet bandwidth on slower player connections.
  setInterval(updatePlayerList, 1000);

  new Audio({
    uri: 'audio/music/overworld.mp3',
    loop: true,
    volume: 0.2,
  }).play(world);
});

function updatePlayerList() {
  // Create a list of all connected players and their positions
  const playerListData = Array.from(playerEntityMap).map(([ player, entity ]) => {
    // For each player, return their username and current position
    return {
      username: player.username,
      position: entity.position, // Gets x,y,z coordinate
    };
  });

  // Send the updated player list to every connected player's UI
  for (const [ player ] of playerEntityMap) {
    player.ui.sendData({
      type: 'playerList', // Message type for UI to handle
      list: playerListData, // List of all players and positions
    });
  }
}


