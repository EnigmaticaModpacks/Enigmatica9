ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mechanical_crafting/';
    const recipes = [
        // {
        //     pattern: ['  A  ', ' BSB ', 'BSRSB', ' BCB '],
        //     key: {
        //         A: { item: 'create:andesite_alloy' },
        //         C: { item: 'createaddition:capacitor' },
        //         B: { tag: 'forge:plates/brass' },
        //         R: { tag: 'forge:rods/iron' },
        //         S: { item: 'immersiveengineering:coil_lv' }
        //     },
        //     result: { item: 'createaddition:electric_motor' },
        //     id: `createaddition:mechanical_crafting/electric_motor`
        // },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mechanical_crafting';
        event.custom(recipe).id(recipe.id);
    });
});
