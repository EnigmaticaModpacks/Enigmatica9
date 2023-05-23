ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/mechanical_crafting/';

    const recipes = [
        {
            pattern: ['  A  ', ' BSB ', 'BSRSB', ' BCB '],
            key: {
                A: { tag: 'forge:ingots/andesite' },
                C: { item: 'createaddition:capacitor' },
                B: { tag: 'forge:plates/brass' },
                R: { tag: 'forge:rods/iron' },
                S: { item: 'immersiveengineering:coil_lv' }
            },
            result: { item: 'createaddition:electric_motor' },
            id: `${id_prefix}electric_motor`
        },
        {
            pattern: ['  A  ', ' ISI ', 'ISRSI', ' ICI '],
            key: {
                C: { item: 'createaddition:capacitor' },
                I: { tag: 'forge:plates/iron' },
                R: { tag: 'forge:rods/iron' },
                S: { item: 'immersiveengineering:coil_lv' },
                A: { tag: 'forge:ingots/andesite' }
            },
            result: { item: 'createaddition:alternator' },
            id: `${id_prefix}alternator`
        },
        {
            pattern: ['SSS', ' A ', 'CBC', 'PEP'],
            key: {
                A: { tag: 'forge:ingots/andesite' },
                C: { item: 'createaddition:capacitor' },
                P: { tag: 'forge:plates/brass' },
                B: { item: 'create:brass_casing' },
                S: { item: 'immersiveengineering:coil_lv' },
                E: { item: 'create:electron_tube' }
            },
            result: { item: 'createaddition:tesla_coil' },
            id: `${id_prefix}tesla_coil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mechanical_crafting';
        event.custom(recipe).id(recipe.id);
    });
});
