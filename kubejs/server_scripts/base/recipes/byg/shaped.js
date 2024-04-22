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
            output: '2x byg:chiseled_therium',
            pattern: ['A', 'A'],
            key: {
                A: '#forge:storage_blocks/therium'
            },
            id: 'byg:chiseled_therium'
        },
        {
            output: '8x byg:chain_plating',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:nuggets/iron',
                B: '#forge:ingots/iron'
            },
            id: 'byg:chain_plating'
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

    const stone_conversions = [
        'byg:rocky_stone',
        'byg:dacite',
        'byg:travertine',
        'byg:soapstone',
        'byg:scoria_stone',
        'byg:red_rock'
    ];

    stone_conversions.forEach((stone, index) => {
        let input = stone;
        let output = index + 1 >= stone_conversions.length ? stone_conversions[0] : stone_conversions[index + 1];

        recipes.push({
            output: `8x ${output}`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: input,
                B: '#forge:essences/manipulation'
            },
            id: `${id_prefix}${input.replace(':', '_')}_from_${output.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
