# Misconception: The schema should be kept clean
The schema’s job is to capture the past and present so that we can be _guaranteed_ not to catastrophically break any clients.

When you remove things from the schema, you remove our ability to identify breaking changes.

Say I publish an API that looks like so

```js
class Issue {
  summary(): string {
    return "a summary"
  }
}
```

As soon as I’ve shipped a commit with that in it, we _might_ have clients start using that. They might be public users, or an experimental branch, or a test, or a branch deploy of a different system, or other developers that we work with.

```js
class Issue {
  summary(): string {
    return "a summary"
  }
  description(): string {
    return "a description"
  }
}
```

And that’s cool.

But then someone might go and delete one of these. That’s going to break any clients (or any callers or library users, this applies universally not just to data fetching) that are left thinking that we still have a summary. **We want to _categorically_ prevent this class of error.**

We don’t actually care whether someone is consuming existing things or not. We instead consider whether a change is fundamentally safe or not, and that removes the need for us to understand consumers or communicate about change

So how do we compare now to the past?  
We could checkout the code from the commit before, and run a test against both of them to check things haven’t changed. But that’s not super easy - our code is full of implementation details.

We really want this without the code. So we can instead extract an interface from this.

This artifact is precisely the same task as generating a `.d.ts` from a `.js` file, so I’ll use that to demonstrate

```graphql
interface Issue {
  summary(): string
  description(): string
}
```

Now, this is something we can more easily compare between versions. Let’s write this out into an artifact so that we have it available on each commit

If we checkout this previous commit, we can compare `types.d.ts@HEAD` vs `types.d.ts@HEAD`. Now what would that code to compare them look like? Probably pretty much like this [https://github.com/graphql/graphql-js/blob/main/src/utilities/findBreakingChanges.ts](https://github.com/graphql/graphql-js/blob/main/src/utilities/findBreakingChanges.ts)

That is the fundamental job of the schema. It’s an artifact as a side-effect of the code which we can use to identify if we’ve made a change that is not forward compatible with previous things we’ve done.

We use this artifact to prove that our server can and will forever support all clients ever written against it. Note that this is a **_proof_** _of safety._ It’s not good practise, or _general guidance_, or a _design pattern_. It’s proof by mathematical induction

1.  N = 0. We start with a schema that serves all clients that have ever been written against it
    
2.  N' = N + 1. This change at least serves all clients that have ever been written against it, and potentially more
    

This is a proof, by mathematical induction that we can’t break older clients.

Don’t make breaking changes. Every breaking change removes a chain of this inductive proof, and leaves a set of potential clients at risk of being broken

Authoring the server implementation directly in this artifact (schema-first) makes this very confusing. It’s not technically a _bad thing_ \- it’s the same way you can choose to write whether you write your `.c` or `.h` files first in c, or you could choose to allow authoring SQL tables with DDL, or create them with a GUI. But the emphasis in schema-first of the schema being something you author and curate harms understanding of GraphQL’s forward-safety

If you’d like to contribute full text search to `graphiql`'s documentation explorer, I’ll be your greatest fan because it will remove any of the remaining argument for the name of a field or type to matter whatsoever for clients.

The idea of `@beta` fields actively works against the provably safe mechanism that GraphQL provides and creates confusion by newly re-introducing versioning.
