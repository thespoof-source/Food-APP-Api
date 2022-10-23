import React from "react";
import "./recipecard.css";
const RecipeCard = ({ idMeal, strMeal, strCategory, strMealThumb }) => {
  return (
    <div className="recipe-card">
      <div className="card-body">
        <img className="card-image" src={strMealThumb} alt={strMeal} />
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <button className="button">
          <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">
            Instruction
          </a>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
