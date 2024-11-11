<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [World](./server.world.md)

## World class

**Signature:**

```typescript
export default class World implements protocol.Serializable 
```
**Implements:** protocol.Serializable

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(worldData)](./server.world._constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `World` class


</td></tr>
</tbody></table>

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[audioManager](./server.world.audiomanager.md)


</td><td>

`readonly`


</td><td>

[AudioManager](./server.audiomanager.md)


</td><td>


</td></tr>
<tr><td>

[blockTypeRegistry](./server.world.blocktyperegistry.md)


</td><td>

`readonly`


</td><td>

[BlockTypeRegistry](./server.blocktyperegistry.md)


</td><td>


</td></tr>
<tr><td>

[chatManager](./server.world.chatmanager.md)


</td><td>

`readonly`


</td><td>

[ChatManager](./server.chatmanager.md)


</td><td>


</td></tr>
<tr><td>

[chunkLattice](./server.world.chunklattice.md)


</td><td>

`readonly`


</td><td>

[ChunkLattice](./server.chunklattice.md)


</td><td>


</td></tr>
<tr><td>

[entityManager](./server.world.entitymanager.md)


</td><td>

`readonly`


</td><td>

[EntityManager](./server.entitymanager.md)


</td><td>


</td></tr>
<tr><td>

[eventRouter](./server.world.eventrouter.md)


</td><td>

`readonly`


</td><td>

[EventRouter](./server.eventrouter.md)


</td><td>


</td></tr>
<tr><td>

[id](./server.world.id.md)


</td><td>

`readonly`


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[loop](./server.world.loop.md)


</td><td>

`readonly`


</td><td>

[WorldLoop](./server.worldloop.md)


</td><td>


</td></tr>
<tr><td>

[name](./server.world.name.md)


</td><td>

`readonly`


</td><td>

string


</td><td>


</td></tr>
<tr><td>

[networkSynchronizer](./server.world.networksynchronizer.md)


</td><td>

`readonly`


</td><td>

NetworkSynchronizer


</td><td>


</td></tr>
<tr><td>

[onPlayerJoin?](./server.world.onplayerjoin.md)


</td><td>


</td><td>

(player: [Player](./server.player.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[onPlayerLeave?](./server.world.onplayerleave.md)


</td><td>


</td><td>

(player: [Player](./server.player.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[simulation](./server.world.simulation.md)


</td><td>

`readonly`


</td><td>

[Simulation](./server.simulation.md)


</td><td>


</td></tr>
<tr><td>

[skyboxUri](./server.world.skyboxuri.md)


</td><td>

`readonly`


</td><td>

string


</td><td>


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[serialize()](./server.world.serialize.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[start()](./server.world.start.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[stop()](./server.world.stop.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>