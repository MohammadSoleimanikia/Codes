import { createSlice } from "@reduxjs/toolkit";
const initialCartState={
    showCart:false,
}
const showCartSlice= createSlice({
    name:'showCart',
    initialState:initialCartState,
    reducers:{
        showCart(state){
            state.showCart=true
        },
    }
})

export default showCartSlice.reducer;
export const showCartAction=showCartSlice.actions;