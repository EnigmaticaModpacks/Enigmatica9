ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pyrolyzer/';

    const recipes = [
        {
            ingredient: { tag: 'forge:gems/coal' },
            result: [
                { item: AlmostUnified.getPreferredItemForTag('forge:gems/coal_coke').getId() },
                { item: 'thermal:tar', chance: 0.25 },
                { fluid: 'immersiveengineering:creosote', amount: 500 }
            ],
            energy: 4000,
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_coal'
        },
        {
            ingredient: { tag: 'minecraft:logs' },
            result: [{ item: 'minecraft:charcoal' }, { fluid: 'immersiveengineering:creosote', amount: 250 }],
            energy: 4000,
            experience: 0.15,
            id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'
        },
        {
            ingredient: { tag: 'forge:storage_blocks/coal' },
            result: [
                { item: 'emendatusenigmatica:coal_coke_block' },
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
        event.custom(recipe).id(recipe.id);
    });
});
