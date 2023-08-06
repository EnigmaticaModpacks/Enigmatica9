ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/apotheosis/shaped/';

    const recipes = [
        {
            output: 'apotheosis:inert_trident',
            pattern: [' AA', 'CBA', 'B  '],
            key: {
                A: '#forge:rods/osmium',
                B: '#forge:rods/bronze',
                C: 'minecraft:conduit'
            },
            id: `apotheosis:inert_trident`
        },
        {
            output: 'apotheosis:heart_seashelf',
            pattern: [' C ', 'ABA', 'AAA'],
            key: {
                A: '#forge:dusts/prismarine',
                B: 'apotheosis:infused_seashelf',
                C: 'minecraft:conduit'
            },
            id: `apotheosis:heart_seashelf`
        },
        {
            output: 'apotheosis:salvaging_table',
            pattern: [' A ', 'BBB', 'CDC'],
            key: {
                A: 'apotheosis:gem_dust',
                B: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:prismarine_bricks',
                D: 'minecraft:smithing_table'
            },
            id: `apotheosis:salvaging_table`
        },
        {
            output: 'apotheosis:gem_cutting_table',
            pattern: [' A ', 'BBB', 'CDC'],
            key: {
                A: '#forge:essences/manipulation',
                B: 'pneumaticcraft:compressed_stone',
                C: '#forge:rods/ancient',
                D: 'apotheosis:gem_dust'
            },
            id: `apotheosis:gem_cutting_table`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
