# Default Prop Values in React

In React, you can define default values for your component's props using the `defaultProps` property. This is useful when you want to ensure that your component has a fallback value for a prop if it is not provided by the parent component.


## Functional Components

For functional components, you can  set default prop values directly in the function signature.

```jsx
export default function Component({children,buttons,Container="menu"}){

}
```

By using default prop values, you can make your components more robust and easier to use.