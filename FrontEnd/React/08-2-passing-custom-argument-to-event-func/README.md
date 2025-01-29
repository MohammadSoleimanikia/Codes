# Passing Custom Argument to Event Function

If we want to define a function that should be executed upon an event but we also want to control how it's going to be called and which arguments are going to be passed to it, we use this approach:

```jsx
<TabButton
  onSelect={() => {
    handleSelect("State");
  }}
>
  State
</TabButton>
```

In this example, the `handleSelect` function is called with the argument `'State'` when the `onSelect` event is triggered.
