<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [PlayerUI](./server.playerui.md) &gt; [onData](./server.playerui.ondata.md)

## PlayerUI.onData property

A function that is called when the player's client UI sends data to the server.

**Signature:**

```typescript
onData?: (playerUI: PlayerUI, data: object) => void;
```

## Remarks

Data sent is an object of any shape defined by you and controlled with invocations of `hytopia.ui.sendData()` from your loaded client UI files.

