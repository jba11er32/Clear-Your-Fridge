import React from 'react';

const IngredientDisplay = ({ ingredientList }) => {
	return (
		<div>
			<h2>Ingredients: </h2>
			<ul>
				<li>{ingredientList}</li>
			</ul>
		</div>
	);
};

export default IngredientDisplay;
