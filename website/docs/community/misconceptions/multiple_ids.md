# Misconception: Clients should fetch things using a field with multiple ids
GraphQL represents the relationships between objects.

Remember, clients don’t have a list of ids for this. The only way they would get them, _is if we send them those ids just for them to send us the list back_.

Don’t pass sets of IDs from the client to the server

```graphql
query {
    issuesById(ids: $ids) {
      edges {
        node {
            summary
        }
      }
    }
}
```

Do define the relationships on the server to access what you need

```graphql
query {
  project(id: $projectId) {
    issues {
      edges {
        node {
          summary
        }
      }
    }
  }
}
```

Counter Example: It might make sense _when you’re mutating things_, such as a bulk editing interaction

```graphql
mutation BulkFlagIssuesMutation(input: BulkFlagIssuesMutationInput){
    bulkFlagIssuesMutation(input: $input){
      issues {
        id
        isFlagged
      }
    }
}
```

```js
commit({
  variables:{
    issueIds: selectedIssueIds
  }
})
```

In this case, you would have received the IDs earlier in that page load in order to display the data.

E.g. Each line item in the editing view would be an issue, and you’ll have received their IDs along with the data to display them

Counter Example: It might make sense _when you have a bulk-select filter,_ and a post-page load interaction

```js
function MyFilteredView({project, initialCategoryIdsFromQueryString}){
    const [data, refetch] = useRefetchableFragment(graphql`
    fragment MyFilteredView on Project {
      issues(first: 10, categoryIds: $categoryIds) {
          edges {
            nodes {
                ...Item_data
            }
          }
      }
    }
    `, project)
    
    return (
      <div>
        <Filters
          initialCategories={initialCategoryIdsFromQueryString}
          setCategories={(categoryIds => {
            refetch({
              categoryIds: categoryIds
            })
          }}
        />
        <Results ... />
      </div>
    )
}
```

This case you could also serialise the list of ids into the query params, and use them on page load