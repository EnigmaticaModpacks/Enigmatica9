ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/filling/';

    const recipes = [
        {
            results: [{ item: 'hexerei:blood_bottle' }],
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluidTag: 'forge:blood', amount: 250 }],
            id: `${id_prefix}blood_bottle`
        },
        {
            results: [{ item: 'hexerei:quicksilver_bottle' }],
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluidTag: 'forge:quicksilver', amount: 250 }],
            id: `${id_prefix}quicksilver_bottle`
        },
        {
            results: [{ item: 'the_bumblezone:honey_compass' }],
            ingredients: [{ item: 'naturescompass:naturescompass' }, { fluidTag: 'forge:honey', amount: 250 }],
            id: `${id_prefix}honey_compass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
