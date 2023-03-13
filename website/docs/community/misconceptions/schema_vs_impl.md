# Misconception: I have a security / privacy issue, so I need to change the schema

You need to change the _implementation_. Changing the schema has zero effect on clients that have already shipped. You’re not fixing the security issue by changing the schema, you’re just breaking someone’s build.

```js
class Issue {
  getSomethingAsHTMLBecauseYouArentSecurityAware(): ?string {
    return issue.getSummary() // whoops, XSS!
  }
}
```

Do return null on fields to address security issues.

```js
class Issue {
  getSomethingAsHTMLBecauseYouArentSecurityAware(): ?string {
    return null; // XSS fixed. The client should already be resilient
  }
}
```

Do, introspect on _which client_ is calling in order to bound the mitigation of client-side security issues

```js
class Issue {
  getSomethingAsHTMLBecauseYouArentSecurityAware(): ?string {
    if (!clientVersionIsAbove234()){
        return issue.getSummary() // whoops, XSS!
    }
  }
}
```

Do use client targeted feature flags to bound the mitigation of client-side security issues so that you can dynamically adjust / add to the specific set of vulnerable clients without shipping more code

```js
class Issue {
  getSomethingAsHTMLBecauseYouArentSecurityAware(): ?string {
    if (featureFlag("hot_12312_vulnerable_clients")){
      return null;
    }
    return issue.getSummary() // other clients sanitize
  }
}
```
