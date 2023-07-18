ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/haunting/';
    const recipes = [
        {
            inputs: ['supplementaries:sconce'],
            outputs: [{ item: 'supplementaries:sconce_soul' }],
            id: `supplementaries:integration/sconce_haunting`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
