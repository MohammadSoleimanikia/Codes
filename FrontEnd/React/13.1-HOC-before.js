import "./App.css";
import React,{useState} from "react";

//in both item1 and item2 the money initialization and handlePrice are the same and we should write the logic twice
const Item1=()=>{
//same as item2
const [money,setMoney]=useState(10);
//same as item2
const handlePrice= ()=>{
  setMoney(money+10);
}
  return(
    <div>
        <h1>The price is {money}</h1>
        <button onClick={handlePrice}>+10$</button>
    </div>
  )
}

const Item2=()=>{
  const [money,setMoney]=useState(10);
  const handlePrice= ()=>{
    setMoney(money+10);
  }
    return(
      <div>
          <h1>The price is {money}</h1>
          <button onClick={handlePrice}>+10$</button>
      </div>
    )
  }

function App() {
  return (
    <div className="App">
      <Item1/>
      <Item2/>
    </div>
  );
}
export default App;