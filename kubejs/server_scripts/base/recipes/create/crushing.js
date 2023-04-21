ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/crushing/';

    const recipes = [];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'create:crushing',
                ingredients: [Ingredient.of(recipe.input).toJson()],
                results: recipe.outputs.map((output) => Item.of(output).toJson()),
                processingTime: recipe.duration
            })
            .id(recipe.id);
    });
});
