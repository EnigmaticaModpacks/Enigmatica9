ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/shaped/';

    const recipes = [
        {
            output: 'supplementaries:faucet',
            pattern: [' B', 'AA', ' A'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'create:copper_valve_handle'
            },
            id: 'supplementaries:faucet'
        },
        {
            output: '2x supplementaries:brass_lantern',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:dusts/glowstone'
            },
            id: 'supplementaries:brass_lantern'
        },
        {
            output: '2x supplementaries:crystal_display',
            pattern: ['AB', 'AB', 'AB'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'create:polished_rose_quartz'
            },
            id: 'supplementaries:crystal_display'
        },
        {
            output: 'supplementaries:sconce',
            pattern: ['BAB', ' B '],
            key: {
                A: 'minecraft:torch',
                B: '#forge:nuggets/lead'
            },
            id: 'supplementaries:sconce'
        },
        {
            output: 'supplementaries:sconce_soul',
            pattern: ['BAB', ' B '],
            key: {
                A: 'minecraft:soul_torch',
                B: '#forge:nuggets/lead'
            },
            id: 'supplementaries:sconce_soul'
        },
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: 'minecraft:candle',
                B: '#forge:nuggets/lead'
            },
            id: `supplementaries:candle_holders/candle_holder`
        },
        {
            output: 'supplementaries:goblet',
            pattern: ['A A', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/tin',
                B: '#forge:ingots/tin'
            },
            id: 'supplementaries:goblet'
        },
        {
            output: 'supplementaries:cage',
            pattern: ['AAA', 'B B', 'CCC'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'create:andesite_bars',
                C: '#minecraft:wooden_slabs'
            },
            id: 'supplementaries:cage'
        },
        {
            output: 'supplementaries:wind_vane',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:rods/tin',
                C: '#forge:dusts/redstone'
            },
            id: 'supplementaries:wind_vane'
        },
        {
            output: 'supplementaries:bubble_blower',
            pattern: [' AA', ' AA', 'B  '],
            key: {
                A: '#forge:nuggets/tin',
                B: '#forge:rods/tin'
            },
            id: 'supplementaries:bubble_blower'
        },
        {
            output: 'supplementaries:lock_block',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: '#minecraft:planks',
                C: '#forge:dusts/redstone'
            },
            id: 'supplementaries:lock_block'
        },
        {
            output: 'supplementaries:spring_launcher',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'minecraft:slime_block',
                C: 'minecraft:sticky_piston',
                D: '#forge:gunpowder'
            },
            id: 'supplementaries:spring_launcher'
        },
        {
            output: 'supplementaries:pulley_block',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#minecraft:planks',
                B: '#minecraft:wooden_slabs',
                C: 'create:shaft'
            },
            id: 'supplementaries:pulley'
        },
        {
            output: 'supplementaries:relayer',
            pattern: ['AAB', 'CCD', 'AAB'],
            key: {
                A: '#forge:cobblestone',
                B: 'minecraft:smooth_stone',
                C: '#forge:dusts/redstone',
                D: '#forge:ingots/copper'
            },
            id: 'supplementaries:relayer'
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            output: `supplementaries:candle_holder_${color}`,
            pattern: ['A', 'B'],
            key: {
                A: `minecraft:${color}_candle`,
                B: '#forge:nuggets/lead'
            },
            id: `supplementaries:candle_holders/candle_holder_${color}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
