import "./App.css";
import { useEffect,useState } from "react";
function App() {
  const [effectedVar,setEffectedVar]=useState(1)
  useEffect(()=>{console.log('var is changed')},[effectedVar])
  
const effectedVarHandle=()=>{setEffectedVar(effectedVar+1)}
return(
<div className="App" >
  
  <button onClick={effectedVarHandle}> change the var value</button>
</div>
)
} 
export default App; 