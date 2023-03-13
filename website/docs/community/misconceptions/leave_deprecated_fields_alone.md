# Misconception: It’s costly to maintain deprecated fields in the schema</title>
It’s one line, which allows all existing clients to continue to work without crashing. 

```java
.dataFetcher("deprecatedThing", nullDatafetcher)
```

```js
class MyThing {
 deprecatedThing(){
  return null;
 } 
}
```

If it’s not practical to maintain null / error fields in the schema, these should be made into first-class functionality on the server. Tooling or functionality not being easy on the backend has no influence on the needs of the clients