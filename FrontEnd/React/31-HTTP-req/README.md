# Sending HTTP requests 

## why handling and connecting to a database with react is wrong :
* React codes can be accessed by user for example : credentials to access a data base
* not all operations can be performed in the browser :can't easily access a file system

* our App:
in this app we use a dummy backend to fetch data from that 

## fetch Data from backend 

* send HTTP request from React to the end point via fetch function 

```jsx
fetch('http://localhost:3000/places').then((response)=>{
    // convert response to json
    return response.json();
  })
  .then((resData)=>{
    // use places key to get places data
    setAvailablePlaces(resData.places)
  })
```
* `IMPORTANT`: this method has a problem , each time the component executed this fetch function re Executed 

## correct way :useEffect
```jsx
 useEffect(()=>{
    fetch('http://localhost:3000/places').then((response)=>{
      return response.json();
    })
    .then((resData)=>{
      setAvailablePlaces(resData.places)
    })
  },[])
```

## better way :using async await :
with using async and await we can make this code shorter
1. add another function inside of the useEffect function and use async on that function 
2. call that function immediately after defining 

```jsx
useEffect(() => {
    async function fetchPlaces() {
      const response=await fetch('http://localhost:3000/places');
      const resData=await response.json();
      setAvailablePlaces(resData.places);
    }
    fetchPlaces()
  }, []);
```

## handling loading state :
* add isLoading and loadingText props to places component
```jsx
const [isFetching,setIsFetching]= useState(false)
//  before fetching we set isFetching true and after that we set that to false
 useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response=await fetch('http://localhost:3000/places');
      const resData=await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false)
    }

<Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
```
* use these props in places component 
```jsx
<section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
            // some codes
        </ul>
      )}
    </section>
```

## handling http error
when we sending HTTP requests we may face to an error. types of errors 
1. failing sending request for example the network connection crashed 
2. sending successfully to backend but something wrong in backend 

### error response:
we can check if we have error with `response.ok`
```jsx
// add component to show Error
import Error from "./Error.jsx"
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching]= useState(false);
  // define empty state for error
  const [error,setError]=useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      // 1. use try catch 2. use !response.ok to catch errors
      try {
        const response=await fetch('http://localhost:3000/places');
        const resData=await response.json();
        if(!response.ok){
          throw new Error("failed to fetch places")
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        // change error state and use a text as fallback text
        setError({message:error.message || 'Could not fetch places, please try again later'});
      }
      setIsFetching(false)
    }
    fetchPlaces()
  }, []);
// if we have error we return it instead of normal content
  if(error){
    return <Error title="An error occurred" message={error.message}/>
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
```
### extracting code:
we can extract fetch codes into another utility file named `http.js`
```js
export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch places");
  }
  return resData.places;
}
```
and use this function instead of these codes 
```jsx
import {fetchAvailablePlaces} from "../http.js"
 const places=await fetchAvailablePlaces();

``` 

## sending data with POST request using fetch method

utility function 

```jsx
export async function updateUserPlaces(places){
    // we should set method property 
    const response=await fetch("http://localhost:3000/user-places",{
        method:'PUT',
        // body should be attachable. arrays are not so we convert array to json format
        body:JSON.stringify({places:places}),
        // set header and content-type to inform the backend that the data attached will be JSON
        headers:{ 
            "Content-Type": "application/json"
        }
    });
    const resData= await response.json();
    if(!response.ok){
        throw new Error('Failed to update user data')
    }
    return resData.message;
}
```

usage of function 

```jsx
async function handleSelectPlace(selectedPlace) {
    //some codes to update state (full in app.jsx)
    try {
      await updateUserPlaces([selectedPlace,...userPlaces]);
    } catch (error) {
      
    }
    
  }

```
in backend we handle data and add it to JSON file 

```JSX
app.put('/user-places', async (req, res) => {
  const places = req.body.places;

  await fs.writeFile('./data/user-places.json', JSON.stringify(places));

  res.status(200).json({ message: 'User places updated!' });
});
```

### optimistic updating 
in our case we updating our state before sending the request 

```jsx
async function handleSelectPlace(selectedPlace) {
    //some codes to update state (full in app.jsx)
    try {
      // sending request
      await updateUserPlaces([selectedPlace,...userPlaces]);
    } catch (error) { 
    }
  }
```
so when we pick a place UI changes instantly and request sended behind the scene
`warning`we should handle sending the request error 
* we handle this issue by setting the values that updated to previous values (not the new value : using function to get new)
```jsx
async function handleSelectPlace(selectedPlace) {
    //some codes to update state (full in app.jsx)
    try {
      // sending request
      await updateUserPlaces([selectedPlace,...userPlaces]);
    } catch (error) { 
      // reset the state to before state updating
      setUserPlaces(userPlaces)
    }
  }
```
## Deleting data via DELETE HTTP requests 