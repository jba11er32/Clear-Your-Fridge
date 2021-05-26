import React, { useState } from 'react';

const IngredientInput = ({ setIngredientList }) => {
	const [ingredient, setIngredient] = useState('');

	function handleChange(event) {
		setIngredient(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIngredientList(ingredient);
		setIngredient('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Ingredient:{' '}
				<input value={ingredient} type='text' onChange={handleChange} />
			</label>
			<button type='submit'>Add Ingredient</button>
		</form>
	);
};

export default IngredientInput;
