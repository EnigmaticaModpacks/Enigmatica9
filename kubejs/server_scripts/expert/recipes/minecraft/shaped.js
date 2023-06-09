ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:cauldron',
            pattern: ['A A', 'A A', 'AAA'],
            key: {
                A: '#forge:ingots/copper'
            },
            id: `minecraft:cauldron`
        },
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'BBB'],
            key: {
                A: ['minecraft:andesite', 'twilightforest:nagastone'],
                B: ['minecraft:polished_andesite', 'twilightforest:nagastone_head']
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: ['AAA', 'ACA', 'BDB'],
            key: {
                A: ['minecraft:andesite', 'twilightforest:nagastone'],
                B: 'minecraft:smooth_stone',
                C: 'minecraft:furnace',
                D: 'minecraft:bricks'
            },
            id: `${id_prefix}blast_furnace`
        },
        {
            output: 'minecraft:compass',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:dusts/redstone'
            },
            id: `minecraft:compass`
        },
        {
            output: '4x minecraft:fire_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:essences/fire',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}fire_charge`
        },
        {
            output: '9x minecraft:detector_rail',
            pattern: ['A A', 'ABA', 'ACA'],
            key: {
                A: '#forge:rods/osmium',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:dusts/redstone'
            },
            id: `${id_prefix}detector_rail_from_osmium`
        },
        {
            output: '3x minecraft:detector_rail',
            pattern: ['A A', 'ABA', 'ACA'],
            key: {
                A: '#forge:rods/bronze',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:dusts/redstone'
            },
            id: `${id_prefix}detector_rail_from_bronze`
        },
        {
            output: '9x minecraft:activator_rail',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/osmium',
                B: '#forge:rods/wooden',
                C: 'minecraft:redstone_torch'
            },
            id: `${id_prefix}activator_rail_from_osmium`
        },
        {
            output: '3x minecraft:activator_rail',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/bronze',
                B: '#forge:rods/wooden',
                C: 'minecraft:redstone_torch'
            },
            id: `${id_prefix}activator_rail_from_bronze`
        },
        {
            output: '8x minecraft:rail',
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/bronze',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}rail_from_bronze`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
