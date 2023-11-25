import "./App.css";
import { useState } from "react";

function App() {
const [name,setName]=useState("");

const handleSubmit= (e) => {
  //stop from refresh page after submit
  e.preventDefault();
  //clear input aftrer submit
  setName("");
  console.log('form submitted');
}

return(
<div className="App">
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="Field">
        {/* use htmlFor instead of "for" in label. now if you click on label input selected also*/}
        <label htmlFor="name">Name:</label>
        <input
        id="name"
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
      {/* disabling button for when the input is empty */}
      <button disabled={!name} type="submit">Submit</button>
    </fieldset>
  </form>

</div>
)
} 
export default App; 