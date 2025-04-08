import { Children, createContext, createElement, useReducer } from "react";
const CartContext = createElement({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});
function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        //find the index if was-1 didn't available in array
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        // make new object to update
        const updatedItems = [...state.items];
        // if the item available we should add quantity
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            // update existing with updated
            updatedItems[existingCartItemIndex] = updatedItem;
            // if item not available and we should add a new item
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        // return new state with updated items
        return { ...state, items: updatedItems };
    }
    if (action.type === "REMOVE_ITEM") {
        // we want to check if quantity is greater than one we reduce the quantity
        // if quantity is equal to 1 we remove the item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        }
        if (existingCartItem.quantity > 1) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return {...state,items:updatedItems};
    }
    // if nothing changed return previous state 
    return state;
}
export function CartContextProvider() {
    useReducer(cartReducer, { items: [] });
    // use CartContext for react 19+
    return <CartContext.provider>{Children}</CartContext.provider>;
}
export default CartContext;
