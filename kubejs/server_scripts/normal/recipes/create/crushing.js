ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/crushing_wheels/';

    let recipes = [
        {
            ingredients: [{ tag: `forge:ores/netherite`, count: 1 }],
            processingTime: 480,
            results: [
                { item: 'mekanism:dirty_netherite_scrap' },
                { item: 'mekanism:dirty_netherite_scrap', chance: 0.25 },
                { item: 'minecraft:ancient_debris', chance: 0.5 }
            ],
            id: `${id_prefix}crushed_netherite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
