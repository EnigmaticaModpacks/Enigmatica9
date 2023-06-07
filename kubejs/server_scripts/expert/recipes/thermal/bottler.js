ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/bottler/';

    const recipes = [
        {
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluid_tag: 'forge:quicksilver', amount: 250 }],
            result: [{ item: 'hexerei:quicksilver_bottle' }],
            id: `${id_prefix}quicksilver_bottle`
        },
        {
            ingredients: [{ item: 'naturescompass:naturescompass' }, { fluid_tag: 'forge:honey', amount: 250 }],
            result: [{ item: 'the_bumblezone:honey_compass' }],
            id: `${id_prefix}honey_compass`
        }
    ];

    simple_metals.forEach((metal) => {
        recipes.push({
            result: [{ item: `emendatusenigmatica:${metal}_dirty_dust`, count: 2 }],
            ingredients: [{ tag: `create:crushed_ores/${metal}` }, { fluid_tag: 'forge:sulfuric_acid', amount: 10 }],
            id: `${id_prefix}${metal}_dirty_dust_from_acid`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:bottler';
        event.custom(recipe).id(recipe.id);
    });
});
