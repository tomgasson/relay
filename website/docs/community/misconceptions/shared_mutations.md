# Misconception: I should use the same mutations for all updates
Don't guess ahead at what a client needs to send you.

```graphql
type Mutation {
  addIssue(summary: String, projectId: ID!): Issue
  updateData(allTheData: Data): Results
  patchData(someOptionalFields: Data): Results
}
```

One user interaction should be one mutation

Different views generally need slightly different things, and for a mutation that means that they have different data available and different actions they’re trying to convey to the server.

You want to avoid sending data to a client just for it to send it back. Some clients might want to do client-side validation, others might want to rely on server-side validation and have messages sent back for use in the UI. Different needs should use different mutations

Some interactions will be individual updates. They’ll want a specific mutation

```graphql
function InlineEditSummaryField(){
   const [commit, isPending] = useMutation(graphql`
    mutation InlineSetSummaryFieldMutation {
      setIssueSummary(input: $input) {
        issue {
          summary
        }
      }
   }`);
   
   const saveSummary = useCallback((event) => {
     const text = event.target.value;
     if (text != ""){
        commit({
          variables: {
            issueId: id,
            summary: text
          }
        })
     }
   })
   return <input value={summary} onChange={saveSummary} />
}
```

Some interactions will be bulk updates. They’ll want a different mutation

```graphql
function IssueEditView(){
   const [summary, setSummary] = useState(data.summary);
   const [title,setTitle] = useState(data.title)
   const [commit, isPending] = useMutation(graphql`
    mutation InlineSetSummaryFieldMutation {
      updateIssue(input: $input) {
        issue {
          ...IssueView_data
        }
      }
   }`);
   
   const save = useCallback(() => {
     commit({
       variables: {
         issueId: id,
         summary: summary,
         title: title,
         ...
      }
    })
   })
   
   return (
     <div>
       <input value={summary} onChange={setSummary} />
       <input value={title} onChange={setTitle} />
       <button onClick={save}>Save</button>
    </div>
   )
}
```

You can explicitly pass `null` as a value, which is distinct from not passing the value at all.

That would appropriate if you have a form where the user can set the title, and optionally set the summary, and then click save.

Wait until the need is clear. Different UI paradigms (draft, bulk create, update-on-each-inline-edit) all need different things, there’s no one-size fits all situations.

Clients often need something more specific that you can build generically, and that’s ok. Think of GraphQL as something that _enables_ clients to be special when they want / need to, rather than something that tries to make all clients behave the same

### Is this UPDATE or PATCH from REST?

_UPDATE_ is kind of difficult with GraphQL, because you don't want the client to _have_ to fetch data just so it can send it back. We only want clients to fetch data they need to use themselves. At the same time, you might want to make sure the client is showing all of something, so that they know their change is atomic

_PATCH_ is very general for clients. It sort implies that you'll have multiple different views trying to use the same mutation

For example, you should avoid having `InlineEditSummaryField` and `InlineEditTitleField` both trying to use the same `updateIssue()` mutation

Don’t force different needs to use the same mutation

```graphql
function InlineEditSummaryField(){
   const [commit, isPending] = useMutation(graphql`
    mutation InlineSetSummaryFieldMutation {
      updateIssue(input: $input) {
        issue {
          summary
        }
      }
   }`);
    ...
   commit({
     variables: {
        issueId: 123,
        title: title,
        summary: null
     }
   })
}
function InlineEditTitleField(){
   const [commit, isPending] = useMutation(graphql`
    mutation InlineSetSummaryFieldMutation {
      updateIssue(input: $input) {
        issue {
          title
        }
      }
   }`);
   ...
   commit({
     variables: {
        issueId: 123,
        title: null,
        summary: summary
     }
   })
}
```

Use specific mutations for each need

```graphql
function InlineEditSummaryField(){
   const [commit, isPending] = useMutation(graphql`
    mutation InlineEditSummaryFieldMutation {
      setIssueSummary(input: $input) {
        issue {
          summary
        }
      }
   }`);
    ...
   commit({
     variables: {
        issueId: 123,
        summary: summary
     }
   })
}
function InlineEditTitleField(){
   const [commit, isPending] = useMutation(graphql`
    mutation InlineEditTitleFieldMutation {
      setIssueTitle(input: $input) {
        issue {
          title
        }
      }
   }`);
   ...
   commit({
     variables: {
        issueId: 123,
        title: title,
     }
   })
}
```

Don’t try fit mutations strictly into REST semantics. GraphQL mutations are more flexible than that.

Consider the mutation as a means to signal to the server the users intention. In your service you can work out whether you need to refetch the whole object and do an UPDATE, or if you want to PATCH it with just the change that the client intended
