import "./App.css";

import { useRef } from "react";

function App() {
  // Creating a ref using the useRef hook and initializing it with null
  const formInputRef = useRef(null);

  const focusInput = () => {
    // Accessing the current property of the formInputRef, that connected to real input element
    formInputRef.current.focus();
  };
  return (
    <div>
      <h1>Using useRef to access underlying DOM</h1>

      {/* Creating an input element and associating it with the formInputRef */}
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>
        Focus input
      </button>
    </div>
  );
}
export default App;
