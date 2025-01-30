# Updating UI (useState)

## Wrong way to update UI:update the UI with regular variable 

We can't change the UI directly.

```JS
var dynamicContent='';
function App() {
  function handleSelect(selectedButton) {
    // change var directly
    dynamicContent=selectedButton
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          // using var 
          {dynamicContent}
        </section>
      </main>
    </div>
  );
}
```
* the variable is updated but react don't update the app to display changes
* by default react will only execute a component function once .

## useState 
* this is a react hook 
* react hooks are simple functions 
* must only called inside of the react component functions or inside of custom react hooks

### usage 

1. import in app.jsx
```js
import {useState} from 'react'
```
2. call them inside of component functions
```JS
// argument is tha initial value
// return value is an array that contains two element
const stateArray =useState('please click a button');
// we can use var destructuring to store into two separate values
// first is variable and second is a function that update the var
const [selectedTopic,setSelectedTopic] =useState('please click a button');
```
3. full example:

```JSX
function App() {
  // define var by useState
  const [selectedTopic,setSelectedTopic] =useState('please click a button');
  function handleSelect(selectedButton){
    // update var via useState
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu> 
            <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect('JSX')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('Props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('State')}}>State</TabButton>
          </menu>
          //display variable created by useState
          {selectedTopic}
        </section>
      </main>
    </div>
```

## important notes
* don't use them outside of a component function 
```js
// correct way
function App(){
  const [val,setVal]=useState
}
```

```js
// wrong way
const [val,setVal]=useState
function App(){
}
```
* only call them on top level e.x:don't use them inside of an if statement
```JS
// correct way
function App(){
  const [val,setVal]=useState
}
```
```JS
// wrong way
function App(){
  if(condition){
    const [val,setVal]=useState
  }
}
```
* every time a setVal function updated react again render the DOM from root to that element that contain the Val
* in app.jsx we used more complicated example pf using useState 