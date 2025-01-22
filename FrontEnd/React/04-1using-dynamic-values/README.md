# Using Dynamic Values in React Components

In React, you can use curly braces `{}` to embed dynamic values within your components.

## Example

Here's a simple example of using dynamic values in a React component:
each time a react description randomly selected.

```jsx
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const description=reactDescriptions[genRandomInt(2)];
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
```

In this example, the `name` and `age` variables are embedded within the JSX using curly braces.

## What You Can't Add

While curly braces allow you to embed JavaScript expressions, there are some things you can't do:

1. **Statements**: You cannot use statements like `if`, `for`, or `while` directly inside JSX. Instead, use ternary operators or logical operators for conditional rendering.
     
     ```jsx
     // Incorrect
     <div>{if (true) { 'Yes' }}</div>

     // Correct
     <div>{true ? 'Yes' : 'No'}</div>
     ```

2. **Functions**: You cannot define functions inside JSX. Define them outside and call them within the curly braces.

     ```jsx
     // Incorrect
     <div>{function sayHello() { return 'Hello'; }}</div>

     // Correct
     const sayHello = () => 'Hello';
     <div>{sayHello()}</div>
     ```

3. **Objects**: You cannot directly render objects. Convert them to a string or map over their properties.

     ```jsx
     const user = { name: 'John', age: 30 };

     // Incorrect
     <div>{user}</div>

     // Correct
     <div>{user.name} is {user.age} years old.</div>
     ```

By following these guidelines, you can effectively use dynamic values in your React components.