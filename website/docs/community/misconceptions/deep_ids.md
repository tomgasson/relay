# Misconception: I should use an ID to get a field below the top-level

No. This is not necessary.

Remember, the nesting in GraphQL is only providing us the ability to express a query of data-dependency. It’s the need: “In order to fetch b, you must have fetched a”. So, if you put an ID on a field low down in the query you can _instead fetch that thing directly_

You don’t need to query with IDs at different levels

```graphql
query {
   issue(id: 123) {
      comment(id: 456) {
        text
      }
   }
}
```

Instead, you probably want to expose that as a relationship

Either as a connection like so

```graphql
query {
   issue(id: 123){
     comments(first: 1, order: RECENT) {
       edges {
          node {
            text
          }
       }
     }
   }
}
```

or something you can directly access by it’s _meaningful relationship_ rather than ID

```graphql
query {
   issue(id: 123){
     mostRecentComment {
       text
     }
   }
}
```

Or you really just wanted that child item. Use the ID to access that at the top level

```graphql
query {
   comment(id: 456){
      text
   }
}
```

If you thought you needed this, then might be after the inverse relationship instead

```graphql
query {
   comment(id: 456){
      text
      issue {
         summary
      }
   }
}
```
