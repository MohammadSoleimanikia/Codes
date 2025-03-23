# Form validation 

## validation an every key stroke with onChange event and state 

**Ex** check the email 
```jsx
const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  });
  // check if email contain @ and not empty
  const emailIsInvalid=enteredValue.email !=='' && !enteredValue.email.includes("@")

  <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
```
in this method as soon as the user type one letter gets the error and did not get any chance to enter a value 

## validation upon lost focus (onBlur event)
1. add state for the editing state with false value 
```jsx
const [didEdit,setDidEdit] =useState({
    email:false,
    password:false
  })
```
2. check if email is invalid after user edited the input field 
```jsx
const emailIsInvalid=didEdit.email && !enteredValue.email.includes("@")
```
3. n lost focus change the editing state to true to after user entered a value and click outside the validation starts 
```jsx
function handleInputBlur(identifier,value){
    setDidEdit(prevEdit=>({
      ...prevEdit,
      [identifier]:true
    }))
  }
```

4. using onBlur event on input this event fired when input lost their focus 
```jsx
<input
  onChange={(event) => handleInputChange("email", event.target.value)}
  onBlur={()=>handleInputBlur('email')}
  id="email"
  type="email"
  name="email"
  value={enteredValue.email}
/>
```
**improvement** in this method when we saw the error when we click again in input field we still get that error 
we can improve this with set didEdit to false when user start typing 
```jsx
function handleInputChange(identifier, value) {
  //some codes
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      // use [] to target the identifier value for ex email not the identifier itself
      [identifier]:false,
    }))
  }
```
## validation input upon form submission (useRef)
1. set state init to false 
```jsx 
const [emailIsInvalid,setEmailIsInvalid] =useState(false);
```

2. validate on handle submit 
```jsx
function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail=emailRef.current.value;

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
```

adding validation upon submit is always a good idea even we validate our inputs via each key stroke 

## validation input via build in validation props 
* **required prop**:Input field should not be empty 
```jsx
<input required id="email" type="email" name="email" />
```
*  **minLength**: minimum expected length
```jsx
<input id="password" type="password" name="password" required minLength={8}/>
```
## mixin custom and build in validation 
ex: check if confirm pass and pass are equal 
```jsx
 const [passwordsAreNotEqual,setPasswordsAreNotEqual]=useState(false);
 function handleSubmit(event){
    // some codes
    // using square bracket because - is not valid 
    if (data.password !== data['confirm-password']){
      setPasswordsAreNotEqual(true);
      // stop running any further codes 
      return;
    }
    // these codes can't run if passwords are not match.
    console.log(data);
    event.target.reset();
  }
```
## building and using a Reusable input component 
in stateLogin we have similar codes for email and password so we make a component to remove repetition 
1. add Input.jsx file 
```jsx
export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control-row">
      <div className="control no-margin">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
        <div className="control-error">
          {emailIsInvalid && <p>Please enter a valid email address</p>}
        </div>
      </div>
    </div>
  );
}
```

2. use in stateLogin.jsx
```jsx
<Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid email "}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange("password", event.target.value)}
          onBlur={() => handleInputBlur("password")}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password "}
        />
```

## outsourcing validation Logic 

```jsx 
export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
```
2. using functions for validation 
```jsx
import { isEmail,isNotEmpty,hasMinLength } from "../util/validation";
const emailIsInvalid =didEdit.email &&!isEmail(enteredValue.email);
```

## create a custom useInput hook 
we need custom hook because we manage some state in stateLogin.jsx so we cant use regular function 
1. adding a hooks folder 
2. add useInput into hooks folder 
```jsx
import { useState } from "react";
// set value for input and function to validate input
export function useInput(defaultValue,validationFN) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid=validationFN(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }

//   expose methods to the components 
  return {
    value:enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError:didEdit && !valueIsValid
  }
}   

```
3. use hook in component 
```jsx
const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));
```

## using third party Form libraries.
* React hook form 
* Formik
