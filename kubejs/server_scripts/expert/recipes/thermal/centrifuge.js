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
        },
        {
            ingredient: Item.of('minecraft:lingering_potion', { Potion: 'apotheosis:strong_knowledge' })
                .weakNBT()
                .toJson(),
            result: [{ item: 'kubejs:mote_of_wisdom', count: 3 }],
            energy: 1000,
            id: `${id_prefix}mote_of_wisdom`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
