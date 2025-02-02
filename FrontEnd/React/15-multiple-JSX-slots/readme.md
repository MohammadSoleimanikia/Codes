# Multiple Slots in JSX

In React, you can create components that accept multiple slots for content. This allows you to pass different pieces of JSX to different parts of a component. Here's a simple guide on how to achieve this.

## Example

### Parent Component

```jsx
import React from 'react';
import SlotComponent from './SlotComponent';

function ParentComponent() {
    return (
        <SlotComponent
            header={<h1>This is the header</h1>}
            footer={<p>This is the footer</p>}
        >
            <div>This is the main content and saved in children prop</div>
        </SlotComponent>
    );
}

export default ParentComponent;
```

### Slot Component

```jsx
import React from 'react';

function SlotComponent({ header, footer, children }) {
    return (
        <div>
            <div className="header">{header}</div>
            <div className="content">{children}</div>
            <div className="footer">{footer}</div>
        </div>
    );
}

export default SlotComponent;
```

## Explanation

- **ParentComponent**: This component uses `SlotComponent` and passes different JSX elements to the `header`, `footer`, and `children` props.
- **SlotComponent**: This component receives `header`, `footer`, and `children` as props and renders them in different parts of the layout.

## Benefits

- **Flexibility**: Allows you to pass different JSX elements to different parts of a component.
- **Reusability**: Makes your components more reusable by allowing different content to be slotted in.

## Conclusion

Using multiple slots in JSX is a powerful way to create flexible and reusable components. By passing different pieces of JSX to different parts of a component, you can create complex layouts with ease.
