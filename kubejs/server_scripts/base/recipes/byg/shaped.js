ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/byg/shaped/';

    const recipes = [
        {
            output: 'byg:therium_crystal_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:therium_crystal_shard'
            },
            id: `${id_prefix}therium_crystal_block`
        },
        {
            output: '8x byg:cryptic_magma_block',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'byg:cryptic_stone',
                B: 'ars_nouveau:fire_essence'
            },
            id: `${id_prefix}cryptic_magma_block`
        },
        {
            output: 'byg:therium_lamp',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:nuggets/iron',
                B: '#forge:storage_blocks/therium'
            },
            id: 'byg:therium_lamp'
        },
        {
            output: '2x byg:chiseled_therium',
            pattern: ['A', 'A'],
            key: {
                A: '#forge:storage_blocks/therium'
            },
            id: 'byg:chiseled_therium'
        }
    ];

    const sands = ['white_sand', 'blue_sand', 'pink_sand', 'purple_sand', 'black_sand'];

    sands.forEach((sand) => {
        recipes.push({
            output: `byg:${sand}stone`,
            pattern: ['AA', 'AA'],
            key: { A: `#forge:${sand}` },
            id: `byg:${sand}stone`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
