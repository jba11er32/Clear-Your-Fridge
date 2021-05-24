import React, { useEffect } from 'react';
import Recipe from './Recipe.js';

const RecipeResults = ({ recipeResults, setRecipeResults, ingredientList }) => {
	useEffect(() => {
		const searchOptions = {
			key: process.env.REACT_APP_EDAMAM_KEY,
			id: process.env.REACT_APP_EDAMAM_ID,
			api: 'https://api.edamam.com/search?',
			ingredient: ingredientList,
		};

		const url = `${searchOptions.api}q=${searchOptions.ingredient}&app_id=${searchOptions.id}&app_key=${searchOptions.key}`;

		if (ingredientList) {
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					return setRecipeResults(res.hits);
				});
		}
	}, [ingredientList]);

	return (
		<div>
			{recipeResults.map((recipe) => {
				return <Recipe key={recipe.recipe.url} recipe={recipe} />;
			})}
		</div>
	);
};

export default RecipeResults;
