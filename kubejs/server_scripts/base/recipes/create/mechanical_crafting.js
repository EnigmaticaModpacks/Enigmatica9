ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mechanical_crafting/';
    const recipes = [
        {
            pattern: ['  A  ', ' BSB ', 'BSRSB', ' BCB '],
            key: {
                A: { item: 'create:andesite_alloy' },
                C: { item: 'createaddition:capacitor' },
                B: { tag: 'forge:plates/brass' },
                R: { tag: 'forge:rods/iron' },
                S: { item: 'immersiveengineering:coil_lv' }
            },
            result: { item: 'createaddition:electric_motor' },
            id: `createaddition:mechanical_crafting/electric_motor`
        },
        {
            pattern: ['  A  ', ' ISI ', 'ISRSI', ' ICI '],
            key: {
                C: { item: 'createaddition:capacitor' },
                I: { tag: 'forge:plates/iron' },
                R: { tag: 'forge:rods/iron' },
                S: { item: 'immersiveengineering:coil_lv' },
                A: { item: 'create:andesite_alloy' }
            },
            result: { item: 'createaddition:alternator' },
            id: `createaddition:mechanical_crafting/alternator`
        },
        {
            pattern: ['SSS', ' A ', 'CBC', 'PEP'],
            key: {
                A: { item: 'create:andesite_alloy' },
                C: { item: 'createaddition:capacitor' },
                P: { tag: 'forge:plates/brass' },
                B: { item: 'create:brass_casing' },
                S: { item: 'immersiveengineering:coil_lv' },
                E: { item: 'create:electron_tube' }
            },
            result: { item: 'createaddition:tesla_coil' },
            id: `createaddition:mechanical_crafting/tesla_coil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mechanical_crafting';
        event.custom(recipe).id(recipe.id);
    });
});
