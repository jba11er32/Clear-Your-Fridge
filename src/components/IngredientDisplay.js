import React from 'react';

const IngredientDisplay = ({ ingredientList }) => {
	return (
		<div className='list'>
			<h2>Ingredient: </h2>
			<ul>
				<li>{ingredientList}</li>
			</ul>
		</div>
	);
};

export default IngredientDisplay;
