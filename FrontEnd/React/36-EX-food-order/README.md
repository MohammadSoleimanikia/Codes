why using context 
because the shopping cart data required in many parts of this app 
* we need to add it from inside of any meals item 
* we need to view it in cart modal 
* we need the information in the header to update the number of items 
* we need it in the check out field 
## add context to app 
1. add store folder in src folder 
2. add context `CartContext.jsx`
3. import `createContext`
4. create context object with `createContext` and pass default value to it for auto completion
```jsx
const  CartContext=createElement({
    items:[],
    addItem :(item)=> {},
    removeItem:(id)=>{}
});
```
5. make context provider to wrap around components and make context available to them and do the actual data management and state managee
