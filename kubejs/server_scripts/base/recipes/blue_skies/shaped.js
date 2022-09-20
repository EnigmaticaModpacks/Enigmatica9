ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/blue_skies/shaped/';

    const recipes = [
        {
            output: 'minecraft:stonecutter',
            pattern: [' A ', 'BBB'],
            key: {
                A: '#forge:ingots/ventium',
                B: '#blue_skies:stone'
            },
            id: `blue_skies:stonecutter_compat`
        },
        {
            output: 'blue_skies:warding_pearl',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#forge:nuggets/falsite',
                B: 'blue_skies:soul_fragment',
                C: 'blue_skies:pearl'
            },
            id: `blue_skies:warding_pearl`
        },
        {
            output: 'blue_skies:ventium_shears',
            pattern: ['A ', ' A'],
            key: {
                A: '#forge:ingots/ventium'
            },
            id: `blue_skies:ventium_shears`
        },
        {
            output: 'minecraft:anvil',
            pattern: ['AAA', ' B ', 'BBB'],
            key: {
                A: '#forge:storage_blocks/ventium',
                B: '#forge:ingots/ventium'
            },
            id: `blue_skies:anvil_compat`
        },
        {
            output: 'blue_skies:star_emitter',
            pattern: [' A ', ' B ', 'CCC'],
            key: {
                A: 'blue_skies:star_flare',
                B: '#forge:ingots/falsite',
                C: '#minecraft:wooden_slabs'
            },
            id: `blue_skies:star_emitter`
        },
        {
            output: 'blue_skies:cherry_pie',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: '#forge:grain/wheat',
                B: 'blue_skies:cherry',
                C: '#forge:ingots/ventium'
            },
            id: `blue_skies:cherry_pie_with_ventium`
        },
        {
            output: 'blue_skies:ventium_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:ingots/ventium'
            },
            id: `blue_skies:ventium_block`
        },
        {
            output: 'blue_skies:falsite_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:ingots/falsite'
            },
            id: `blue_skies:falsite_block`
        },
        {
            output: 'blue_skies:moonstone_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:gems/moonstone'
            },
            id: `blue_skies:moonstone_block_from_moonstone`
        },
        {
            output: 'blue_skies:tool_box',
            pattern: ['AA', 'BB'],
            key: {
                A: '#forge:ingots/ventium',
                B: '#minecraft:planks'
            },
            id: `blue_skies:tool_box`
        },
        {
            output: 'blue_skies:ventium_bucket',
            pattern: ['A A', ' A '],
            key: {
                A: '#forge:ingots/ventium'
            },
            id: `blue_skies:ventium_bucket`
        },
        {
            output: 'blue_skies:camel_saddle',
            pattern: ['AAA', 'ABA', 'C C'],
            key: {
                A: '#forge:leather',
                B: '#forge:ingots/ventium',
                C: 'blue_skies:fox_pelt'
            },
            id: `blue_skies:camel_saddle_with_ventium`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
