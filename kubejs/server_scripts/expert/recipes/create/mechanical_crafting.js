ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/mechanical_crafting/';

    const recipes = [
        {
            pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
            key: {
                A: { tag: 'pneumaticcraft:compressed_stone' },
                P: { tag: 'forge:treated_wood' },
                S: { item: 'create:encased_chain_drive' }
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
                R: { tag: 'forge:gears/compressed_iron' },
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
