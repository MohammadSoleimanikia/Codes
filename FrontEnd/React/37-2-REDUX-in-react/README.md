# redux in react

## Installation

1. install libraries

```bash
npm i redux react-redux
```

2. add a folder in src folder named `store`
3. add a JS file in this folder named `index.js`
   write codes for redux in this file
4. create a reducer function for createStore

```js
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1 };
    }
    if (action.type === "decrement") {
        return { counter: state.counter - 1 };
    }
    return state;
};
```

5. import createStore and use it to make a store

```js
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
    // reducer function Codes
};
const store = createstore(counterReducer);
```

6. connect react app to redux store

    1. export this store as default

    ```js
    export default store;
    ```

    2. provide this store to react app
       we go to the highest level in the app that app.jsx is rendered
       import and use the Provider from react-redux library.
       import store and use it as store prop in Provider

    ```jsx
    import store from "./store/index.js";
    import { Provider } from "react-redux";
    <Provider store={store}>
        <App />
    </Provider>;
    ```

    3. use redux data in components for ex: counter.jsx

    ```jsx
        import { useSelector } from 'react-redux';
        const counter=useSelector((state)=>state.counter);
        <!-- counter:0 -->
    ```

    4. dispatch actions in components

    ```jsx
    //use useDispatch hook
    import { useDispatch } from "react-redux";
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };
    <button onClick={incrementHandler}>Increment</button>;
    ```

    5. attaching payload to actions

    ```jsx
    // add to reducer function index.js
    if (action.type === "increase") {
        return { counter: state.counter + action.amount };
    }

    //add handler to component counter.jsx
    const increaseHandler = () => {
        dispatch({ type: "increase", amount: 5 });
    };
    <button onClick={increaseHandler}>Increase by 5</button>;
    ```

## working with multiple state properties

to add toggle functionality we add a new state named `show` to store for toggle between display and hiding the counter

1. add a new state to store

```jsx
// save init state into a var
const initialState = { counter: 0, show: true };
// add a new action in reducer and update previous actions too
const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1, show: state.show };
    }
    // other actions
    if (action.type === "toggle") {
        return {
            counter: state.counter,
            // toggle the show state
            show: !state.show,
        };
    }
    return state;
};
```

2. use this state in component

```jsx
// subscribe to store
const show = useSelector((state) => state.show);

// dispatch action in handler function
const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
};

// conditionally display count div
{
    show && <div className={classes.value}>{counter}</div>;
}

// add onClick handler
<button onClick={toggleCounterHandler}>Toggle Counter</button>;
```

## how to work with redux state correctly 
* the object that we returning in the reducer function should always a brand new snap shot of the state 
* this object that we returning will not be merged with the existing state 
* this object will overwrite the existing state 
* we must set all the other states when we updating 
**important** we should never mutate the state and should always return a brand new state 
