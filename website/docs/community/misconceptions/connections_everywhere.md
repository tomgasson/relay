# Misconception: I don't need to use a connection here
Every list access should be through a paginatable connection

Use connections so that clients can use already existing mechanisms to iterate through the data

```js
function MyListOfThings({object}){
  const {
    data,
    loadNext,
    loadPrevious,
    hasNext,
    hasPrevious,
    isLoadingNext,
    isLoadingPrevious,
  } = usePaginationFragment(graphql`
    items(first: $first, after: $after) {
      edges {
        node {
            id
            ...MyItem_data
        }
      }
    }
  `, object)
  
  return (
    <div>
      {hasPrevious ? <VisiblityObserver onVisible={() => loadPrevious(10)}> : null}
      {data.edges.map(edge => (
        <MyItem key={edge.node.id} item={edge.node} />
      ))}
      {hasNext ? <VisiblityObserver onVisible={() => loadMore(10)}> : null}
    </div>
  )
}
```

Connections are vastly simpler for client to use.

Don’t limit how _little_ data a client can access.

Some clients can handle drastically small numbers of items.

FB’s newsfeed only requests 2 stories because that’s all that on screen. If it were to request 4, it would be _double_ the cost

Maybe someone writes a client for the Apple Watch. That can only show 3 list items on screen regardless.

Not using a connection makes it hard to understand data about the collection itself

```js
function MyListOfThings({object}){
  const { ... } = usePaginationFragment(graphql`
    items(first: $first, after: $after) {
      id
      ...MyItem_data
    }
      // fields run in parallel, they doesn't have access to their siblings
      // so this would have to run a second query / fetch the data a second time
    itemCount(first: $first, after: $after)
  `, object)
  
  return (
    <div>
      <div>{data.itemCount} items</div>
      <div>
      {data.edges.map(edge => (
        <MyItem key={edge.node.id} item={edge.node} />
      ))}
      <div>
    </div>
  )
}
```

Connections provide a place for you to return metadata _about the connection itself_

```js
function MyListOfThings({object}){
  const { ... } = usePaginationFragment(graphql`
    items(first: $first, after: $after) {
      count
      lintMessages {
        line
        number
      }
      querySuggestions {
        insteadOf
        suggestion
      }
      pageNumber
      nextPage
      edges {
        node {
            id
            ...MyItem_data
        }
      }
    }
  `, object)
  
  return (
    <div>
      <div>{data.items.count} items</div>
      <div>Did you mean to search for {data.items.querySuggestions}?</div>
      <div>
      {data.edges.map(edge => (
        <MyItem key={edge.node.id} item={edge.node} />
      ))}
      <div>
      <div>You're the {data.items.callerCount} person to list these items today</div>
      <div>Page {data.items.pageNumber} or {data.items.totalPages}</div>
    </div>
  )
}
```

Not using edges prevents makes it hard to expose data about the relationship between the items

```js
function MyListOfThings({object}){
  const {...} = usePaginationFragment(graphql`
    edges {
      node {
        id
        viewerLastViewedTimestamp // when _you_ last viewed it
        lastViewedByTimestamp(id: userID) // hmmm, ...
        ...MyItem_data
      }
    }

  `, object)
    // ...
}
```

Edges give you a place to add information about the item’s relationship with another item (when it would not belong to either item itself)

```js
function MyListOfThings({object}){
  const {...} = usePaginationFragment(graphql`
    project {
      lead {
        ownedIssues(first: $first, after: $after) {
          edges {
            lastViewedTimestamp // when the project lead last viewed it!
            node {
              id
              viewerLastViewedTimestamp // when _you_ last viewed it
              ...MyItem_data
            }
          }
        }
      }
    }
  `, object)
    // ...
}
```

Connections don’t need to be implemented completely at first

```js
class IssueConnection {

  getPageInfo(){
      return {
        hasNextPage: false,
        hasPreviousPage: false, 
      }
  }
}
```

If you only have limited data to start, you can just-in-time the server implementation of the connection. Return it all in one shot as if it were a connection, and you can avoid revisiting the client and having to create a new field

It’s okay if you have things already that didn’t use a connection. The major benefit is that we avoid the need to re-implement things when you need to add extra info. You don’t need to go and re-write that thing, _just_ so that it’s a connection. Just use one next time okay?
