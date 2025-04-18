import { createSlice } from "@reduxjs/toolkit";
const initialCartState={
    items:[],
    showCart:false,
}
const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        showCart(state){
            state.showCart=true
        },
    }
})
export default cartSlice.reducer;
export const showCartAction=cartSlice.actions;