import "./App.css";
import React,{useState} from "react";

// Higher-Order Component (HOC)
const withPriceHandling = (WrappedComponent) => {
  return () => {
//add similarities between two items in HOC
    const [money, setMoney] = useState(10);
    const handlePrice = () => {
      setMoney(money + 10);
    }
    return (
      <WrappedComponent money={money} handlePrice={handlePrice} />
    );
  };
}

//add props to item component
const Item1=({money,handlePrice})=>{
  return(
    <div>
        <h1>The price is {money}</h1>
        <button onClick={handlePrice}>+10$</button>
    </div>
  )
}

const Item2=({money,handlePrice})=>{
    return(
      <div>
          <h1>The price is {money}</h1>
          <button onClick={handlePrice}>+10$</button>
      </div>
    )
  }

  
// Higher-Order Components with Price Handling
const Item1WithPriceHandling = withPriceHandling(Item1);
const Item2WithPriceHandling = withPriceHandling(Item2);

function App() {
  return (
    <div className="App">
      <Item1WithPriceHandling />
      <Item2WithPriceHandling />
    </div>
  );
}
export default App;