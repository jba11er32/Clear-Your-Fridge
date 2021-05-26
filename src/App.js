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

	return (
		<div className='mainGrid'>
			<header>
				<div className='title'>
					<h1>Clear Your Fridge!</h1>
				</div>
				<div>
					<h3>
						Have any leftover ingredients in your fridge? Clear them from your
						fridge by cooking up a recipe! Type in the ingredient you want to
						use below and some recipes will appear!
					</h3>
				</div>
				<div className='form'>
					<IngredientInput
						searchIngredient={searchIngredient}
						setIngredientList={setIngredientList}
						setSearchIngredient={setSearchIngredient}
					/>
				</div>
			</header>
			<div className='ingredients'>
				<IngredientDisplay ingredientList={ingredientList} />
			</div>
			<div>
				<RecipeResults
					recipeResults={recipeResults}
					ingredientList={ingredientList}
					setRecipeResults={setRecipeResults}
				/>
			</div>
		</div>
	);
}

export default App;
