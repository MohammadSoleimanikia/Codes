import "./App.css";
import React from "react";
//define generic component (containment)
const Button =({children,backgroundColor})=>
{
  return <button style={{backgroundColor}}>{children}</button>
}

//define generic component (containment)
const Alert=({children})=>
{
return(
    <>
      <div className="Overlay"></div>
      <div className="Alert">{children}</div>
    </>
  );
};

//specialization
const DeleteButton=()=>{
  return <Button backgroundColor={"red"}>Delete</Button>
}

function App() {

  return (
    <div className="App">
      <header>Little leomon restaurant </header>
      
      {/*specialization */}
      <Alert>
        <h4>Delete account</h4>
        <p>
          are you sure you want to proceed? you will miss all your delliciius recipes!
        </p>
        <DeleteButton/>
      </Alert>
      
    </div>
  );
}
export default App;
