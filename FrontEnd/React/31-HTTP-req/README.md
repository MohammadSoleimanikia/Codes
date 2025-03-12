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

## access 