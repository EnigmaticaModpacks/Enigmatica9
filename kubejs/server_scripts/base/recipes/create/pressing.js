ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/pressing/';
    const recipes = [
        {
            inputs: [{ item: 'sushigocrafting:dried_seaweed_block' }],
            outputs: [{ item: 'sushigocrafting:nori_sheets', count: 6 }],
            id: `${id_prefix}nori_sheets`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        recipe.ingredients = recipe.inputs;
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
