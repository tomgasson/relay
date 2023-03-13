# Misconception: I should write an interface for common things

This is one of the most commonly confused things in GraphQL.

When you want to re-use a component for multiple data types, define an interface for that component specifically and have the types implement it

Interfaces have no bearing on shared code, or the server implementation, or the ability to share functionality between different types

GraphQL is not an object model. It’s a transport mechanism. There is no need for inheritance in transport mechanisms.

There is no inheritance in GraphQL

Nothing in GraphQL has any semblance of "Class". Throw out the ideas of any language comparison you have if that language has classes - it's not suitable. Think typescript, with objects, types and interfaces, but no "Class" or "extends". Go(lang) is closer here than most others.

Let’s go through an example, and looking at what we have concretely in order to show how things work. Let’s start with a Human.

```js
type Image {
    src: URL
    width: Int
    height: Int
}
type Human {
    id: ID!
    name: String
    image: Image
}
```

And we’ll write a component that uses this so we have a realistic use case to go through. You can think of this like the popover you see when you hover over my profile image.

```js
function Hovercard({human}){
    const data = useFragment(graphql`
        fragment Hovercard_data on Human {
            name
            image {
                ...Image_data
            }
        }
    `, human)

    return (
        <Card>
            <Image image={data.image}>
            <Text>{data.name}</Text>
        </div>
    );
}
```

So now you want to introduce your second thing. A "Droid". Let's add a type for that

```graphql
type Driod {
    id: ID!
    name: String
    mission: String
}
```

And you might have something specific for this

```js
function DroidInfo({ droid }) {
    const data = useFragment(graphql`
    fragment DroidInfo_data on Droid {
        mission
    }
    `, droid);
    return <Text>My purpose is to {data.mission}</Text>;
}
```

Now you want to re-use your hovercard for the droid as well... _this is where you reach for an interface_! Until now we had no reason to use an interface.

The interfaces you need and your components which work for more than one type are _one and the same thing_

First, we'll switch out "Human" for "Hovercardable"

```js
function Hovercard({hovercardable}){
    const data = useFragment(graphql`
        fragment Hovercard_data on Hovercardable {
            name
            image {
                ...Image_data
            }
        }
    `, hovercardable)

    return (
        <Card>
            <Image image={data.image}>
            <Text>{data.name}</Text>
        </div>
    );
}

```

Notice that I'm not saying that "Hovercardable" is a "base class" to represent involved here in GraphQL terms. I haven't introduced a "Character" because we don't _ever_ need to think in terms of a "Character"

```graphql
type Hovercardable {
    name: String
    image: Image
}
type Human implements Hovercardable {
    id: ID!
    name: String
    image: Image
}
```

This is the purpose of `interface` in GraphQL. We have untied "Hovercard" from the named, concrete type "Human" and moved _our expectations_ to be a specific structure. We haven’t changed the data at all, we’ve just changed our _client_ expectations

Now if we want to use the same Hovercard to show info for a Droid, we'll also need Droid to implement Hovercardable. Until we want this in the UI, then Droid _doesn't need to implement_ Hovercardable. Like in object-land in typescript, an interface is saying the fields we must have, so we have to add an `image` to Droid.

```graphql
type Driod implements Hovercardable {
    id: ID!
    name: String
    mission: String
    image: Image
}
```

We add `implements Hovercardable` to the schema so that it can statically ensure that our intentions (that it has the needed fields) match reality. It has no effect on the data fetched or what the server does when responding to a request.  

In a similar way, the annotation also assists on the client side, where Relay can statically check that those fields are available on that interface. Again, all about type-safety. There’s no runtime effect

This is another reason you don’t want to go an create `interfaces` before you have components that need that info - if you pre-created a `Character` interface that asked for `parents` before you had your component you’d be forcing yourself to make `Droid` have `parents`, even if that’s non-sensical. We want small and specific interfaces based only on the fields we need to consume - no more.

Now we're able to use the same Hovercard for both a Droid and a Human.

```js
function Examples() {
    const data = useQuery(graphql`
        droid(id: 123) {
            ...Hovercard_data
        }
        human(id: 423142) {
            ...Hovercard_data
        }
    `);
    return (
    <div>
        <Hovercard hovercardable={data.droid} />
        <Hovercard hovercardable={data.human} />
    </div>
    );
}

```

Now let's follow your example, and create a "Child". You might implement it as a subclass of "Human" on the server, but that implementation detail should not reach the client.

Don’t treat interfaces as inheritance

```graphql
type Child implements Hovercardable {
    id: ID!
    name: String
    image: Image
}
```

Remember, There is no inheritance in GraphQL. This is not `Child extends Human`, or `Child extends Character` or `Child extends Hovercarable`

This is a new, distinct type. It needs it's own ID. It cannot and should not be a "human" ID. On the BE, we need to direct things at the subclass "Child" - not to the superclass "Human".

We can show how we can re-use the same hovercard, because we made Child implement Hovercardable

```js
function Examples() {
    const data = useQuery(graphql`
        droid(id: 123) {
            ...Hovercard_data
        }
        human(id: 423142) {
            ...Hovercard_data
        }
        child(id: 123) {
            ...Hovercard_data
            parents {
                edges {
                    node {
                        ...Hovercard_data
                    }
                }
            }
        }
    `);
    return (
    <div>
        <Hovercard hovercardable={data.droid} />
        <Hovercard hovercardable={data.human} />
        <div>
        <p>Child's family</p>
        <Hovercard hovercardable={data.child} />
        <div>
            {data.child.parents.edges.map((edge) => (
            <Hovercard hovercardable={edge.node} />
            ))}
        </div>
        </div>
    </div>
    );
}

```

There is no case where you need to point things at an abstract class (the superclass, like your Human) in GraphQL. You don't need that - it's a behind the scenes implementation detail. We only need to point at the concrete, leaf classes, and those need to be uniquely identified.

Now let's talk about type spreads... Let's say we want to add _type specific_ information to the hovercard. For example, for a droid, we'll want to show it's

```js
function Hovercard({hovercardable}){
    const data = useFragment(graphql`
        fragment Hovercard_data on Hovercardable {
            name
            image {
                ...Image_data
            }
            ...HovercardDetails_data
        }
    `, hovercardable)

    return (
        <Card>
            <Image image={data.image} />
            <Text>{data.name}</Text>
            <HovercardDetails data={data} />
        </Card>
    );
}

function HovercardDetails({hovercardable}){
    const data = useFragment(graphql`
        fragment HovercardDetails_data on Hovercardable {
            __typename
            ... on Droid {
                ...DroidInfo_data
            }
        }
    `, hovercardable);
    switch(data.__typename){
        case "Droid": return <DroidInfo data={data}>
        // case "Human": ...
        // case "Child": ...
        default: return null
    }
}
```

This allows you to go through the \[concrete\]->\[abstract\]->\[concrete\] mechanisc without being overly constrained

```
[Droid]->                   ->[Droid]
            ->[Hovercardable]->
[Human]->                   ->[Human]
[Child]->                   ->[Child]
```

Again, there's we still have no need or use for abstract classes "Character" or "Human" (used as a superclass to Child) in GraphQL.

Don’t write an interface if you’re only working on the backend. That’s not what interfaces are