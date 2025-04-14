import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
// define outside because it doesn't recreated each time for component so useHttp send a request on loop
const requestConfig={};
export default function Meals() {
  // use custom hook
  const {data:loadedMeals,isLoading,error}=useHttp('http://localhost:3000/meals',requestConfig,[])
  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }
  if(error){
    return <Error title="failed to fetch meals" message={error}/>
  }
  return (
    <>
      <ul id="meals">
        {loadedMeals.map((item) => {
          return <MealItem key={item.id} meal={item}/>
        })}
      </ul>
    </>
  );
}
