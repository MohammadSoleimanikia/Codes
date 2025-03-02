# useEffect 
## side Effects
side effects are "tasks" that don't impact current component render cycle
for example in our app component we have a function for sorting places based on the user location 
```jsx
// getCurrentPosition is a build in browser method
navigator.geolocation.getCurrentPosition((position)=>{
    // with help of browser we get the positions and use sortedPlaces to sort places based on user loc
    const sortedPlaces=sortPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );
  });
```
this peace of code is a side effect cause 
1. this function return position after app component rendered 
2. this operations are side effects
    1. network requests 
    2. DOM manipulation 
    3. access browser API like "navigator.geolocation"

### infinite loop with this function 
we want to use this function in our UI 
in this section 
```jsx
<Places
    title="Available Places"
    places={availablePlaces}
    onSelectPlace={handleSelectPlace}
/>
```
but at start we don't have sorted places one solution is use useState for setting the value for this like this .
```jsx
const [availablePlaces,setAvailablePlaces]=useState([]);
navigator.geolocation.getCurrentPosition((position)=>{
    // with help of browser we get the positions and use sortedPlaces to sort places based on user loc
    const sortedPlaces=sortPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );

    setAvailablePlaces(sortedPlaces);
  });
```
this solution makes a problem, because this function is inside of the app component and we use useState when state updated the app component reRendered so the function reExecuted and we caught in a infinite loop

### useEffect hook :
we can use useEffect hook to solve the sideEffect problem
useEffect execute right after the execution of component function 
we should use sideEffect only where it needed because it have separate execution cycle from component function .
#### usage of useEffect 
1. import ```jsx import {useEffect} from 'react' ```
2. call useEffect
    1. first argument is a callback that wrap side effect code
    2. second argument is an array of dependency and every time after execution of component react check if this value changed or not and only reExecute if this value changed 
        * if we omit second argument react reExecute this function after every execution of App component 
        * if we add empty array [] it would run once
```jsx
useEffect(useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces=sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, [] );)
```
the idea behind the useEffect is the first argument executed after every component execution 

## not all side effects need useEffect
in our app we use another method that build in the browser that also a sideEffect (localStorage.setItem and getItem) but we should not use useEffect in this situation 
```jsx
function handleSelectPlace(id) {
    // extract prev selected id from browser storage
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    // add new id if it not already added 
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIds])
      );
    }
  }
```
1. we can't use useEffect because we are inside of the  and we can't use hooks inside of functions or if statements .
2. there is nothing wrong with executing this code here because this code get executed when the handleSelectPlaces executed
3. this code does not make an infinitive loop because we don't update a state here 

### another example of useEffect
as we know the useEffect executes after the component function 
* problem 
```jsx
const Modal = function Modal({ children,open }) {
  const dialog = useRef();
  if(open){
    dialog.current.showModal();
  }
  else{
    dialog.current.close();
  }
  return createPortal(
    <dialog className="modal" ref={dialog} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
```
in this example we use "open" prop with if statement to open or close dialog but we get error because the first time the if else statement executed the component did not rendered dialog tag yet and because of that when we call close we get error 
#### synchronize prop values 
in this problem we can use useEffect to synchronize the prop to DOM API like showModal()
because the useEffect executed after the component function we can use in this scenario 

#### effect dependency :
the dependency array in useEffect controls when the effect runs.
values 
1. Empty Dependency [] → Runs only once, when the component mounts.
    * Runs once when the component mounts.
    * Useful for fetching data, setting up event listeners, etc.
```jsx
seEffect(() => {
  console.log('Runs only once on mount');
}, []); // No dependencies
```
2. Specific Dependencies [var1, var2] → Runs when any of the dependencies change.
    * Useful for syncing state with external systems (like localStorage or APIs).
```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]); // Runs when `count` changes
```
3. No Dependency Array → Runs on every render (not recommended for most cases).

#### Modal example completed 
* it executed after the dialog element rendered and each time open value changed 
```jsx
useEffect(() => {
    if(open){
    dialog.current.showModal();
  }
  else{
    dialog.current.close();
  }
},[open]);
```


### useEffect clean up function
in this example we add timeout to confirm deletion of the place in 3 sec when deleteConfirm component opens
```jsx
// App component
<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
    <DeleteConfirmation
        onCancel={handleStopRemovePlace}
        onConfirm={handleRemovePlace}
    />
</Modal>
```

```jsx
// modal component :we add conditionally render ti children because it does not render immediately after app and modal components rendered
// we want to render it when open prop is true
<dialog className="modal" ref={dialog} onClose={onClose}>
    {open ? children :null }
</dialog>
```
```jsx
// delete Component
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  setTimeout(()=>{
    onConfirm();
  },3000);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
```
the problem in here is that when we click and open the dialog the deleteConfirmation is also opened and timer is also started but when we click on no the timer still works and even we click on no the delete confirmation done.

we can solve this problem with useEffect cleanup function 
* The cleanup function in useEffect is used to clean up side effects when a component unmounts or before the effect runs again. 
*  This helps prevent memory leaks and ensures that subscriptions, timers, or event listeners don’t cause issues.

how to use :
Inside useEffect, if you return a function, React will run that function when the component unmounts or before running the effect again (if dependencies change).
```jsx
useEffect(()=>{
    const timer=setTimeout(()=>{
      onConfirm();
    },3000); 
    // this return statement returns a function that is cleanup function 
    return ()=>{
      clearTimeout(timer)
    } 
  },[])
```
* another example of useEffect and cleanup function is used into progress bar in delete confirmation component
### function as dependency problem:
* if effect dependency was string or number and the value of that changes the effect runs again
* because functions are recreated each time the function component rendered and causes the infinite loop 
* to avoid this infinite loop we use useCallback hook 

# useCallback:
this hook used to not recreated this function every time 
1. import it 
```jsx
import {useCallback}
```
2. use as a wrapper around the function that we want to don't change 
3. add an array of dependency as second argument and we should add any prop or state value that are used inside this wrapped function 
4. this hook returns the function but not recreated on each render.
```jsx
const handleRemovePlace= useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  },[])
```