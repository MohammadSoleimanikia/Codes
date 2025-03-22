import { useRef, useState } from "react";
export default function Login() {
  const [emailIsInvalid,setEmailIsInvalid] =useState(false);

  const emailRef=useRef();
  const passwordRef=useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;

    const emailIsValid=enteredEmail.includes ('@')
    if(!emailIsValid){
      setEmailIsInvalid(true);
      // use return to prevent rest of codes to executed
      return;
    }
    // won't execute if email is invalid
    setEmailIsInvalid(false);
    console.log('Sending HTTP request ...')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
          />
          <div className="control-error">{emailIsInvalid&& <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
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
