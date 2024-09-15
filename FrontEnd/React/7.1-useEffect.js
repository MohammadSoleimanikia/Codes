import "./App.css";
import { useEffect,useState } from "react";
function App() {
const [toggle,setToggle]=useState(true);

const clickHandler =()=>{
  setToggle(!toggle);
}
useEffect(()=>{
  //change tab title based on toggle because this effects on window it should useEffect
  document.title=toggle ? "welcome to little lemon" : "using the use effect hook "
},[])
//when using empty bracket(dependency array) it will execute one time and never executed again
return(
<div>
<h1>using use effect hook</h1>
<button onClick={clickHandler}>
  toggle message
</button>
{toggle && <h2>welcome to little lemon</h2>}
</div>
)
} 
export default App; 