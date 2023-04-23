ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/crystallizer/';

    const recipes = [
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 500 },
                { tag: 'mekanism:shards/iron', count: 3 },
                { item: 'ae2:charged_certus_quartz_crystal' }
            ],
            result: [{ item: 'emendatusenigmatica:iron_crystal', count: 1 }],
            energy: 20000,
            id: `${id_prefix}iron_crystal_from_iron_dirty_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';
        event.custom(recipe).id(recipe.id);
    });
});
