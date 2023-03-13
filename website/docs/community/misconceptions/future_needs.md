# Misconception: I need to consider future needs when adding things to the GraphQL schema

You don’t need to consider any future needs. Just build for specifically _what you need right now._

If you consider only your own needs, you’ll be certain to fetch things in the best way for your client. That’s our goal.

When another engineer needs to fetch data for a different client, or a different view, they should also only consider their own needs.

The process is simple:

*   Write your component to work out what data you need
    
*   If the data already exists in the form you want to consume it (regardless of the field name), great. Use that
    
*   If the data doesn’t already exist, add it
    
    *   If the name you want was already taken, choose a different name
        

That’s all you need. If every engineer & every client follows this then we end up with all our clients optimally fetching data, no wasted work on things that aren’t used, no versioning needed, no safety issues

It’s globally optimal for all clients to be selfish.

Approximately 80% of client changes will require some server changes. This is a good thing - it indicates that you’re continually adjusting the server to meet the clients needs. The alternative would mean that the client is the one accumulating tech debt in the mismatch between what exists and what is needed

This doesn’t mean that there’s no advantage in sharing the implementation side of things, but that should be _behind_ the GraphQL API that the clients see.

```js
class MyThing {
  getRichTextDescription(){
     return doSomeSharedWorkToGetTheDescription()
  }
  getDescription(){
    return doSomeSharedWorkToGetTheDescription().toString()
  }
}
```

Rather than trying to consider 2 clients in combination, and find a middle-ground that works for both situations, the clients are both better off if they have their own needs met precisely. This is not a compromise - all clients can simultaneously be happy.

Don’t think about your own clients future needs. GraphQL is easy to add things to. You can make those changes when you need them, but for now try to build what you need, _only_ what you need and only what _you_ need.
