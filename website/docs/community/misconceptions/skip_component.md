Misconception: I don&#39;t need a `useFragment` in this component</title>
Don’t avoid skip levels in fragments

```js
function Lowest({query}){
  const data = useFragment(graphql`
    fragment Lowest_data on Query {
      echo
    }
  `, query)
  return <div>{data.echo}</div>
}

function Low({data}){
  return <Lowest query={data} />
}

function Middle({data}){
  return <Low data={data} />
}

function Upper({data}){
  return <Middle data={data} />
}

function Page({queryRef}){
  const data = usePreloadedQuery(graphql`
    query PageQuery {
      ...Lowest_data
    }
  `, queryRef)
  return <Upper data={data} />
}
```

Relay uses proof by mathematical induction to avoid over-fetching data. This is the proof it uses:

*   N = 0. This file only fetches data that it itself uses
    
*   N = 0. This file only spreads fragments for components it renders (a little less strict, it only checks for imports)
    
*   N = N + 1. Every file only spreads fragments for files that also only fetch data that they need
    

That is something we can lint for locally. We don’t ever need a global understanding of the codebase. Each file can be linted independently (this is great for developer experience performance)

That requires that we don’t pass fragments through multiple layers - it’s simply not pragmatic to statically analyse the flow control to understand that.

Define a fragment at every level of your component tree

```js
function Lowest({query}){
  const data = useFragment(graphql`
    fragment Lowest_data on Query {
      echo
    }
  `, query)
  return <div>{data.echo}</div>
}

function Low({query}){
  const data = useFragment(graphql`
    fragment Low_data on Query {
      ...Lowest_data
    }
  `, query)
  return <Lowest query={data} />
}

function Middle({query}){
  const data = useFragment(graphql`
    fragment Middle_data on Query {
      ...Low_data
    }
  `, query)
  return <Low query={data} />
}


function Upper({query}){
  const data = useFragment(graphql`
    fragment Upper_data on Query {
      ...Middle_data
    }
  `, query)
  return <Middle query={data} />
}

function Page({queryRef}){
  const data = usePreloadedQuery(graphql`
    query PageQuery {
      ...Upper_data
    }
  `, queryRef)
  return <Upper query={data} />
}
```

If this feels uncomfortable, it’s a sign you don’t need all those layers. You can probably remove them - Relay should already be helping you do less work / data manipulation so there’s unlikely to be a need for so many different layers

Remember that relay compiles away and de-duplicates the content of the queries. The code verbosity here is not something that costs the client excess bytes
