# output list data dynamically 

## static way 
```js
<CoreConcept {...CORE_CONCEPTS[0]}/>
<CoreConcept {...CORE_CONCEPTS[1]}/>
<CoreConcept {...CORE_CONCEPTS[2]}/>
<CoreConcept {...CORE_CONCEPTS[3]}/>
```
### cons
* we have to add items manually
* if one item removed from out data the empty container remains and we have to remove items manually 

## automate way 
* we can use map for mapping items of data array 
* we should add key prop that should be unique too for react to update and render list efficient
```js
<ul>
    {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item}/>)}
</ul>
```
### why using key is important in react 
1. Identify each item uniquely 🔍
React needs a way to recognize each item in a list so it knows which ones have changed, been added, or removed.
The key prop acts like a unique ID for each element.
* If an item is removed, React removes only that item instead of re-rendering the entire list.
* If an item’s position changes, React doesn’t mistakenly swap elements.

2. Optimize re-renders 🚀
React compares the previous list with the new list to see what changed.
The key helps React figure this out faster instead of re-rendering everything.

3. Prevent unnecessary re-renders ⚡
If React doesn’t have unique keys, it may re-use the wrong DOM elements, causing weird UI bugs.

###  Example: Using key correctly
```jsx
const users = ["Mohammad", "akbar", "Jomong"];

const UserList = () => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={user}>{user}</li> // GOOD: Using a unique value (like an ID)
      ))}
    </ul>
  );
};
```

###  Bad Example: Using index as key
```jsx
const UserList = () => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li> // BAD: Using index as key
      ))}
    </ul>
  );
};
```
#### why is this bad?
* If the order of items changes, React may mix up the elements.
* If an item is added/removed, React may reuse the wrong DOM elements.
* This can cause UI bugs and bad performance.

### using key for resetting components
If you want to reset a component’s state or force it to re-mount, the best way is by changing its key prop.
When React detects a new key, it destroys the old component and creates a fresh one.

#### Example: Resetting form
```jsx
import { useState } from "react";

const Form = () => {
  const [key, setKey] = useState(0); // Unique key to force re-mount

  return (
    <div>
      <button onClick={() => setKey((prev) => prev + 1)}>Reset Form</button>
      <UserForm key={key} />
    </div>
  );
};

const UserForm = () => {
  const [name, setName] = useState("");
  return (
    <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};
export default Form;
```