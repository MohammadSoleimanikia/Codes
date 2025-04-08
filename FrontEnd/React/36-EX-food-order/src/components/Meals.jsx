import MealItem from "./MealItem";
import { useEffect, useState } from "react";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    // using another function to use async 
    async function fetchData() {
        // http req to backend
      const res = await fetch("http://localhost:3000/meals");
      const resData = await res.json();
      setMeals(resData);
    }
    fetchData();
  }, []);
  return (
    <>
      <ul id="meals">
        {meals.map((item) => {
          return <MealItem key={item.id} meal={item}/>
        })}
      </ul>
    </>
  );
}
