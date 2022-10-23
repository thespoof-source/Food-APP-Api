import axios from "axios";
import "./App.css";
import RecipeCard from "./components/RecipeCard";
import Searchbar from "./components/Searchbar";
import React, { useState, useEffect } from "react";

const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      console.log(response);
      setMeals(response.data.meals);
    };
    getMeals();
  }, []);
  return (
    <div className="Container">
      <div>
        <img
          style={{ height: "20vh", display: "flex", flexDirection: "start" }}
          src="https://dynamic.brandcrowd.com/asset/logo/a9ee4b5e-a3a6-4c0a-9e24-e9b389587790/logo-search-grid-2x?v=637781767973570000&text=AZONE&colorpalette=blue"
          alt="/"
        />
      </div>
      {meals.map((meal) => {
        return (
          <RecipeCard
            idMeal={meal.idMeal}
            strCategory={meal.strCategory}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            key={meal.idMeal}
            meal={meal}
          />
        );
      })}
    </div>
  );
};

export default App;
