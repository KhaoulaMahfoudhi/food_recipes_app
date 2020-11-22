import React, {useState} from "react";
import RecipeCards from "../RecipeCard/RecipeCard";
import {RecipeSearch} from "../search/RecipeSearch";
import {AddRecipe} from "../addRecipe/AddRecipe";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../search/search.css"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const[recipe,setRecipe] =useState(recipes);
  const [nameSearch, setNameSearch] = useState("");
  const addRecipe = (newRecipe) => {
    setRecipe([...recipe, newRecipe]);
  };
  
  return (
    <div className="UserList">
<div>
<RecipeSearch
      setNameSearch={setNameSearch}
      />
</div>
      
      {recipes
      
      .filter(
        (recipe) =>
          recipe.recipe.label.toLowerCase().includes(nameSearch.toLowerCase())
      )
      .map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <RecipeCards 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients= {recipe.recipe.ingredients}
          />
          </Link>
      ))}
      <div>
      <AddRecipe addRecipe={addRecipe} />
      </div>
    </div>
  );
};

export default Recipes;
