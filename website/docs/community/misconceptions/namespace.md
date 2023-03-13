# Misconception: I should group or otherwise namespace parts of my query
You're might think GraphQL's hierarchy is meant to provide _name!-spacing_. It's not.

Don’t create nesting to represent domains, or grouping, or hierarchy

```graphql
issue {
  name
  project {
    lead {
      name
    }
  }
  sidebar {
    linksSection {
      children
      issues
    }
  }
  primary {
    fields
  }
}
```

Do use nesting to reflect the data-dependency needs

```graphql
issue {
  name
  project {
    lead {
      name
    }
  }
  childLinks
  issueLinks
  fields
}
```

GraphQL's hierarchy represents _data-dependency_. If there's no data-dependency, then whatever it is you are querying should be moved up.

Say you visit a page `/comments/123abc`. If we have an id for a comment directly, we can (and should) get it directly.

On this page, we want to get the comment.

```graphql
query CommentPageQuery {
  comment(id: "123abc") {
    text
  }
}
```

Unlike the comment itself, we _don't_ have the comment's author in the URL. In order to get the author, we first need to get the comment. This is what I mean by data-dependency. It's _necessary_ for us to do the first, before we can do the second. That’s the essence of what a GraphQL query encodes: the structure of what we need, along with how we are able to fetch it: In parallel, or sequentially.

So on that `/comments/123abc` page, we might then do this to show the author's name. Notice that `name` is similarly a _data_ dependency. It's not a namespace thing. We literally don't have the information necessary on the BE to get the name without first getting the author.

```graphql
query CommentPageQuery {
  comment(id: "123abc") {
    text
    author {
      name
    }
  }
}
```

But at the same time, it's also completely fine for us to do this, either alternatively, or additionally, collapse that data-dependency. If we have a client that doesn't need to do anything else with the author (like changing it’s name), we could do this:

```graphql
query CommentPageQuery {
  comment(id: "123abc") {
    text
    authorName
  }
}
```

And that's totally fine.

Note: The query depth is the number of sequential fetches that the backend will need to do

You want to flatten the query. Removing depth means identifying sequential (nested) data fetches that aren’t actually dependent on each other. Siblings are fetched in parallel. You want to maximise the amount of things fetched in parallel.
