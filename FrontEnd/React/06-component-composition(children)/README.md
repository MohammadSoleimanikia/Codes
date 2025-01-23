# Component Composition

Component composition in React allows a component to wrap other components or content, making it easier to build reusable and flexible UI elements.

## The `children` Prop

The `children` prop is a special prop in React that allows you to pass components or elements as data to other components. It is commonly used for creating reusable and flexible components. By using the `children` prop, you can compose components together in a way that makes them more modular and easier to manage.

### Using `children` Prop in a Component

Here is an example of how to use the `children` prop:

```jsx
<TabButton>Components</TabButton>
```

### Accessing `children` Prop in the Props Object

You can access the `children` prop from the `props` object:

```jsx
export default function TabButton(props) {
    return <li><button>{props.children}</button></li>;
}
```

### Using Destructuring to Access `children` Prop

Alternatively, you can use destructuring to access the `children` prop directly:

```jsx
export default function TabButton({ children }) {
    return <li><button>{children}</button></li>;
}
```