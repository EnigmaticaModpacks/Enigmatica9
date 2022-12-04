ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer/';

    const recipes = [
        // {
        //     input: '#minecraft:logs',
        //     outputs: [{ item: sawdust, count: 8 }],
        //     energy: 1000,
        //     id: `${id_prefix}sawdust_from_logs`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
