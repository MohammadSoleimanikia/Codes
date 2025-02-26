# Context API

## why we need context API
* In most React applications, we often need to share state between multiple components. Sometimes, we need to display a component that relies on state from another component, or we may need to update the state of one component from a different component. The Context API allows us to efficiently manage and share state across the entire component tree without having to pass props down manually at every level.
* to remove passing shared data through multiple components layers(prop drilling) 

## Remove prop drilling with component composition:
in our example we pass prop in this way: App(handleAddItemToCart as onAddItemToCart) -> Shop(onAddItemToCart as onAddToCart) -> Product (onAddToCart)
```jsx
// Shop.jsx
// before
 <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
```
```jsx
// Shop.jsx
// after
 export default function Shop({children}) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {children}
      </ul>
    </section>
  );
}

```

```jsx
// App.jsx after 
// using component composition:
// remove dummy map section from Shop component and move it to App component
<Shop>
    {DUMMY_PRODUCTS.map((product) => (
        <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
        </li>
    ))}
</Shop>
```
* this solution can cause a bloated App component
## What is Context API:
The Context API in React allows global state management without prop drilling. It enables components to share data efficiently without manually passing props at every level.
## Setting Up Context API
1. Creating a Context
    1. Store context-related files in a store folder.
    2. Create a new file, e.g., shopping-cart-context.jsx.
    3. iImport createContext from React and define the context:
```jsx
import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});
```
2. Provide the Context
 Wrap the component tree with the Provider and pass a value prop containing the state and functions.
```jsx
const ctxValue = {
  items: shoppingCart.items,
  addItemToCart: handleAddItemToCart,
};
return (
  <CartContext.Provider value={ctxValue}>
    <App />
  </CartContext.Provider>
);
```
3. Consuming Context
Using useContext Hook (Recommended)
```jsx
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';

const { items } = useContext(CartContext);
{items.length === 0 && <p>No items in cart!</p>}
```

Using use Hook (React v19+)
```jsx
import { use } from 'react';
const cartCTX = use(CartContext);
{cartCTX.items.length === 0 && <p>No items in cart!</p>}
```
Older Approach (Not Recommended)
```jsx
<CartContext.Consumer>
  {cartCtx => (
    <div>
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
    </div>
  )}
</CartContext.Consumer>
```

4. Linking the context to state:
Reading State
Ensure the state structure matches the context and link it:
```jsx
const [shoppingCart, setShoppingCart] = useState({ items: [] });
<CartContext.Provider value={shoppingCart}>
```
Writing State

Add handlers to update state:
```jsx
const ctxValue = {
  items: shoppingCart.items,
  addItemToCart: handleAddItemToCart,
};
<CartContext.Provider value={ctxValue}>
```
Usage in a deep child component:
```jsx
const { addItemToCart } = useContext(CartContext);
<button onClick={() => addItemToCart(id)}>Add to Cart</button>
```
When the context value changes, all consuming components will re-render.

5. Extracting Context Logic into a Provider Component
To improve maintainability and scalability, move context logic into a separate provider component.

Steps:
1. Remove state management from the main component.
2. Create a CartContextProvider in shopping-cart-context.jsx:
```jsx
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleAddItemToCart(id) {
    // Logic to add item
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    // Logic to update quantity
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  );
}
```
usage 
```jsx
<CartContextProvider>
  <App />
</CartContextProvider>
```

# useReducer
seReducer is a React Hook used for managing complex state logic.
It’s an alternative to useState, especially when state transitions depend on previous state values or involve multiple sub-states.

Why Use useReducer Instead of useState?
* Better for complex state – useReducer is ideal when state updates involve multiple actions or when state logic is centralized.
*  Predictable updates – It keeps state updates structured by using a reducer function.
* Easier to debug – Since all updates go through a single function, debugging becomes simpler.
*  Good for performance – Helps prevent unnecessary re-renders compared to useState in deeply nested components.

## how useReducer works
useReducer takes a reducer function and an initial state. The reducer function determines how the state should change based on an action.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```
* <strong>state</strong> the current state
* <strong>dispatch(action)</strong> Function to trigger a state update.
* <strong>reducer(state, action)</strong>Function that takes the current state and an action, then returns a new state .

## useReducer vs useState example
```jsx 
// useState
function ShoppingCart() {
  const [cart, setCart] = useState([]);
// define inside of component function 
  function addItem(item) {
    setCart([...cart, item]); // Add new item
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id)); // Remove item
  }

  function clearCart() {
    setCart([]); // Empty cart
  }
//   usage
  <button onClick={() => removeItem(item.id)}>Remove</button>
```

```jsx
// useReducer
const initialCartState = { items: [] };
// define outside of the component function 
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}
function ShoppingCart() {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
}
// usage
  <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
```

Example of useReducer in the shopping-cart-context.jsx