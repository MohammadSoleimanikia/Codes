# Refs 
## What is Refs
Refs provide a way to access DOM nodes or React elements created in the render method. They are used to get a reference to a particular element or component, allowing you to interact with it directly. This can be useful for tasks such as managing focus, text selection, or integrating with third-party libraries.

* A Ref is similar to state, but it doesn't trigger a re-render when it changes.
* We can use ref to connect to HTML elements.

## Using Refs: Connecting and Accessing HTML Elements
| Step | Code |
|------|------|
| 1. Import | ```jsx import {useRef } from "react"; ``` |
| 2. Define ref | ```jsx const playerName=useRef(); ``` |
| 3. Connect to element | ```jsx <input ref={playerName} type="text" /> ``` |
| 4. Use ref for connection to HTML element | ```jsx function handleClick() { setEnteredPlayerName(playerName.current.value); } ``` |

## Manipulating the DOM via Refs
```jsx
function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // clear the input value
    playerName.current.value='';
}
```

## using refs to manage any kind of values 
### Using useRef for Persistent Timer in React
1. wen we want to save value that don't reset when component re-executed like let timer
2. when the value is not direct impact on the UI 

```jsx
// let timer;
const timer = useRef();
```

```jsx
function handleStart() {
    // save timer id for cleared it in handleStop
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
```
## Forwarding refs to custom components
* if we want to access a html element outside of its component we can use refs 
1. define ref in custom component 
```jsx
    const dialog=useRef();
```
2. send ref to base component 
```jsx
<ResultModal ref={dialog}/>
```
3. use that ref inside of base component 
```jsx
export default function ResultModal({ref}){
    return <dialog ref={ref} >
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}
```
4. now we have connection from custom to base component that we can use it 
```jsx
function handleStart() {
    timer.current = setTimeout(() => {
        // use dialog showModal inside another component 
      dialog.current.showModal();
    }, targetTime * 1000);
}
```
## Exposing component API via the useImperativeHandle hook 
### why using useImperativeHandle instead of pure useRef
1. Encapsulation: The ResultModal component manages its own logic, but exposes only necessary methods.
2. Control from Parent: The parent can control the modal without directly accessing the DOM.
3. Cleaner API: Instead of passing multiple props (e.g., isOpen, setIsOpen), we just expose an open method.

### usage 
1. import useImperativeHandle to base component 
```jsx
import { useImperativeHandle } from "react"
```
2. call this hook in base component to define properties and methods that should be accessible from outside
 1. this hook accept two argument ref and a function that return an object which group all the properties and methods that should be exposed to outside
```jsx
// import useRef for attach a new ref to dialog that used in imperativeHandle
import { useImperativeHandle ,useRef } from "react"
export default function ResultModal({ref}){
    const dialog=useRef();
    // ref from outside now connect to API instead of direct access to DOM element 
    useImperativeHandle(ref,()=>{
        // return an object
        return {
            open(){
                // in API we connect directly to DOM element 
                dialog.current.showModal();
            }
        }
    })
    return <dialog ref={dialog} className="result-modal">
        <h1>Title</h1>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}
```
3. use API in other components 
```jsx
function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    //dialog.current.showModal(); // direct connection to DOM
    dialog.current.open()//use API
    }, targetTime * 1000);

    setTimerStarted(true);
  }


```
## Refs vs States
| State | Refs |
|------|------|
| component re-executed when changed|Do not cause component re-evaluation when changed |
| should be used for values that are directly reflected in the UI | can be used to gain direct DOM element accessing certain browser APIs|
| should not be used for behind the scenes values that have no direct UI impact||
| 4. Use ref for connection to HTML element | |

# portals 
Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios where you need to break out of the typical DOM structure, such as rendering a modal, tooltip, or dropdown menu.

### Why Use Portals
1. **Modals and Overlays**: Portals allow you to render modals and overlays outside the main DOM hierarchy, preventing issues with z-index and stacking context.
2. **Tooltips and Popovers**: They enable rendering tooltips and popovers in a way that avoids clipping and positioning issues.
3. **Performance**: Portals can improve performance by reducing the number of re-renders needed for certain components.

### How to Use Portals
To create a portal, use the `ReactDOM.createPortal` method. This method takes two arguments: the JSX to render and the DOM node to render it into.

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('modal-root')
    );
}
```

In your HTML, ensure you have a `div` with the id `modal-root`:

```html
<body>
    <div id="root"></div>
    <div id="modal-root"></div>
</body>
```

Now, you can use the `Modal` component to render content into the `modal-root` div, outside the main application DOM hierarchy.