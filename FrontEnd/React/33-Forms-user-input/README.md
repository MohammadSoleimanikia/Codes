# Working with Forms & User Input

## what's so difficult about forms 
1. form submission (easy part)
* entered values can be managed via state (two way binding)
* alternatively they can be extracted via refs
* or via `FormData` and native browser features

2. Input validation (tricky part)
* we can validate on every key stroke --> error may be shown too early 
* validate on lost focus --> maybe shown too long 
* validate on form submission --> too late 


## submission forms:

### submit form via button clickHandler:
1. create onClick event handler function 

```jsx
function handleSubmit(){
    console.log('submitted')
  }
```
2. add event handler to button 

```jsx
<button className="button" onClick={handleSubmit}>Login</button>
```
**Important** : each button in form element submit the form and refresh the page to prevent this we add `type="button"` to btn default type is `submit`
```jsx
<button type="button" className="button" onClick={handleSubmit}>Login</button>
```

### submit form via form onSubmit event 
1. add event handler with using event as argument and preventDefault to prevent from submission 
```jsx
function handleSubmit(event){
    event.preventDefault();
    console.log('submitted')
  }
```
2. add event handler to form element 

```jsx
<form onSubmit={handleSubmit}>
        //   some input elements
        // leave button with default type 
        <button className="button">Login</button>
    </form>
```

### managing & getting User Input via State & Generic Handler 

1. using state :
    1. we can use one state per input field 
    2. use one state for store all input values in an object

#### using one state per input
```jsx
const [enteredEmail,setEnteredEmail]=useState('');
const [enteredPassword,setEnteredPassword]=useState('');;;
```
2. add change event listener 
```jsx
function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }
```
3. use this function on onChange property in input and use entered value in input field (two way binding)
```jsx
<input
    onChange={handleEmailChange}
    id="email"
    type="email"
    name="email"
    // two way binding 
    value={enteredEmail}
/>
```

#### using one state for all of the inputs (generic handler)

1. define state 
```jsx
const [enteredValue,setEnteredValue]=useState({
    email:'',
    password:''
  })
```
2. define change handler function 
```jsx
function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      // use [] to target the identifier value for ex email not the identifier itself
      [identifier]: value,
    }));
  }
```
3. use change handler into input elements 
```jsx
 <input
    onChange={(event) => handleInputChange("email", event.target.value)}
    id="email"
    type="email"
    name="email"
    value={enteredValue.email}
/>
```

### getting user input via Refs

1. make ref 
```jsx
const emailRef=useRef();
const passwordRef=useRef();
```
2. connect ref to element 
```jsx
<input
    ref={emailRef}
    id="email"
    type="email"
    name="email"
/>
```
3. use this refs into handleSubmit 

```jsx
function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail=emailRef.current.value
    const enteredPassword=passwordRef.current.value
    console.log(enteredEmail,enteredPassword);
}
```
cons of this method 
1. resetting these values in a clean way is a bit harder `emailRef.current.value=""`
2. we end up with a lot of refs if we have complex form 

### Getting values via FormData & Native Browser APIs
