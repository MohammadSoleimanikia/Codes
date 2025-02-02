# Reusable Custom Button Component

This is a reusable button component for React applications. It supports different modes, custom icons, and additional CSS classes.

## Usage

To use this button component, import it into your React project and use it as shown below:

```jsx
import Button from './Button';
import { SomeIcon } from 'some-icon-library';

function App() {
    return (
        <div>
            <Button mode="filled" className="my-button" Icon={SomeIcon}>
                Click Me
            </Button>
        </div>
    );
}

export default App;
```

## Props

- `children`: The content to be displayed inside the button.
- `className`: Additional CSS classes to apply to the button.
- `mode`: The mode of the button. Default is `'filled'`. Other possible values can be defined in your CSS.
- `Icon`: An optional icon component to be displayed inside the button.
- `...props`: Any other props will be passed down to the underlying `<button>` element.

## Example

```jsx
<Button mode="outline" className="custom-class" Icon={SomeIcon} onClick={() => alert('Button clicked!')}>
    Click Me
</Button>
```
