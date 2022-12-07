ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pyrolyzer/';

    const recipes = [
        {
            input: Ingredient.of('#forge:gems/coal'),
            outputs: [
                { item: 'thermal:coal_coke' },
                { item: 'thermal:tar', chance: 0.25 },
                { fluid: 'immersiveengineering:creosote', amount: 500 }
            ],
            energy: 4000,
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_coal'
        },
        {
            input: Ingredient.of('#minecraft:logs'),
            outputs: [{ item: 'minecraft:charcoal' }, { fluid: 'immersiveengineering:creosote', amount: 250 }],
            energy: 4000,
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'
        },
        {
            input: Ingredient.of('#forge:storage_blocks/coal'),
            outputs: [
                { item: 'thermal:coal_coke_block' },
                { item: 'thermal:tar', chance: 0.25 * 9 },
                { fluid: 'immersiveengineering:creosote', amount: 5000 }
            ],
            energy: 4000 * 8,
            experience: 0.15 * 9,
            id: `${id_prefix}coal_coke_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pyrolyzer';
        recipe.ingredient = recipe.input.toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
