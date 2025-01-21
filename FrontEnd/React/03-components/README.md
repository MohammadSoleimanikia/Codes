# React Components

React apps are built by combining components. Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces that can be managed separately.

- **Functional Components**: These are simple functions that return JSX.
- **Class Components**: These are ES6 classes that extend from `React.Component` and have a `render` method.

## Why React?

React offers several advantages:

- **Reusable Building Block**: Components can be reused across different parts of the application, making the code more maintainable and reducing duplication.
- **Related Code Lives Together**: By encapsulating all the related code (HTML, CSS, and JavaScript) in a single component, React promotes better organization and easier maintenance.
- **Separation of Concerns**: React encourages separating the UI into distinct components, each responsible for a specific part of the application, leading to a clearer and more manageable codebase.

## What is a Component?

A component is just a JavaScript function or a class that optionally accepts inputs.
Example of a functional component:
To create a valid React component, it must follow these two rules:

1. The component name must start with an uppercase letter.
2. The component must return Renderable content, typically JSX.

Example of a functional component:
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```