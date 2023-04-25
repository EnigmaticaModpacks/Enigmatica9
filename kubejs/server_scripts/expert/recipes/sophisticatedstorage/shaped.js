ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/sophisticatedstorage/shaped/';

    const recipes = [
        {
            output: '5x sophisticatedstorage:upgrade_base',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:nuggets/bronze'
            },
            id: 'sophisticatedstorage:upgrade_base'
        },
        {
            output: 'sophisticatedstorage:controller',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: '#forge:plates/tin',
                B: 'pneumaticcraft:logistics_core',
                C: 'create:andesite_casing',
                D: 'sophisticatedstorage:upgrade_base',
                E: 'ars_nouveau:ritual_warping'
            },
            id: 'sophisticatedstorage:controller'
        },
        {
            output: 'sophisticatedstorage:storage_tool',
            pattern: [' BA', ' CB', 'C  '],
            key: {
                A: '#forge:gems/source',
                B: '#forge:nuggets/lead',
                C: 'minecraft:stick'
            },
            id: 'sophisticatedstorage:storage_tool'
        },
        {
            output: '4x sophisticatedstorage:storage_link',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'ars_nouveau:ritual_warping',
                B: '#forge:nuggets/lead',
                C: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:storage_link'
        },
        {
            output: 'sophisticatedstorage:basic_to_iron_tier_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: ['#forge:plates/iron', '#forge:plates/tin'],
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
        },
        {
            output: 'sophisticatedstorage:iron_to_gold_tier_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#forge:plates/gold',
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
        },
        {
            output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:plates/netherite',
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade'
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_1',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'ars_nouveau:purple_archwood_wood',
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:upgrade_base'
            },
            id: 'sophisticatedstorage:stack_upgrade_tier_1'
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_2',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: ['#forge:plates/iron', '#forge:plates/tin'],
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:stack_upgrade_tier_1'
            },
            id: 'sophisticatedstorage:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_3',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#forge:plates/gold',
                B: 'ars_nouveau:repository',
                C: 'sophisticatedstorage:stack_upgrade_tier_2'
            },
            id: 'sophisticatedstorage:stack_upgrade_tier_3'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
