import React from 'react';
import IngredientInput from './components/IngredientInput.js';
import IngredientDisplay from './components/IngredientDisplay.js';
import RecipeResults from './components/RecipeResults';
import './App.css';

function App() {
	const url =
		'https://api.edamam.com/search?q=chicken&app_id=8bab9160&app_key=9dd30ada650f82d0e912e3323aa7c2be';
	return (
		<div>
			<h1>Clear Your Fridge!</h1>
			<IngredientInput />
			<IngredientDisplay />
			<RecipeResults />
		</div>
	);
}

export default App;
