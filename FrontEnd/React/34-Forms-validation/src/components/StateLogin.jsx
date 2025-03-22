import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit,setDidEdit] =useState({
    email:false,
    password:false
  })
  // check if email contain @
  const emailIsInvalid=didEdit.email && !enteredValue.email.includes("@")
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
    setEnteredValue({
      email: "",
    password: "",
    })
  }
  function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      // use [] to target the identifier value for ex email not the identifier itself
      [identifier]: value,
    }));
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier]:false,
    }))
  }
  function handleInputBlur(identifier,value){
    setDidEdit(prevEdit=>({
      ...prevEdit,
      [identifier]:true
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={()=>handleInputBlur('email')}
            id="email"
            type="email"
            name="email"
            value={enteredValue.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => handleInputChange("password", event.target.value)}
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
