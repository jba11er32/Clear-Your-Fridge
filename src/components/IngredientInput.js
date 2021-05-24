import React from 'react';

const IngredientInput = ({ setIngredientList }) => {
	function handleChange(event) {
		console.log(event);
		setIngredientList(event.target.value);
	}
	return (
		<div>
			Ingredient: <input type='text' onChange={handleChange} />
		</div>
	);
};

export default IngredientInput;
