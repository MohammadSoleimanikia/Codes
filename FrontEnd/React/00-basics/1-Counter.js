import React ,{ useReducer } from "react";
//implement reducer functiuon
const reducer= (state,  action)=>{
switch (action.type){
    case 'inc':
        return { count: state.count + 1 };
    case 'dec':
        return { count: state.count - 1 };
    case 'reset':
        return { count: 0 };
    default:
        throw new Error('Unknown action type');
}
};

//implement 
function Counter(){
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const increment = () => {
        dispatch({ type: 'inc' });
      };
    
      const decrement = () => {
        dispatch({ type: 'dec' });
      };
    
      const reset = () => {
        dispatch({ type: 'reset' });
      };

      return (
        <div>
          <p>Count: {state.count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      );
    };


export default Counter;