<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [server](./server.md) &gt; [RigidBody](./server.rigidbody.md)

## RigidBody class

Represents a rigid body in a world's physics simulation.

**Signature:**

```typescript
export default class RigidBody 
```

## Remarks

Rigid bodies are the core of the physics simulation. They are used to represent physical objects (IE: entities) that can interact with each other.

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(options)](./server.rigidbody._constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `RigidBody` class


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

[colliders](./server.rigidbody.colliders.md)


</td><td>

`readonly`


</td><td>

Set&lt;[Collider](./server.collider.md)<!-- -->&gt;


</td><td>

The colliders of the rigid body.


</td></tr>
<tr><td>

[isCcdEnabled](./server.rigidbody.isccdenabled.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body has continuous collision detection enabled.


</td></tr>
<tr><td>

[isDynamic](./server.rigidbody.isdynamic.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is dynamic.


</td></tr>
<tr><td>

[isEnabled](./server.rigidbody.isenabled.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is enabled.


</td></tr>
<tr><td>

[isFixed](./server.rigidbody.isfixed.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is fixed.


</td></tr>
<tr><td>

[isKinematic](./server.rigidbody.iskinematic.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is kinematic.


</td></tr>
<tr><td>

[isKinematicPositionBased](./server.rigidbody.iskinematicpositionbased.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is kinematic position based.


</td></tr>
<tr><td>

[isKinematicVelocityBased](./server.rigidbody.iskinematicvelocitybased.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is kinematic velocity based.


</td></tr>
<tr><td>

[isMoving](./server.rigidbody.ismoving.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is moving.


</td></tr>
<tr><td>

[isRemoved](./server.rigidbody.isremoved.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body has been removed from the simulation.


</td></tr>
<tr><td>

[isSimulated](./server.rigidbody.issimulated.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is simulated.


</td></tr>
<tr><td>

[isSleeping](./server.rigidbody.issleeping.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Whether the rigid body is sleeping.


</td></tr>
<tr><td>

[numColliders](./server.rigidbody.numcolliders.md)


</td><td>

`readonly`


</td><td>

number


</td><td>

The number of colliders in the rigid body.


</td></tr>
<tr><td>

[rawRigidBody](./server.rigidbody.rawrigidbody.md)


</td><td>

`readonly`


</td><td>

RAPIER.RigidBody \| undefined


</td><td>

The raw RAPIER rigid body instance.


</td></tr>
<tr><td>

[tag](./server.rigidbody.tag.md)


</td><td>

`readonly`


</td><td>

string \| undefined


</td><td>

An arbitrary identifier tag of the rigid body. Useful for your own logic.


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

[addChildColliderToSimulation(collider)](./server.rigidbody.addchildcollidertosimulation.md)


</td><td>


</td><td>

Adds an unsimulated child collider to the rigid body for the simulation it belongs to.


</td></tr>
<tr><td>

[addForce(force)](./server.rigidbody.addforce.md)


</td><td>


</td><td>

Adds a force to the rigid body.


</td></tr>
<tr><td>

[addTorque(torque)](./server.rigidbody.addtorque.md)


</td><td>


</td><td>

Adds a torque to the rigid body.


</td></tr>
<tr><td>

[addToSimulation(simulation)](./server.rigidbody.addtosimulation.md)


</td><td>


</td><td>

Adds the rigid body to a simulation.


</td></tr>
<tr><td>

[applyImpulse(impulse)](./server.rigidbody.applyimpulse.md)


</td><td>


</td><td>

Applies an impulse to the rigid body.


</td></tr>
<tr><td>

[applyImpulseAtPoint(impulse, point)](./server.rigidbody.applyimpulseatpoint.md)


</td><td>


</td><td>

Applies an impulse to the rigid body at a point.


</td></tr>
<tr><td>

[applyTorqueImpulse(impulse)](./server.rigidbody.applytorqueimpulse.md)


</td><td>


</td><td>

Applies a torque impulse to the rigid body.


</td></tr>
<tr><td>

[createAndAddChildCollidersToSimulation(colliderOptions)](./server.rigidbody.createandaddchildcolliderstosimulation.md)


</td><td>


</td><td>

Creates and adds multiple child colliders to the rigid body for the simulation it belongs to.


</td></tr>
<tr><td>

[createAndAddChildColliderToSimulation(colliderOptions)](./server.rigidbody.createandaddchildcollidertosimulation.md)


</td><td>


</td><td>

Creates and adds a child collider to the rigid body for the simulation it belongs to.


</td></tr>
<tr><td>

[getAdditionalMass()](./server.rigidbody.getadditionalmass.md)


</td><td>


</td><td>

Gets the additional mass of the rigid body.


</td></tr>
<tr><td>

[getAdditionalSolverIterations()](./server.rigidbody.getadditionalsolveriterations.md)


</td><td>


</td><td>

Gets the additional solver iterations of the rigid body.


</td></tr>
<tr><td>

[getAngularDamping()](./server.rigidbody.getangulardamping.md)


</td><td>


</td><td>

Gets the angular damping of the rigid body.


</td></tr>
<tr><td>

[getAngularVelocity()](./server.rigidbody.getangularvelocity.md)


</td><td>


</td><td>

Gets the angular velocity of the rigid body.


</td></tr>
<tr><td>

[getCollidersByTag(tag)](./server.rigidbody.getcollidersbytag.md)


</td><td>


</td><td>

Gets the colliders of the rigid body by tag.


</td></tr>
<tr><td>

[getDirectionFromRotation()](./server.rigidbody.getdirectionfromrotation.md)


</td><td>


</td><td>

Gets the direction from the rotation of the rigid body.


</td></tr>
<tr><td>

[getDominanceGroup()](./server.rigidbody.getdominancegroup.md)


</td><td>


</td><td>

Gets the dominance group of the rigid body.


</td></tr>
<tr><td>

[getEffectiveAngularInertia()](./server.rigidbody.geteffectiveangularinertia.md)


</td><td>


</td><td>

Gets the effective angular inertia of the rigid body.


</td></tr>
<tr><td>

[getEffectiveInverseMass()](./server.rigidbody.geteffectiveinversemass.md)


</td><td>


</td><td>

Gets the effective inverse mass of the rigid body.


</td></tr>
<tr><td>

[getEffectiveWorldInversePrincipalAngularInertiaSqrt()](./server.rigidbody.geteffectiveworldinverseprincipalangularinertiasqrt.md)


</td><td>


</td><td>

Gets the effective world inverse principal angular inertia square root of the rigid body.


</td></tr>
<tr><td>

[getEnabledRotations()](./server.rigidbody.getenabledrotations.md)


</td><td>


</td><td>

Gets the enabled rotations of the rigid body.


</td></tr>
<tr><td>

[getEnabledTranslations()](./server.rigidbody.getenabledtranslations.md)


</td><td>


</td><td>

Gets the enabled translations of the rigid body.


</td></tr>
<tr><td>

[getGravityScale()](./server.rigidbody.getgravityscale.md)


</td><td>


</td><td>

Gets the gravity scale of the rigid body.


</td></tr>
<tr><td>

[getInverseMass()](./server.rigidbody.getinversemass.md)


</td><td>


</td><td>

Gets the inverse mass of the rigid body.


</td></tr>
<tr><td>

[getInversePrincipalAngularInertiaSqrt()](./server.rigidbody.getinverseprincipalangularinertiasqrt.md)


</td><td>


</td><td>

Gets the inverse principal angular inertia square root of the rigid body.


</td></tr>
<tr><td>

[getLinearDamping()](./server.rigidbody.getlineardamping.md)


</td><td>


</td><td>

Gets the linear damping of the rigid body.


</td></tr>
<tr><td>

[getLinearVelocity()](./server.rigidbody.getlinearvelocity.md)


</td><td>


</td><td>

Gets the linear velocity of the rigid body.


</td></tr>
<tr><td>

[getLocalCenterOfMass()](./server.rigidbody.getlocalcenterofmass.md)


</td><td>


</td><td>

Gets the local center of mass of the rigid body.


</td></tr>
<tr><td>

[getMass()](./server.rigidbody.getmass.md)


</td><td>


</td><td>

Gets the mass of the rigid body.


</td></tr>
<tr><td>

[getNextKinematicRotation()](./server.rigidbody.getnextkinematicrotation.md)


</td><td>


</td><td>

Gets the next kinematic rotation of the rigid body.


</td></tr>
<tr><td>

[getNextKinematicTranslation()](./server.rigidbody.getnextkinematictranslation.md)


</td><td>


</td><td>

Gets the next kinematic translation of the rigid body.


</td></tr>
<tr><td>

[getPrincipalAngularInertia()](./server.rigidbody.getprincipalangularinertia.md)


</td><td>


</td><td>

Gets the principal angular inertia of the rigid body.


</td></tr>
<tr><td>

[getPrincipalAngularInertiaLocalFrame()](./server.rigidbody.getprincipalangularinertialocalframe.md)


</td><td>


</td><td>

Gets the principal angular inertia local frame of the rigid body.


</td></tr>
<tr><td>

[getRotation()](./server.rigidbody.getrotation.md)


</td><td>


</td><td>

Gets the rotation of the rigid body.


</td></tr>
<tr><td>

[getSoftCcdPrediction()](./server.rigidbody.getsoftccdprediction.md)


</td><td>


</td><td>

Gets the soft ccd prediction of the rigid body.


</td></tr>
<tr><td>

[getTranslation()](./server.rigidbody.gettranslation.md)


</td><td>


</td><td>

Gets the translation of the rigid body.


</td></tr>
<tr><td>

[getType()](./server.rigidbody.gettype.md)


</td><td>


</td><td>

Gets the type of the rigid body.


</td></tr>
<tr><td>

[getWorldCenterOfMass()](./server.rigidbody.getworldcenterofmass.md)


</td><td>


</td><td>

Gets the world center of mass of the rigid body.


</td></tr>
<tr><td>

[lockAllRotations()](./server.rigidbody.lockallrotations.md)


</td><td>


</td><td>

Locks all rotations of the rigid body.


</td></tr>
<tr><td>

[lockAllTranslations()](./server.rigidbody.lockalltranslations.md)


</td><td>


</td><td>

Locks all translations of the rigid body.


</td></tr>
<tr><td>

[removeFromSimulation()](./server.rigidbody.removefromsimulation.md)


</td><td>


</td><td>

Removes the rigid body from the simulation it belongs to.


</td></tr>
<tr><td>

[setAdditionalMass(additionalMass)](./server.rigidbody.setadditionalmass.md)


</td><td>


</td><td>

Sets the additional mass of the rigid body.


</td></tr>
<tr><td>

[setAdditionalMassProperties(additionalMassProperties)](./server.rigidbody.setadditionalmassproperties.md)


</td><td>


</td><td>

Sets the additional mass properties of the rigid body.


</td></tr>
<tr><td>

[setAdditionalSolverIterations(solverIterations)](./server.rigidbody.setadditionalsolveriterations.md)


</td><td>


</td><td>

Sets the additional solver iterations of the rigid body.


</td></tr>
<tr><td>

[setAngularDamping(angularDamping)](./server.rigidbody.setangulardamping.md)


</td><td>


</td><td>

Sets the angular damping of the rigid body.


</td></tr>
<tr><td>

[setAngularVelocity(angularVelocity)](./server.rigidbody.setangularvelocity.md)


</td><td>


</td><td>

Sets the angular velocity of the rigid body.


</td></tr>
<tr><td>

[setCcdEnabled(ccdEnabled)](./server.rigidbody.setccdenabled.md)


</td><td>


</td><td>

Sets whether the rigid body has continuous collision detection enabled.


</td></tr>
<tr><td>

[setCollisionGroupsForSolidColliders(collisionGroups)](./server.rigidbody.setcollisiongroupsforsolidcolliders.md)


</td><td>


</td><td>

Sets the collision groups for solid colliders (non-sensor) of the rigid body.


</td></tr>
<tr><td>

[setDominanceGroup(dominanceGroup)](./server.rigidbody.setdominancegroup.md)


</td><td>


</td><td>

Sets the dominance group of the rigid body.


</td></tr>
<tr><td>

[setEnabled(enabled)](./server.rigidbody.setenabled.md)


</td><td>


</td><td>

Sets whether the rigid body is enabled.


</td></tr>
<tr><td>

[setEnabledRotations(enabledRotations)](./server.rigidbody.setenabledrotations.md)


</td><td>


</td><td>

Sets whether the rigid body has enabled rotations.


</td></tr>
<tr><td>

[setEnabledTranslations(enabledTranslations)](./server.rigidbody.setenabledtranslations.md)


</td><td>


</td><td>

Sets whether the rigid body has enabled translations.


</td></tr>
<tr><td>

[setGravityScale(gravityScale)](./server.rigidbody.setgravityscale.md)


</td><td>


</td><td>

Sets the gravity scale of the rigid body.


</td></tr>
<tr><td>

[setLinearDamping(linearDamping)](./server.rigidbody.setlineardamping.md)


</td><td>


</td><td>

Sets the linear damping of the rigid body.


</td></tr>
<tr><td>

[setLinearVelocity(linearVelocity)](./server.rigidbody.setlinearvelocity.md)


</td><td>


</td><td>

Sets the linear velocity of the rigid body.


</td></tr>
<tr><td>

[setNextKinematicRotation(nextKinematicRotation)](./server.rigidbody.setnextkinematicrotation.md)


</td><td>


</td><td>

Sets the next kinematic rotation of the rigid body.


</td></tr>
<tr><td>

[setNextKinematicTranslation(nextKinematicTranslation)](./server.rigidbody.setnextkinematictranslation.md)


</td><td>


</td><td>

Sets the next kinematic translation of the rigid body.


</td></tr>
<tr><td>

[setRotation(rotation)](./server.rigidbody.setrotation.md)


</td><td>


</td><td>

Sets the rotation of the rigid body.


</td></tr>
<tr><td>

[setSleeping(sleeping)](./server.rigidbody.setsleeping.md)


</td><td>


</td><td>

Sets whether the rigid body is sleeping.


</td></tr>
<tr><td>

[setSoftCcdPrediction(softCcdPrediction)](./server.rigidbody.setsoftccdprediction.md)


</td><td>


</td><td>

Sets the soft ccd prediction of the rigid body.


</td></tr>
<tr><td>

[setTag(tag)](./server.rigidbody.settag.md)


</td><td>


</td><td>

Sets the tag of the rigid body.


</td></tr>
<tr><td>

[setTranslation(translation)](./server.rigidbody.settranslation.md)


</td><td>


</td><td>

Sets the translation of the rigid body.


</td></tr>
<tr><td>

[setType(type)](./server.rigidbody.settype.md)


</td><td>


</td><td>

Sets the type of the rigid body.


</td></tr>
<tr><td>

[sleep()](./server.rigidbody.sleep.md)


</td><td>


</td><td>

Explicitly puts the rigid body to sleep. Physics otherwise optimizes sleeping.


</td></tr>
<tr><td>

[wakeUp()](./server.rigidbody.wakeup.md)


</td><td>


</td><td>

Wakes up the rigid body. Physics otherwise optimizes waking it when necessary.


</td></tr>
</tbody></table>
