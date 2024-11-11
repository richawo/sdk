<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [HYTOPIA](./server.hytopia.md) &gt; [AudioOptions](./server.hytopia.audiooptions.md)

## HYTOPIA.AudioOptions interface

Options for creating an Audio instance.

**Signature:**

```typescript
export interface AudioOptions 
```

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

[attachedToEntity?](./server.hytopia.audiooptions.attachedtoentity.md)


</td><td>


</td><td>

[Entity](./server.entity.md)


</td><td>

_(Optional)_ If set, audio playback will follow the entity's position.


</td></tr>
<tr><td>

[detune?](./server.hytopia.audiooptions.detune.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The detuning of the audio in cents.


</td></tr>
<tr><td>

[distortion?](./server.hytopia.audiooptions.distortion.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The amount of distortion to apply to the audio.


</td></tr>
<tr><td>

[duration?](./server.hytopia.audiooptions.duration.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The duration of the audio in seconds. Defaults to full duration.


</td></tr>
<tr><td>

[loop?](./server.hytopia.audiooptions.loop.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether the audio should loop when it reaches the end. Defaults to false.


</td></tr>
<tr><td>

[offset?](./server.hytopia.audiooptions.offset.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The offset time in seconds from which the audio should start playing.


</td></tr>
<tr><td>

[playbackRate?](./server.hytopia.audiooptions.playbackrate.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The playback speed of the audio. Defaults to 1.


</td></tr>
<tr><td>

[position?](./server.hytopia.audiooptions.position.md)


</td><td>


</td><td>

[Vector3](./server.vector3.md)


</td><td>

_(Optional)_ The position in the world where the audio is played.


</td></tr>
<tr><td>

[referenceDistance?](./server.hytopia.audiooptions.referencedistance.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The reference distance for reducing volume as the audio source moves away from the listener.


</td></tr>
<tr><td>

[uri](./server.hytopia.audiooptions.uri.md)


</td><td>


</td><td>

string


</td><td>

The URI or path to the audio asset to be played.


</td></tr>
<tr><td>

[volume?](./server.hytopia.audiooptions.volume.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The volume level of the audio. Defaults to 0.5.


</td></tr>
</tbody></table>