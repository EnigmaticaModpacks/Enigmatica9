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
                { item: 'occultism:iesnium_dust', count: 3 }
            ],
            energy: 8000,
            id: `${id_prefix}iesnium_lithium_salt`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
