import "./App.css";
import { useState } from "react";
const ToDo=props =>{
return(<tr>
  <td>
    <label>{props.id}</label>
  </td>
  <td>
    <input/>
  </td>
  <td>
    <label>{props.createdAt}</label>
  </td>
</tr>)

}
function App() {
  const [toDos,setToDos]=useState([{
    id:"todo1",
    createdAt:"18:00",
  },
  {
    id:"todo2",
    createdAt:"20:30",
  
  }]);
//reverese method is a mutative operation so we first create new array from first array
const reverseOrder = ()=>{
  setToDos([...toDos].reverse());
}


return(
  <div>
    <button onClick={reverseOrder}>Reverse</button>
    <table>
      <tbody>
        {toDos.map((todo,index)=>(
          //using index as key makes propblem for when we want to change the order of list
          //when click on reverse the id and created at props changed but the key still the same because using index
          //since index didnt change react keeps the previous state 
            //wrong
            // <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>
            
            //correct:using unique identifier as key.
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
          ))
        }
      </tbody>
    </table>
  </div>
)
} 
export default App; 