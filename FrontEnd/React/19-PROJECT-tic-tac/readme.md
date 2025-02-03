# tic tac toe game 

## notes 

### we can use pure html codes into index.html 
```html
<body>
    <header>
      <img src="public/game-logo.png" alt="tic tac toe logo ">
      <h1>Tic-Tac-Toe</h1>
    </header>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
</body>
```
* react codes added to root element but we add header directly in index.html

### assets vs public folder 
* public folder are publicly available but files in assets files are private 

### update value based on old state 
* this is wrong in react because this state update is not perform instantly and it schedule it for later
* in example bellow the out put is not as expected  
```js
    // init value is false
    function handleClick(){
        setIsEditing(!isEditing);//schedule a state update to true
        setIsEditing(!isEditing);//see current value that is true and schedule to true instead of false
    }
```
* use arrow function to run instantly and update value 
```js
function handleClick(){
    setIsEditing(editing=>!editing);//update to true immediately 
    setIsEditing(editing=>!editing);//update to false immediately 
}
```
### defaultValue vs value in input 
* when we use value user cant override the value inside of the input 
* with defaultValue user can override the value inside of the input 

### two way binding :
* Two-way binding in React input means that the input field's value is synced with the component's state, allowing the state to update when the input changes and vice versa.
```js
const [value, setValue] = useState('');
return (
    // the value inside of input saved inside of event.target.value
    <input value={value} onChange={(e) => setValue(e.target.value)} />
);
```