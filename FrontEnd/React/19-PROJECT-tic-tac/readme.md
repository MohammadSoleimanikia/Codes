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

### rendering multi dimension list 
```js
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  
  export default function GameBoard() {
    return (
      <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }
```

### update object state immutably 
* In React, it's important to update object state immutably to ensure that the state changes are detected correctly and the components re-render as expected.
* Instead of modifying the existing state object directly, create a new object with the updated values.
* Use the spread operator (`...`) to copy the existing state and then override the specific properties that need to be updated.
```js
const [state, setState] = useState({ name: 'John', age: 30 });

function updateName(newName) {
    setState(prevState => ({
        ...prevState,
        name: newName
    }));
}
```
* This approach ensures that the state is updated immutably, triggering a re-render with the new state.

* If you don't update the object state immutably in React, several issues can arise:

1. State Change Detection: React relies on detecting changes in state to determine when to re-render components. If you mutate the state directly, React may not detect the change, leading to components not re-rendering as expected.

2. Unexpected Behavior: Directly mutating the state can lead to unexpected behavior and bugs that are difficult to trace. This is because other parts of your application might be relying on the previous state, which has now been altered.

3. Debugging Difficulties: Immutable updates make it easier to track state changes over time, which is crucial for debugging. Direct mutations can obscure the history of state changes, making it harder to understand how the state evolved.


### lift state up 
problem :
* if two component used the same state we should lift the state up
how to:
* lift the state up to the closest ancestor component 
