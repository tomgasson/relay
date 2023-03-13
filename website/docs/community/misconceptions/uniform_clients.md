# Misconception: The schema should expose a single consistent view of the same data to clients

Take the following 2 queries, recognising that they’re fetching what is essentially the same piece of data (the project’s name) in different ways.

```graphql
query IssueQuery {
   issue(id: $id) {
     projectName
   }
}
query ProjectQuery {
  project($id: ID) {
    name
  }
}
```

Should we avoid having `Issue.projectName` in the schema? No. It’s fine for this data to be exposed in different ways in different places.

Don’t try to make the schema capture the invariants of an individual client. That would prevent it from being able to precisely meet the needs of specific clients

However, you might also see that by storing these 2 pieces of data separately they might not update together. Consider the case where you also have the following mutation on the same client

```graphql
mutation SetProjectNameMutation {
  project(id: $input) {
    ???
  }
}
```

If we refetch the project, then the project’s name will update

```graphql
mutation SetProjectNameMutation {
  project(id: $input) {
    project {
      name
    }
  }
}
```

If we were to refetch the specific issue’s projectName, that one would then be correct

```graphql
mutation SetProjectNameMutation {
  setProjectName(id: $input) {
    issue(id: $issueId){
      projectName
    }
  }
}
```

It’s up to each client to ensure that it’s internally consistent with itself

A better course of action _for that client_ is to consolidate the data in the same place. That means having the data associated with the type that stores it.

Start by building the views of your client with _only_ what that view needs to render. You can make sure similar data is updated together later, when you start mutating data

Once you have changing data, it’s much easier to see which things need updating and what’s hard to express in a refetch query.

```graphql
query IssueQuery {
   issue(id: $id) {
     project {
       // 2. Which tells us that this is a good way to go 
       // despite this view not needing the project level
       name
     }
   }
}
query ProjectQuery {
  project($id: ID) {
    name
  }
}

mutation SetProjectNameMutation {
  setProjectName(id: $input) {
    project { // 1. this is easy to refetch
      name
    }
  }
}
```
HTML is NOT sent on server. All done in your browser. 😇 
