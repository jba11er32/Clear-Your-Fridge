import React from 'react';

const Recipe = ({ recipe: { recipe } }) => {
	// recipe:
	// calories: 2638.8251983480804
	// cautions: ["Sulfites"]
	// cuisineType: ["french"]
	// dietLabels: ["Low-Carb"]
	// digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
	// dishType: ["main course"]
	// healthLabels: (22) ["Sugar-Conscious", "Kidney-Friendly", "Keto-Friendly", "Dairy-Free", "Gluten-Free", "Wheat-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free", "Pork-Free", "Red-Meat-Free", "Celery-Free", "Mustard-Free", "Sesame-Free", "Lupine-Free", "Mollusk-Free", "Alcohol-Free", "Kosher", "Immuno-Supportive"]
	// image: "https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg"
	// ingredientLines: (5) ["1 whrecipeole chicken, about 3-4 pounds", "-- Salt and fresh-ground pepper, to taste", "3 to 4 sprigs thyme, or other herbs", "-- Olive oil, to taste", "-- Chicken stock (optional)"]
	// ingredients: (5) [{…}, {…}, {…}, {…}, {…}]
	// label: "Roast Chicken"
	// mealType: ["lunch/dinner"]
	// shareAs: "http://www.edamam.com/recipe/roast-chicken-690c3797b4f56fc1e119c14096d651c5/chicken"
	// source: "San Francisco Gate"
	// totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
	// totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
	// totalTime: 0
	// totalWeight: 1947.9257318387613
	// uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_690c3797b4f56fc1e119c14096d651c5"
	// url: "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs"
	// yield: 10

	return (
		<div>
			<img
				src='https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg'
				alt=''
			/>
			<h2>{recipe.label}</h2>
			<ul>
				<li>1 whole chicken, about 3-4 pounds</li>
				<li>--Salt and fresh-ground pepper, to taste</li>
				<li>3 to 4 sprigs thyme, or other herbs</li>
				<li>-- Olive oil, to taste</li>
				<li>-- Chicken stock (optional)</li>
			</ul>
			<p>
				For full recipe:
				http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs
			</p>
		</div>
	);
};

export default Recipe;
