import "./App.css";
import React from "react";
function App() {
//using children.map and cloneElement

//two props children and spacing as argument
const Row=({children,spacing})=>{
//set margin for each child
  const childStyle={
    marginLeft:`${spacing}px`
  };

  return (
    <div className="Row">
    {/*children.map returns a modified array of childs  */}
        {React.Children.map(children, (child, index)=>{
        
        //using the cloneElement to modify props of childs
        //cloneElement(child,new props)
          return React.cloneElement(child, {
            style:{
              //use previous style
              ...child.props.style,
              //merge new style with spread operator and didn't add margin to first item
              ...(index>0 ? childStyle:{})
            }
          });
        })}
    </div>
  )
}

  return (
    <div>
      <Row spacing={32}>
        <p>pizza margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>john</p>
      </Row>
    </div>
  );
}
export default App;
