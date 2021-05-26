import React from 'react';

const Recipe = ({ recipe: { recipe } }) => {
	return (
		<div className='recipes'>
			<img src={recipe.image} alt={recipe.label} className='img' />
			<h2>{recipe.label}</h2>
			<ul>
				{recipe.ingredientLines.map((ingredient, i) => {
					return <li key={ingredient + i}>{ingredient}</li>;
				})}
			</ul>
			<p>
				For full recipe, click{' '}
				<a href={recipe.url} target='blank'>
					here
				</a>
				!
			</p>
		</div>
	);
};

export default Recipe;
