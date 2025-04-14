import { createContext, useReducer } from "react";
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart:()=>{},
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
            (item) => item.id === action.id
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
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }
    if(action.type==='CLEAR_CART'){
        return {...state,items:[]}
    }
    // if nothing changed return previous state
    return state;
}
// connect context to component with this component
export function CartContextProvider({ children }) {
    const [cart,dispatchCartAction]=useReducer(cartReducer, { items: [] });

    function addItem(item){
        dispatchCartAction({type:'ADD_ITEM',item:item})
    }

    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM',id:id})
    }
    function clearCart(){
        dispatchCartAction({type:'CLEAR_CART'})
    }

    const cartContext={
        items:cart.items,
        addItem:addItem,
        removeItem:removeItem,
        clearCart:clearCart
    }

    // use CartContext for react 19+
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
export default CartContext;
