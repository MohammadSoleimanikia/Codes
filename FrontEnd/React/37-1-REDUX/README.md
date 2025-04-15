# REDUX

## What is Redux?

Redux is a state management library inspired by the Flux architecture. It is used to manage cross-component or app-wide state in a predictable way.

### What is State?

State refers to the data that, when changed, should affect the UI.

#### Types of State:

1. **Local State**: Managed within a single component using `useState` or `useReducer`.
2. **Cross-Component State**: Shared across multiple components.
3. **App-Wide State**: Shared across all components, such as theme or authentication.

For managing cross-component and app-wide state, React Context can be used to avoid prop drilling.

---

## Redux vs React Context

### Potential Disadvantages of React Context:

1. **Complex Setup & Management**: Managing multiple contexts can become cumbersome.
2. **Deeply Nested Providers**: Using multiple contexts can lead to deeply nested provider components.

```jsx
<authContextProvider>
    <themeContextProvider>
        <UIInteractionContextProvider>
            <multiStepFormContextProvider></multiStepFormContextProvider>
        </UIInteractionContextProvider>
    </themeContextProvider>
</authContextProvider>
```

If all providers are combined into one, it can result in a single, overly complex provider.

3. **High-Frequency Changes**: React Context is not ideal for high-frequency updates. It works better for low-frequency updates like theme or locale changes.

---

## How Redux Works

1. **Centralized Store**: Redux uses a single central store to manage the app's state.
2. **Subscription**: Components subscribe to the store to receive updates when the state changes.
3. **Immutable State Updates**: Components do not directly modify the store. Instead:
   - Reducer functions handle state updates.
   - Components dispatch actions (simple JavaScript objects).
   - Redux forwards actions to the reducer, which returns the updated state to the store.

---

## Using Redux

### Step 1: Install Redux
```bash
npm install redux
```

### Step 2: Import Redux
```js
const redux = require('redux');
```

### Step 3: Create a Store
```js
const store = redux.createStore();
```

### Step 4: Create a Reducer
The store requires a reducer to handle state changes. A reducer:
- Takes two inputs: the current state and the dispatched action.
- Returns the new state object.
- Must be a pure function (same input produces the same output, no side effects).

Example:
```js
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};
```

### Step 5: Provide the Reducer to the Store
```js
const store = redux.createStore(counterReducer);
```

### Step 6: Add a Subscriber
Subscribers listen for state changes using the `getState` method.
```js
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};
```

### Step 7: Register the Subscriber
Use the `subscribe` method to register the subscriber. Redux will execute the subscriber function whenever the state changes.
```js
store.subscribe(counterSubscriber);
```

### Step 8: Dispatch Actions
Actions are JavaScript objects with a `type` property that describes the action. Each action type should be unique.

Example:
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

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// Dispatch actions
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
```

--- 

This guide provides a clear and concise overview of Redux, its advantages over React Context, and step-by-step instructions for implementation. REDUX

