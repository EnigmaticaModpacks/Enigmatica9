ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/pulverizer/';

    const recipes = [
        {
            ingredient: { tag: 'forge:gems/coal' },
            result: [{ item: 'emendatusenigmatica:coal_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}coal_dust`
        },
        {
            ingredient: { tag: 'forge:gems/dimensional' },
            result: [{ item: 'emendatusenigmatica:dimensional_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}dimensional_dust`
        },
        {
            ingredient: { tag: 'forge:ores/netherite' },
            result: [{ item: 'mekanism:dirty_netherite_scrap', count: 1, chance: 1 }],
            energy: 4000,
            id: `${id_prefix}netherite_scrap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        event.custom(recipe).id(recipe.id);
    });
});
