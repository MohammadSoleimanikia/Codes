# set wrapper type dynamically 
In React, you can also set the wrapper type dynamically based on props. This allows you to change the HTML element that wraps your content without duplicating code.

## Example

### DynamicWrapper Component

```jsx
export default function DynamicWrapper({ Component = 'div', children, ...props }) {
    // first letter of prop for wrapper type should be uppercase
    return <Component {...props}>{children}</Component>;
}
```

### Usage

```jsx
import DynamicWrapper from './DynamicWrapper';

function App() {
    return (
        <div>
            <DynamicWrapper as="section" className="section-class">
                <p>This is wrapped in a section element</p>
            </DynamicWrapper>
            <DynamicWrapper as="article" className="article-class">
                <p>This is wrapped in an article element</p>
            </DynamicWrapper>
        </div>
    );
}
```

## Explanation
- **Usage**: In the `App` component, `DynamicWrapper` is used to wrap content in different HTML elements (`section` and `article`), demonstrating its flexibility.

## Benefits

- **Dynamic Wrapping**: Allows you to change the wrapper element dynamically based on props.
- **Code Reusability**: Reduces code duplication by using a single component to handle different wrapper types.

## Conclusion

Setting the wrapper type dynamically in React is a useful technique for creating flexible and reusable components. By using a single component to handle different wrapper elements, you can simplify your code and enhance its maintainability.
