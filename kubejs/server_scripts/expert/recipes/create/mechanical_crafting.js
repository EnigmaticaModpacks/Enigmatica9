ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/mechanical_crafting/';

    const recipes = [
        {
            pattern: ['  A  ', ' BSB ', 'BSRSB', ' BCB '],
            key: {
                A: { tag: 'pneumaticcraft:compressed_stone' },
                C: { item: 'createaddition:capacitor' },
                B: { tag: 'forge:plates/brass' },
                R: { tag: 'forge:rods/iron' },
                S: { item: 'immersiveengineering:coil_lv' }
            },
            result: { item: 'createaddition:electric_motor' },
            id: `createaddition:mechanical_crafting/electric_motor`
        },
        {
            pattern: ['SSS', ' A ', 'CBC', 'PEP'],
            key: {
                A: { tag: 'pneumaticcraft:compressed_stone' },
                C: { item: 'createaddition:capacitor' },
                P: { tag: 'forge:plates/brass' },
                B: { item: 'create:brass_casing' },
                S: { item: 'immersiveengineering:coil_lv' },
                E: { item: 'create:electron_tube' }
            },
            result: { item: 'createaddition:tesla_coil' },
            id: `createaddition:mechanical_crafting/tesla_coil`
        },
        {
            pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
            key: {
                A: { tag: 'pneumaticcraft:compressed_stone' },
                P: { tag: 'minecraft:planks' },
                S: { tag: 'forge:stone' }
            },
            result: { item: 'create:crushing_wheel', count: 2 },
            acceptMirrored: false,
            id: `create:mechanical_crafting/crushing_wheel`
        },
        {
            pattern: ['LRSSS', 'CC   '],
            key: {
                C: { item: 'minecraft:copper_ingot' },
                L: { tag: 'pneumaticcraft:compressed_stone' },
                R: { item: 'create:precision_mechanism' },
                S: { item: 'create:fluid_pipe' }
            },
            result: { item: 'create:potato_cannon' },
            acceptMirrored: true,
            id: `create:mechanical_crafting/potato_cannon`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mechanical_crafting';
        event.custom(recipe).id(recipe.id);
    });
});
