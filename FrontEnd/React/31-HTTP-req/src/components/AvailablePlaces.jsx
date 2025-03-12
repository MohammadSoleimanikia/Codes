import { useState,useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  // we start with empty array as initial value because getting data from back end is a asynchronous task
  const [availablePlaces,setAvailablePlaces] = useState([]);
  // Send HTTP request using fetch function we can't use 
  useEffect(()=>{
    fetch('http://localhost:3000/places').then((response)=>{
      return response.json();
    })
    .then((resData)=>{
      setAvailablePlaces(resData.places)
    })
  },[])
  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
