# Redux in React

## Installation

### Step 1: Install Required Libraries

Run the following command to install Redux and React-Redux:

```bash
npm i redux react-redux
```

### Step 2: Set Up the Redux Store

1. Create a folder named `store` inside the `src` directory.
2. Inside the `store` folder, create a file named `index.js` to define the Redux store.

### Step 3: Create a Reducer Function

Define a reducer function to manage the state:

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

### Step 4: Create the Store

Import `createStore` from Redux and use it to create the store:

```js
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
    // Reducer function logic
};

const store = createStore(counterReducer);

export default store;
```

### Step 5: Connect React App to Redux Store

1. Import the `Provider` component from `react-redux` and wrap your app with it in the entry point file (e.g., `index.js` or `App.jsx`):

```jsx
import store from "./store/index.js";
import { Provider } from "react-redux";

<Provider store={store}>
    <App />
</Provider>;
```

2. Use Redux data in components with the `useSelector` hook:

```jsx
import { useSelector } from "react-redux";

const counter = useSelector((state) => state.counter);
// Example: counter = 0
```

3. Dispatch actions in components using the `useDispatch` hook:

```jsx
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const incrementHandler = () => {
    dispatch({ type: "increment" });
};

<button onClick={incrementHandler}>Increment</button>;
```

4. Attach payloads to actions:

```jsx
// Update the reducer to handle payloads
if (action.type === "increase") {
    return { counter: state.counter + action.amount };
}

// Dispatch an action with a payload
const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
};

<button onClick={increaseHandler}>Increase by 5</button>;
```

---

## Working with Multiple State Properties

To add additional state properties (e.g., a toggle for showing/hiding the counter):

1. Update the reducer to include the new state:

```js
const initialState = { counter: 0, show: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1, show: state.show };
    }
    if (action.type === "toggle") {
        return { counter: state.counter, show: !state.show };
    }
    return state;
};
```

2. Use the new state in components:

```jsx
const show = useSelector((state) => state.show);

const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
};

{
    show && <div>{counter}</div>;
}

<button onClick={toggleCounterHandler}>Toggle Counter</button>;
```

---

## Best Practices for Redux State Management

-   Always return a **new state object** in the reducer.
-   Avoid mutating the existing state directly.
-   Ensure all state properties are updated when returning a new state.

---

## Introduction to Redux Toolkit

### Why Use Redux Toolkit?

-   **Action Type Clashes**: Avoid conflicts in large applications.
-   **State Management Overhead**: Simplifies managing large state objects.
-   **State Immutability**: Automatically ensures immutability using Immer.

### Installation

Install Redux Toolkit:

```bash
npm install @reduxjs/toolkit
```

### Using Redux Toolkit

1. Import `createSlice` to define a slice of the store:

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.show = !state.show;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
```

2. Use `configureStore` to combine multiple slices:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // add another slice by adding key value
    },
});

export default store;
```

3. Access actions in components:

```jsx
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const dispatch = useDispatch();

const incrementHandler = () => {
    dispatch(counterActions.increment());
};

const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // Payload example
};

const counter = useSelector((state) => state.counter.counter);
const show = useSelector((state) => state.counter.show);
```

#### working with multiple slices

we add new components for this example : auth , header and userProfile

1. add authentication data into store: we should add a brand new slice for authentication (separation of concerns)

```js
// change the inital state to initialCounterState
const initialCounterState = { counter: 0, show: true };

// create slice
const initialAuthenticationState = { isAuthenticated: false };
const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialAuthenticationState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});
// add multiple slice into store with configureStore
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        authentication: authenticationSlice.reducer,
    },
});
// export actions
export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;
```

2. use new slice into components
   change auth from auth component

```js
const dispatch = useDispatch();

function handleLogin() {
    dispatch(authActions.login());
}

<form onSubmit={handleLogin}>
</form>
```

show conditionally auth component and user profile based on the isAuthenticated state

```jsx
import { useSelector } from "react-redux";
const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
);

{
    !isAuthenticated && <Auth />;
}
{
    isAuthenticated && <UserProfile />;
}
```
