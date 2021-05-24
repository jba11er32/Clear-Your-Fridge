import React, { useState } from 'react';
import IngredientInput from './components/IngredientInput.js';
import IngredientDisplay from './components/IngredientDisplay.js';
import RecipeResults from './components/RecipeResults';
import './App.css';

function App() {
	// Stored ingredients in a list
	const [ingredientList, setIngredientList] = useState('');

	// the ingredient input by the user
	const [searchIngredient, setSearchIngredient] = useState('');

	// the list of recipes that displays on page from users
	const [recipeResults, setRecipeResults] = useState([]);

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	getRecipeDetails(searchIngredient);
	// 	// setSearchIngredient('');
	// }

	return (
		<div>
			<h1>Clear Your Fridge!</h1>
			<IngredientInput
				// handleSubmit={handleSubmit}
				searchIngredient={searchIngredient}
				setIngredientList={setIngredientList}
				setSearchIngredient={setSearchIngredient}
			/>
			<IngredientDisplay ingredientList={ingredientList} />
			<RecipeResults
				recipeResults={recipeResults}
				ingredientList={ingredientList}
				setRecipeResults={setRecipeResults}
			/>
		</div>
	);
}

export default App;
