import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialCounterState={counter:0,show:true}

const counterSlice= createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter= state.counter + action.payload
        },
        toggleCounter(state){
            state.show=!state.show
        }
    }
})


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
const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        authentication:authenticationSlice.reducer
    }
});
export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;