## Creating a Modal Component in React

To create a modal component in React, you can use the `<dialog>` HTML tag. Below is an example of how to implement a modal in React:

1. **Create the Modal Component**: Create a new file for your modal component, e.g., `Modal.js`.

```jsx
const Modal = ({open, onClose }) => (
    <dialog className="result-modal" open={open}>
        <h2>title</h2>
        // using form with method dialog used to close the dialog
        <form method="dialog">
            <button onClick={onClose}>Close</button>
        </form>
    </dialog>
);

export default ResultModal;
```

2. **Use the Modal Component**: Import and use the modal component in your main application file, e.g., `App.js`.

```jsx
import ResultModal from './ResultModal';
const App = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <ResultModal open={isOpen} onClose={handleClose} />
        </div>
    );
};
```
## closing modal via ESC Escape key 
The <dialog> element allows website visitors to close the opened dialog by pressing the ESC (Escape) key on their keyboard.
if we want to do something on close the modal we use onClose event 
```jsx
<dialog ref={dialog} className="result-modal" onClose={onReset}
   ...
</dialog>
```

## styling shadow behind modal with tailwind :
use backdrop: then add tailwind class for styling 
```jsx
// add slate color with some transparency
<dialog className="backdrop:bg-slate-900/90">
```