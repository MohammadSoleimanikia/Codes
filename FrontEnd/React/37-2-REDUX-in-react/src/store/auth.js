import { createSlice } from "@reduxjs/toolkit"
const initialAuthenticationState={isAuthenticated:false}

const authenticationSlice=createSlice({
    name:'authentication',
    initialState:initialAuthenticationState,
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        }
    }
})

export default authenticationSlice.reducer
export const authActions = authenticationSlice.actions;