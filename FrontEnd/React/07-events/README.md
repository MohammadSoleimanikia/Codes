# Event handling in React
In React, handling events is similar to handling events in plain JavaScript. However, there are some syntactic differences:

1. Events are named using camelCase, rather than lowercase.
2. You pass a function as the event handler, rather than a string.

For example, to handle a click event on a button, you can do the following:

```jsx
export default function TabButton(props){
    // we must add handler function inside the component ro access to components props and state
    function handleClick() {
    alert('Button clicked!');
    }

    return <li><button onClick={handleClick }>{props.children}</button></li>;
    // don't use parenthesis in onClick property 
}
```

In this example, the `handleClick` function will be called whenever the button is clicked.