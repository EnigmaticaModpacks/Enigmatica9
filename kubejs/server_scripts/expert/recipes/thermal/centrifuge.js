ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/centrifuge/';

    const recipes = [
        {
            ingredient: { item: 'mekanism:brine_bucket' },
            result: [
                { item: 'mekanism:dust_lithium', count: 4 },
                { item: 'emendatusenigmatica:iesnium_dirty_dust', count: 1.0 }
            ],
            energy: 8000,
            id: `${id_prefix}iesnium_lithium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
