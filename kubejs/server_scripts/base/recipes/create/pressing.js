ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/pressing/';

    const recipes = [
        {
            inputs: ['sushigocrafting:dried_seaweed_block'],
            outputs: ['6x sushigocrafting:nori_sheets'],
            id: `${id_prefix}nori_sheets`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.results = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
