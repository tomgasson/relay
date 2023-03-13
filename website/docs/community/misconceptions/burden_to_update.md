# Misconception: I need to update existing clients when I deprecate a new field
No you don’t. They’re fine and working as they are. It’s not a problem for them to keep doing so.

```js
function UserInfo({user}){
  const data = useFragment(graphql`
    fragment UserInfo_data on User {
      jobTitle
    }
  `, user)
  return (
   <div>{data.jobTitle}</div>
  )
}
```

```graphql
class User {
  jobTitle(){
    return "engineer"
  }
}
```

```graphql
type User {
  jobTitle @deprecated(reason: "use via currentJob instead")
  currentJob: Job
}
```

```js
class User {
  jobTitle(){
    return this.currentJob().getTitle()
  }
  currentJob(): Job {...}
}
```

When you update things in the schema, it’s fine to leave clients using deprecated things

```js
function UserInfo({user}){
  const data = useFragment(graphql`
    fragment UserInfo_data on User {
      jobTitle // this is still fine
    }
  `, user)
  return (
   <div>{data.jobTitle}</div>
  )
}
```

You don’t have to go through every client and make them

```js
function UserInfo({user}){
  const data = useFragment(graphql`
    fragment UserInfo_data on User {
      currentJob { // unnecessary, this client was fine as it was
        title
      }
    }
  `, user)
  return (
   <div>{data.currentJob.title}</div>
  )
}
```

You should update them _when it makes sense for them_. If they have a performance benefit from it - awesome, that should help those clients achieve their performance goals. If you have a server-side cost benefit from it - then it might make sense to move your largest clients, but the long tail of low-volume clients doesn’t matter.

`@deprecated` will stop things appearing in documentation, and will (with tooling) prevent _new_ consumers of the field, but it’s not necessary to remove _existing_ users of the field

It might be a good idea to track the use of deprecated things through code health tooling, but it’s not something you urgently need to do. If the client was already fine accessing data that way, they’re generally still fine with what they’ve got