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
```jsx
const [enteredEmail,setEnteredEmail]=useState();
  const [enteredPassword,setEnteredPassword]=useState();;;
```