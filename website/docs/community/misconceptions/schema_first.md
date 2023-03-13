Misconception: I should work out my queries before I’m ready to write the code
Don't worry about this - you’re at risk of building something you can’t consume.

The schema you need is _revealed_ from your components needs.

Write your components from the bottom-up, to discover what you need

```js
function Hovercard() {
    const data = useFragment(graphql`
        fragment Hovercard_data on ?? {
            name
        }
    `)
    return (
        <Card>
            <div>{data.name}</div>
        </Card>
    )
}
```

From this you get:

*   You need an object ??.

*   It needs a string field to get a name

*   You don’t need to care about the name (the field could be called `blah` for all you care)


As you continue building your UI code out, the schema reveals itself.

There are no decisions being made here. You’re specifically _not deciding between multiple ways of doing things_, or _different options_ of representing your needs in the schema. There is no question about your needs