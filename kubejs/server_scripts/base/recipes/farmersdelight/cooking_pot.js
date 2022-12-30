ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: ['hexerei:animal_fat', 'hexerei:animal_fat', 'hexerei:animal_fat', 'hexerei:animal_fat'],
            output: 'occultism:tallow',
            count: 1,
            cookingTime: 200,
            id: `${id_prefix}tallow`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = { item: recipe.output, count: recipe.count };
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
