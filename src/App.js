import React, { useState, useEffect } from 'react';
import IngredientInput from './components/IngredientInput.js';
import IngredientDisplay from './components/IngredientDisplay.js';
import RecipeResults from './components/RecipeResults';
import './App.css';

function App() {
	const [ingredientList, setIngredientList] = useState([]);

	const [searchIngredient, setSearchIngredient] = useState('');

	const [recipeResults, setRecipeResults] = useState([]);

	const searchOptions = {
		key: process.env.REACT_APP_EDAMAM_KEY,
		id: process.env.REACT_APP_EDAMAM_ID,
		api: 'https://api.edamam.com/search?',
		ingredient: 'input.value',
	};

	function getRecipeDetails() {
		// const url = `${searchOptions.api}q=${searchOptions.ingredient}&app_id=${searchOptions.id}&app_key=${searchOptions.key}`;

		const url =
			'https://api.edamam.com/search?q=chicken&app_id=8bab9160&app_key=9dd30ada650f82d0e912e3323aa7c2be';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				set;
			});
	}

	return (
		<div>
			<h1>Clear Your Fridge!</h1>
			<IngredientInput ingredientList={ingredientList} />
			<RecipeResults />
		</div>
	);
}

export default App;
