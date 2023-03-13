# Misconception: I should be thinking in terms of queries

It’s common, especially when moving from another GraphQL library like Apollo to treat queries as the item around which everything operates.

However, Relay takes much of the detail about queries out of your hands.

Don’t start with a query

Often, engineers think they need to start with a query

```js
function MyQueryThing(){
  const data = usePreloadedQuery(graphql`
    query MyQueryThingQuery {
       // ok, where do I start
       issue(id: $id) // in need X, Y and Z
    }
  `)
  // and render my application
}
```

But that’s a fast way to get stuck dealing with problems that we can simply push away:

*   What am I doing to load this?
    
*   How do I load multiple things at once?
    
*   What should be lazy? What’s critical?
    
*   When do I need this data?
    

Write your components. Think about fragments first

```js
function MyFragmentComponent({data}){
  const data = useFragment(graphql`
    fragment MyFragmentComponent_data on ?? {
      name
    }
  `, data)
  return (
    <div>
      <div>{data.name}</div>
    </div>
  )
}
```

Here I’m not even sure yet what I’m writing, but I’m discovering my data needs.

Don’t export things with queries for others

If you want others to be able to use `<MyQueryThing />`, it’s tempting to export it _including the query part_. But that leaves them high and dry to work out how to make your component fetch what it needs.

```js
function SomePage(){
  return (
    <MyQueryThing queryRef={?!?!} />
  )
}
```

Export components that operate on fragments for others to use

```js
function SomePage({someType}){
  const data = useFragment(graphql`
    fragment SomePage_data on SomeType {
      ...MyFragmentComponent_data
      ...SomeOtherSharedComponent_data
    }
  `, someType)
  return (
    <div>
      <MyFragmentComponent data={data} />
      <SomeOtherSharedComponent data={data} />
    </div>
  )
}
```

SomePage already needs to fetch data. Now it can include it’s children’s data (`MyFragmentComponent`) in it’s own data fetch

This doesn’t break encapsulation / locality. We use linting to enforce that each component uses the component that it fetches data for, and that no data is fetched that isn’t used

Make the component with the query as the last thing you do, specific to the caller

It might be the case that your team _never_ writes their own query. This would be expected for common components that many others use, like search boxes, typeaheads, hovercards, info boxes, plugins etc

```js
function MyPage(){
  const data = usePreloadedQuery(graphql`
    query MyPage {
      ...MyFragmentComponent_data
    }
  `, queryRef)

  return (
    <MyFragmentComponent data={data} />
  )
}
```

This is a simple wrapper which renders our fragment based component

It’s fine to define fragments on the query type itself `fragment X on Query`, and to spread fragments at the top-level
