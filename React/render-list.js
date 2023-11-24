import "./App.css";

function App() {
const data=[
  {
    id:'1',
    title:"tiramisu",
    price:"$5.00"
  },
  {
    id:'2',
    title:"lemon ice cream",
    price:"$4.00"
  },
  {
    id:'3',
    title:"chocolate mousse",
    price:"$6.00"
  }
];

//render list component we just want price and title 
const filteredData=data.map(dessert=>{
  const itemList=`${dessert.title} - ${dessert.price}`;
  return <li>{itemList}</li>
})
return(
  <div>
    <ul>
      {filteredData}
    </ul>
  </div>
)
} 
export default App; 