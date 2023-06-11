ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/chiller/';

    const recipes = [
        {
            ingredients: [{ item: 'thermal:chiller_ingot_cast' }, { fluid_tag: 'forge:tallow', amount: 250 }],
            result: [{ item: 'occultism:tallow' }],
            energy: 500,
            id: `${id_prefix}tallow`
        },
        {
            ingredients: [{ fluid_tag: 'forge:honey', amount: 1000 }],
            result: [{ item: 'minecraft:honey_block' }],
            energy: 2000,
            id: `thermal:machines/chiller/chiller_honey_to_honey_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:chiller';
        event.custom(recipe).id(recipe.id);
    });
});
