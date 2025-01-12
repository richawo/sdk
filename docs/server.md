<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md)

## server package

## Classes

<table><thead><tr><th>

Class


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[Audio](./server.audio.md)


</td><td>

Represents a audio playback in a world.


</td></tr>
<tr><td>

[AudioManager](./server.audiomanager.md)


</td><td>

Manages audio instances in a world.


</td></tr>
<tr><td>

[Block](./server.block.md)


</td><td>

Represents a block in a world.


</td></tr>
<tr><td>

[BlockType](./server.blocktype.md)


</td><td>

Represents a block type.


</td></tr>
<tr><td>

[BlockTypeRegistry](./server.blocktyperegistry.md)


</td><td>

Manages known block types in a world.


</td></tr>
<tr><td>

[ChatManager](./server.chatmanager.md)


</td><td>

Manages chat and commands in a world.


</td></tr>
<tr><td>

[Chunk](./server.chunk.md)


</td><td>

A 16^3 chunk of blocks. Used to represent a world's terrain.


</td></tr>
<tr><td>

[ChunkLattice](./server.chunklattice.md)


</td><td>

A lattice of chunks that represent a world's terrain.


</td></tr>
<tr><td>

[Collider](./server.collider.md)


</td><td>

Represents a collider in a world's physics simulation.


</td></tr>
<tr><td>

[CollisionGroupsBuilder](./server.collisiongroupsbuilder.md)


</td><td>

A helper class for building and decoding collision groups.


</td></tr>
<tr><td>

[DefaultCharacterController](./server.defaultcharactercontroller.md)


</td><td>

The default character controller implementation.


</td></tr>
<tr><td>

[Entity](./server.entity.md)


</td><td>

Represents an entity in a world.


</td></tr>
<tr><td>

[EntityManager](./server.entitymanager.md)


</td><td>

Manages entities in a world.


</td></tr>
<tr><td>

[EventRouter](./server.eventrouter.md)


</td><td>

Manages event emission and assigned listener callbacks.


</td></tr>
<tr><td>

[GameServer](./server.gameserver.md)


</td><td>

Manages the game and associated worlds and systems.


</td></tr>
<tr><td>

[Player](./server.player.md)


</td><td>

A player in the game.


</td></tr>
<tr><td>

[PlayerEntity](./server.playerentity.md)


</td><td>

Represents an entity controlled by a player in a world.


</td></tr>
<tr><td>

[PlayerManager](./server.playermanager.md)


</td><td>

Manages all connected players in a game server.


</td></tr>
<tr><td>

[RigidBody](./server.rigidbody.md)


</td><td>

Represents a rigid body in a world's physics simulation.


</td></tr>
<tr><td>

[Simulation](./server.simulation.md)


</td><td>

Represents the physics simulation for a world.


</td></tr>
<tr><td>

[World](./server.world.md)


</td><td>

Represents a world in the game server.


</td></tr>
<tr><td>

[WorldLoop](./server.worldloop.md)


</td><td>

Manages the tick loop for a world.


</td></tr>
</tbody></table>

## Abstract Classes

<table><thead><tr><th>

Abstract Class


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[BaseCharacterController](./server.basecharactercontroller.md)


</td><td>

A base class for character controller implementations.


</td></tr>
</tbody></table>

## Enumerations

<table><thead><tr><th>

Enumeration


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[AudioEventType](./server.audioeventtype.md)


</td><td>

Event types an Audio instance can emit.


</td></tr>
<tr><td>

[BlockTypeRegistryEventType](./server.blocktyperegistryeventtype.md)


</td><td>

Event types a BlockTypeRegistry instance can emit.


</td></tr>
<tr><td>

[ChatEventType](./server.chateventtype.md)


</td><td>

Event types a ChatManager instance can emit.


</td></tr>
<tr><td>

[ChunkEventType](./server.chunkeventtype.md)


</td><td>

Event types a Chunk instance can emit.


</td></tr>
<tr><td>

[ColliderShape](./server.collidershape.md)


</td><td>

The shapes a collider can be.


</td></tr>
<tr><td>

[CollisionGroup](./server.collisiongroup.md)


</td><td>

The default collision groups.


</td></tr>
<tr><td>

[EntityEventType](./server.entityeventtype.md)


</td><td>

Event types an Entity instance can emit.


</td></tr>
<tr><td>

[GameServerEventType](./server.gameservereventtype.md)


</td><td>

Event types a GameServer instance can emit.


</td></tr>
<tr><td>

[PlayerEventType](./server.playereventtype.md)


</td><td>

Event types a Player can emit.


</td></tr>
<tr><td>

[RigidBodyType](./server.rigidbodytype.md)


</td><td>

The types a RigidBody can be.


</td></tr>
</tbody></table>

## Functions

<table><thead><tr><th>

Function


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[startServer(init)](./server.startserver.md)


</td><td>

The entry point for running game setup and starting the game server.


</td></tr>
</tbody></table>

## Interfaces

<table><thead><tr><th>

Interface


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[AudioOptions](./server.audiooptions.md)


</td><td>

Options for creating an Audio instance.


</td></tr>
<tr><td>

[BlockTypeOptions](./server.blocktypeoptions.md)


</td><td>

Options for creating a block type instance.


</td></tr>
<tr><td>

[ColliderOptions](./server.collideroptions.md)


</td><td>

Options for creating a Collider instance.


</td></tr>
<tr><td>

[DefaultCharacterControllerOptions](./server.defaultcharactercontrolleroptions.md)


</td><td>

Options for creating a DefaultCharacterController instance.


</td></tr>
<tr><td>

[EntityOptions](./server.entityoptions.md)


</td><td>

Options for creating an Entity instance.


</td></tr>
<tr><td>

[Event\_2](./server.event_2.md)


</td><td>

An EventRouter event.


</td></tr>
<tr><td>

[PlayerEntityOptions](./server.playerentityoptions.md)


</td><td>

Options for creating a PlayerEntity instance.


</td></tr>
<tr><td>

[RigidBodyOptions](./server.rigidbodyoptions.md)


</td><td>

Options for creating a RigidBody instance.


</td></tr>
<tr><td>

[Rotation](./server.rotation.md)


</td><td>

A rotation in quaternion form.


</td></tr>
<tr><td>

[SpdMatrix3](./server.spdmatrix3.md)


</td><td>

A 3x3 symmetric positive-definite matrix for spatial dynamics.


</td></tr>
<tr><td>

[Vector3](./server.vector3.md)


</td><td>

A 3-dimensional vector.


</td></tr>
<tr><td>

[Vector3Boolean](./server.vector3boolean.md)


</td><td>

A 3-dimensional vector of boolean values.


</td></tr>
<tr><td>

[WorldOptions](./server.worldoptions.md)


</td><td>

Options for creating a World instance.


</td></tr>
</tbody></table>

## Namespaces

<table><thead><tr><th>

Namespace


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[AudioEventPayload](./server.audioeventpayload.md)


</td><td>

Payloads for events an Audio instance can emit.


</td></tr>
<tr><td>

[BlockTypeRegistryEventPayload](./server.blocktyperegistryeventpayload.md)


</td><td>

Payloads for events a BlockTypeRegistry instance can emit.


</td></tr>
<tr><td>

[ChatEventPayload](./server.chateventpayload.md)


</td><td>

Payloads for events a ChatManager instance can emit.


</td></tr>
<tr><td>

[ChunkEventPayload](./server.chunkeventpayload.md)


</td><td>

Payloads for events a Chunk instance can emit.


</td></tr>
<tr><td>

[EntityEventPayload](./server.entityeventpayload.md)


</td><td>

Payloads for events an Entity instance can emit.


</td></tr>
<tr><td>

[GameServerEventPayload](./server.gameservereventpayload.md)


</td><td>

Payloads for events emitted by a GameServer instance.


</td></tr>
<tr><td>

[HYTOPIA](./server.hytopia.md)


</td><td>


</td></tr>
<tr><td>

[PlayerEventPayload](./server.playereventpayload.md)


</td><td>

Payloads for events a Player can emit.


</td></tr>
</tbody></table>

## Variables

<table><thead><tr><th>

Variable


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[DEFAULT\_ENTITY\_RIGID\_BODY\_OPTIONS](./server.default_entity_rigid_body_options.md)


</td><td>

The default rigid body options when EntityOptions.rigidBodyOptions is not provided.


</td></tr>
<tr><td>

[SUPPORTED\_INPUT\_KEYS](./server.supported_input_keys.md)


</td><td>

The input keys included in the PlayerInputState.


</td></tr>
</tbody></table>

## Type Aliases

<table><thead><tr><th>

Type Alias


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[CollisionCallback](./server.collisioncallback.md)


</td><td>

A callback function that is called when a collision occurs.


</td></tr>
<tr><td>

[CollisionGroups](./server.collisiongroups.md)


</td><td>

A set of collision groups.


</td></tr>
<tr><td>

[CommandCallback](./server.commandcallback.md)


</td><td>

A callback function for a chat command.


</td></tr>
<tr><td>

[DecodedCollisionGroups](./server.decodedcollisiongroups.md)


</td><td>

A decoded set of collision groups represented as their string equivalents.


</td></tr>
<tr><td>

[PlayerInputState](./server.playerinputstate.md)


</td><td>

The input state of a Player; keys from SUPPORTED\_INPUT\_KEYS.


</td></tr>
<tr><td>

[PlayerOrientationState](./server.playerorientationstate.md)


</td><td>

The camera orientation state of a Player.


</td></tr>
<tr><td>

[RawCollisionGroups](./server.rawcollisiongroups.md)


</td><td>

A raw set of collision groups represented as a 32-bit number.


</td></tr>
<tr><td>

[RigidBodyAdditionalMassProperties](./server.rigidbodyadditionalmassproperties.md)


</td><td>

Additional mass properties for a RigidBody.


</td></tr>
</tbody></table>
