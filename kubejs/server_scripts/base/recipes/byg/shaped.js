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
        },
        {
            output: '4x byg:ether_soil',
            pattern: ['AB', 'BA'],
            key: {
                A: 'byg:lush_dirt',
                B: 'byg:ether_stone'
            },
            id: `${id_prefix}ether_soil`
        },
        {
            output: '4x byg:end_sand',
            pattern: ['AB', 'BA'],
            key: {
                A: 'occultism:crushed_end_stone',
                B: '#forge:sand/colorless'
            },
            id: `${id_prefix}end_sand`
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

    const block_conversions = [
        {
            blocks: [
                'byg:rocky_stone',
                'byg:dacite',
                'byg:travertine',
                'byg:soapstone',
                'byg:scoria_stone',
                'byg:red_rock',
                'byg:ether_stone'
            ]
        },
        {
            blocks: [
                'byg:end_sand',
                'byg:bulbis_phycelium',
                'byg:ivis_phylium',
                'byg:imparius_phylium',
                'byg:shulkren_phylium'
            ]
        },
        { blocks: ['byg:ether_soil', 'byg:ether_phylium'] },
        { blocks: ['minecraft:dirt', 'byg:lush_dirt'] }
    ];

    block_conversions.forEach((block_conversion) => {
        let blocks = block_conversion.blocks;
        blocks.forEach((block, index) => {
            let input = block;
            let output = index + 1 >= blocks.length ? blocks[0] : blocks[index + 1];

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
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
