ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/refinery/';

    const recipes = [
        {
            type: 'thermal:refinery',
            input: { fluid: 'industrialforegoing:latex', amount: 900 },
            outputs: [
                { fluid: 'minecraft:water', amount: 100 },
                { item: 'thermal:rubber', chance: 1.0 }
            ],
            energy: 6000,
            id: `${id_prefix}rubber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:refinery';
        recipe.ingredient = recipe.input;
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
