<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [GameServer](./server.gameserver.md)

## GameServer class

Manages the game and associated worlds and systems.

**Signature:**

```typescript
export default class GameServer 
```

## Remarks

This class is used as a singleton and should be accessed via the `instance` property

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `GameServer` class.

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

[instance](./server.gameserver.instance.md)


</td><td>

`static`

`readonly`


</td><td>

[GameServer](./server.gameserver.md)


</td><td>

The singleton instance of the game server.


</td></tr>
<tr><td>

[modelRegistry](./server.gameserver.modelregistry.md)


</td><td>

`readonly`


</td><td>

[ModelRegistry](./server.modelregistry.md)


</td><td>

The model manager for the game server.


</td></tr>
<tr><td>

[playerManager](./server.gameserver.playermanager.md)


</td><td>

`readonly`


</td><td>

[PlayerManager](./server.playermanager.md)


</td><td>

The player manager for the game server.


</td></tr>
<tr><td>

[webServer](./server.gameserver.webserver.md)


</td><td>

`readonly`


</td><td>

WebServer


</td><td>

The web server for the game server.


</td></tr>
<tr><td>

[worlds](./server.gameserver.worlds.md)


</td><td>

`readonly`


</td><td>

{ \[id: string\]: [World](./server.world.md)<!-- -->; }


</td><td>

The worlds managed by the game server.


</td></tr>
</tbody></table>
