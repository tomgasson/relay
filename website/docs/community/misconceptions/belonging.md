# Misconception: That field doesn't belong on this type
You might feel protective of a type. It’s probably well intentioned. You probably want to reduce the explosion of tech debt that occurs when engineers with all sorts of different needs and use-cases thrown into a single bucket, on top of your well thought out and planned

Let’s assume someone wants to add a field to a type. Let’s have a look at what that means from their perspective.

```js
function MyComponent({object}){
  const data = useFragment(graphql`
    fragment MyComponent_data on YourType { // They're _already_ operating on this type
      name
      newField // and they need this data about it (even if it's stored somewhere else!)
    }
  `, object)
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.newField}</div>
    </div>
  )
}
function MyPage({query}){
  const data = useFragment(graphql`
    fragment MyPage_data on Query {
      someobject
    }
  `, query)
  // They're almost always working off of some base object.
  // They need to be able to access data from these core objects
  return <MyComponent object={data.someobject} />
}
```

That’s the situation they’re dealing with.

Regardless of the desire for domain separation, services or where things are stored, client need to ask for data on the thing that they’re dealing with. They might have a need that cuts across many different domains. They still need the field on the object they’re dealing with. They cannot query it in another way.

Moving `newField` onto a different type doesn’t help, they would then need to ask for `name` on that other type.

Remember, GraphQL is an API layer to suit the needs of clients. [https://spec.graphql.org/draft/#sec-Overview](https://spec.graphql.org/draft/#sec-Overview)

**Product-centric**: GraphQL is unapologetically driven by the requirements of views and the front-end engineers that write them. GraphQL starts with their way of thinking and requirements and builds the language and runtime necessary to enable that.

If you’re concerned that clients adding fields to your type will make the schema “messy”, or confuse others see [Misconception: The schema should be kept clean](1440041860.html)
