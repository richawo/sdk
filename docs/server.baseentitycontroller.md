<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [BaseEntityController](./server.baseentitycontroller.md)

## BaseEntityController class

A base class for entity controller implementations.

**Signature:**

```typescript
export default abstract class BaseEntityController 
```

## Remarks

The BaseEntityController should be extended by a more specific entity controller that you or a plugin implements. Entity controllers are intended to be used as one controller instance per entity, but are flexible enough for edge cases such as if you want to create niche behavior of one controller for many entities that behave in unison.

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

[onAttach?](./server.baseentitycontroller.onattach.md)


</td><td>


</td><td>

(entity: [Entity](./server.entity.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_ A function that is called when the controller is attached to an entity. Useful for implementing attach logic without writing a new entity controller class.


</td></tr>
<tr><td>

[onDespawn?](./server.baseentitycontroller.ondespawn.md)


</td><td>


</td><td>

(entity: [Entity](./server.entity.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_ A function that is called when the controlled entity is despawned. Useful for implementing despawn logic without writing a new entity controller class.


</td></tr>
<tr><td>

[onDetach?](./server.baseentitycontroller.ondetach.md)


</td><td>


</td><td>

(entity: [Entity](./server.entity.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_ A function that is called when the controller is detached from an entity. Useful for implementing detach logic without writing a new entity controller class.


</td></tr>
<tr><td>

[onSpawn?](./server.baseentitycontroller.onspawn.md)


</td><td>


</td><td>

(entity: [Entity](./server.entity.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_ A function that is called when the controlled entity is spawned. Useful for implementing spawn logic without writing a new entity controller class.


</td></tr>
<tr><td>

[onTick?](./server.baseentitycontroller.ontick.md)


</td><td>


</td><td>

(entity: [Entity](./server.entity.md)<!-- -->, deltaTimeMs: number) =&gt; void


</td><td>

_(Optional)_ A function that is called every tick. Useful for implementing tick logic without writing a new entity controller class.


</td></tr>
<tr><td>

[onTickWithPlayerInput?](./server.baseentitycontroller.ontickwithplayerinput.md)


</td><td>


</td><td>

(entity: [PlayerEntity](./server.playerentity.md)<!-- -->, input: [PlayerInput](./server.playerinput.md)<!-- -->, cameraOrientation: [PlayerCameraOrientation](./server.playercameraorientation.md)<!-- -->, deltaTimeMs: number) =&gt; void


</td><td>

_(Optional)_ A function that is called every tick with player input by a PlayerEntity with this controller attached. Useful for implementing tick logic without writing a new entity controller class.


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

[attach(entity)](./server.baseentitycontroller.attach.md)


</td><td>


</td><td>

Override this method to handle the attachment of an entity to your entity controller.


</td></tr>
<tr><td>

[despawn(entity)](./server.baseentitycontroller.despawn.md)


</td><td>


</td><td>

Override this method to handle the despawn of an entity from your entity controller.


</td></tr>
<tr><td>

[detach(entity)](./server.baseentitycontroller.detach.md)


</td><td>


</td><td>

Override this method to handle the detachment of an entity from your entity controller.


</td></tr>
<tr><td>

[spawn(entity)](./server.baseentitycontroller.spawn.md)


</td><td>


</td><td>

Override this method to handle the spawning of an entity to your entity controller.


</td></tr>
<tr><td>

[tick(entity, deltaTimeMs)](./server.baseentitycontroller.tick.md)


</td><td>


</td><td>

Override this method to handle entity movements based on your entity controller.


</td></tr>
<tr><td>

[tickWithPlayerInput(entity, input, cameraOrientation, deltaTimeMs)](./server.baseentitycontroller.tickwithplayerinput.md)


</td><td>


</td><td>

Override this method to handle entity movements based on player input for your entity controller. This is called every tick by a PlayerEntity with a entity controller.


</td></tr>
</tbody></table>
