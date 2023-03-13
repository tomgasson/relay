# Misconception: Leaving deprecated things on the server creates tech debt
Let me give you an example. Say we have a field that returns the timestamp in milliseconds as a number. But later you realise that javascript can only represent up to 2^52, and milliseconds often goes beyond that range. So you want to introduce a field that represents the timestamp in a safer form.

Watch out for legacy fields creating an undue burden on the work that’s done internally.

```js
class Issue {
  getTimestamp(): number {
    return getSomeTimestampAsInt()
  }
  getTimestampMs(): string {
    return getSomeTimestampAsString()
  }
}
```

Here I’ve got both fields implemented on their own. But we don’t want to collect more and more tech debt over time.

Refactor deprecated fields to be implemented in terms of their replacement fields. Move the work into the field itself, so that you can take it out of the preferred path

```js
class Issue {
  @deprecated(reason: "Not JS int-64 safe. Use the string form instead")
  getTimestamp(): number {
    return timestampToInt(this.getTimestampMs())
  }
  getTimestampMs(): string {
    return getSomeTimestampAsString()
  }
}
```

Now I’ve implemented the old field using the new field. We no longer need to maintain the `getSomeTimestampAsInt` path internally.

```js
class Issue {
  @deprecated(reason: "Not JS int-64 safe. Use the string form instead")
  getTimestamp(): ?number {
    // the tech debt builds up here, in the legacy behavior
    
  }
  getTimestampMs(): ?string {
    // the improved / better / more performant code is almost always
    // simpler / more direct / doing less work.
  }
}
```

We actively want to encourage the implementation costs of fields to be biased _towards_ making the deprecated paths take all the work.

This has a few effects.

Immediately, clients taking the non-legacy path get the performance advantage of the change. Generally, it’s the high-volume use clients that are well resourced (and are often the ones to make changes too). This quickly moves the _majority_ of traffic (by volume) to the new implementation

Clients on the legacy path have a clear incentive to move to the new one. If they can in general trust that the burden is always shifted to the deprecated implementation, then they can in general feel confident that moving will be performance neutral (if not positive)

Non-maintained clients start to reflect their real cost: The cost of supporting old things that they place on the server. This creates a well aligned strategic position: The cost of tech debt starts to be framed in terms of support for old / unmaintained clients or features. If that legacy field is _costly_ on the server (either in resources to maintain or compute costs) then the source of that cost can be clearly _only_ to those legacy clients. There’s now a very clear improve / re-write / kill story for those clients and features. It’s possible to even directly express the costs: 30% of CPU is going to legacy clients. Field `Type.field` is legacy, but costs us 2% of our total compute, the product using that `P` is unmaintained, and has a `E` effect on our ecosystem / revenue, it’s clearly untenable to continue supporting that feature.

When you remove the implementation of the field by changing it to always return `null` (because you made _all fields nullable_), in the same move you clean up the tech debt that that legacy implementation was carrying along with it.

Use information about costs of the server-side along with usage data in order to prioritise client changes, or evaluate the cost / benefit of features.
