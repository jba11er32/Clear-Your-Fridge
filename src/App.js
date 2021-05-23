import React, { useState, useEffect } from 'react';
import IngredientInput from './components/IngredientInput.js';
import IngredientDisplay from './components/IngredientDisplay.js';
import RecipeResults from './components/RecipeResults';
import './App.css';

function App() {
	// Stored ingredients in a list
	const [ingredientList, setIngredientList] = useState([]);

	// the ingredient input by the user
	const [searchIngredient, setSearchIngredient] = useState('chicken');

	// the list of recipes that displays on page from users
	const [recipeResults, setRecipeResults] = useState([]);

	const searchOptions = {
		key: process.env.REACT_APP_EDAMAM_KEY,
		id: process.env.REACT_APP_EDAMAM_ID,
		api: 'https://api.edamam.com/search?',
		ingredient: 'input.value',
	};

	useEffect(() => {
		getRecipeDetails(searchIngredient);
	}, []);

	function handleChange(event) {
		setIngredientList();
	}

	function handleSubmit(event) {
		event.preventDefault();
		getRecipeDetails(searchIngredient);
	}

	function getRecipeDetails() {
		const url = `${searchOptions.api}q=${searchOptions.ingredient}&app_id=${searchOptions.id}&app_key=${searchOptions.key}`;

		// const url =
		// 	'https://api.edamam.com/search?q=chicken&app_id=8bab9160&app_key=9dd30ada650f82d0e912e3323aa7c2be';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				setRecipeResults(res.data);
				setSearchIngredient('');
			});
	}

	return (
		<div>
			<h1>Clear Your Fridge!</h1>
			<IngredientInput handleSubmit={handleSubmit} />
			<IngredientDisplay ingredientList={ingredientList} />
			<RecipeResults recipeResults={recipeResults} />
		</div>
	);
}

export default App;
