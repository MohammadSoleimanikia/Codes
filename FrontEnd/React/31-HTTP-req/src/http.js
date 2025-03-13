export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch places");
  }
  return resData.places;
}

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