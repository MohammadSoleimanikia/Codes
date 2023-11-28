import "./App.css";
import { useReducer } from "react";
function App() {
const reducer =(state,action)=>{
if(action.type==='buy-ingeridients') return{money:state.money-10};
if(action.type==='sell-a-meal') return{money:state.money+10};
if(action.type==='celebrity-visit') return{money:state.money+5000};
return state
}
const initialState={money:100};

const [state,dispatch]=useReducer(reducer,initialState);



return(
<div>
<h1>wallet:{state.money}</h1>
<div>
  <button onClick={()=>dispatch({type:"buy-ingeridients"})}>Shopping for veggies</button>
  <button onClick={()=>dispatch({type:"sell-a-meal"})}>serve a meal to a cutomer</button>
  <button onClick={()=>dispatch({type:"celebrity-visit"})}>celebrity visit</button>
</div>
</div>
)
} 
export default App; 
