# Side Effects, Async Task & Redux

the reducers must be pure ,`side effect` free and `synchronous` so where should we put our asynchronous codes?

1. directly in the component via useEffect and dispatch an action when side effect done
2. inside the action Creators

ex: in this app we send data to a backend to when we refresh the cart fetched from the backend.

**where should your logic go**

1. synchronous and side effect free code goes into reducer
2. async code with side effect should go into action creator or components.

## run side effect inside of the component

### using useEffect with reducer:

#### sync state with the backend

we add cart state into the app.jsx and whenever the cart changes we send a http request

1. add cart state into the app component

```jsx
const cart = useSelector((state) => state.cart);
```

2. use useEffect :

```jsx
useEffect(() => {
    // prevent calling fetch on first render of app.jsx
    if (isInitial.current) {
        isInitial.current = false;
        return;
    }

    const sendCartData = async () => {
        const response = await fetch(dbLink, {
            method: "PUT",
            body: JSON.stringify(cart),
        });
        if (!response.ok) {
            throw new Error("Sending cart data failed ");
        }
    };
    sendCartData().catch((error) => {
        dispatch(
            uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "sending cart data Failed!",
            })
        );
    });
}, [cart, dispatch]);
```

in this way we first update the cart in store(reducer) and then this update trigger the request .

### using an action creator Thunk

**what is Thunk**:

-   a function that delays an action until later
-   An action creator function that does `not return the action itself` but instead `another function` which `eventually` returns the action.

#### implementing
lets implement a simple action creator that is synchronous 
```js
export const addItem = (item) => {
  return {
    type: 'ADD_USER', 
    payload: item,
  };
};
```
no if we want to fetch user data we should make a thunk.
```js
export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    dispatch({
      type: 'ADD_USERS',
      payload: data,
    });
  };
};
```

## Redux DevTools
Redux DevTools is a development tool that helps developers debug and monitor the state of their Redux applications. Redux is a state management library often used with React, and Redux DevTools provides a user-friendly interface to inspect and manipulate the state changes in your application.
install the chrome extension 
