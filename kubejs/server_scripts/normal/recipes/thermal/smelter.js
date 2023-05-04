ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/smelter/';

    const recipes = [
        {
            ingredients: [{ item: 'mekanism:dirty_netherite_scrap', count: 1 }],
            result: [
                { item: 'minecraft:netherite_scrap', chance: 0.9 },
                { item: 'emendatusenigmatica:gold_nugget', chance: 0.15 }
            ],
            energy: 10000,
            id: `${id_prefix}netherite_scrap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
