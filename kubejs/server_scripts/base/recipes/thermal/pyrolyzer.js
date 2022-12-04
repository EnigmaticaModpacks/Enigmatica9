ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pyrolyzer/';

    const recipes = [
        {
            input: Ingredient.of('#forge:gems/coal'),
            outputs: [
                { item: 'thermal:coal_coke' },
                { item: 'thermal:tar', chance: 0.25 },
                { fluid: 'immersiveengineering:creosote', amount: 250 }
            ],
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_coal'
        },
        {
            input: Ingredient.of('#minecraft:logs'),
            outputs: [{ item: 'minecraft:charcoal' }, { fluid: 'immersiveengineering:creosote', amount: 125 }],
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pyrolyzer';
        recipe.ingredient = recipe.input.toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
