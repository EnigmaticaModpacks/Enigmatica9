ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/emptying/';
    const recipes = [
        {
            outputs: [{ item: 'minecraft:glass_bottle' }, { amount: 250, fluid: 'the_bumblezone:honey_fluid_still' }],
            inputs: [{ item: 'minecraft:honey_bottle' }],
            id: `create:emptying/honey_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:emptying';
        recipe.ingredients = recipe.inputs;
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
