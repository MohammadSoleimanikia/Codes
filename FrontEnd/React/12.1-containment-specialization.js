import "./App.css";
import React from "react";
function App() {
//containment:components don't know their children ahead of time. 
function Dialog(props){
  return(
    <div className="modal">
      {props.children}
    </div>
  )
}
  return (
//Specialization: defines components as being “special cases” of other components.
   <Dialog color="blue">
    <h1 className="Dialog-title">
      Thanks!
    </h1>
    <p className="Dialog-message">
      we'll process your order in less than 24 hours
    </p>
   </Dialog>
  );
}
export default App;
