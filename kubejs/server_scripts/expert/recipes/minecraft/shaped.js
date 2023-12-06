ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:piston',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:dusts/redstone',
                C: 'minecraft:andesite',
                D: 'create:piston_extension_pole'
            },
            id: `minecraft:piston`
        },
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
                A: 'minecraft:andesite',
                B: 'minecraft:polished_andesite'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: ['AAA', 'ACA', 'BDB'],
            key: {
                A: 'minecraft:andesite',
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
        },
        {
            output: 'minecraft:smithing_table',
            pattern: [' A ', 'BBB', 'CDC'],
            key: {
                A: '#forge:gems/infused_diamond',
                B: 'pneumaticcraft:compressed_stone',
                C: '#forge:storage_blocks/fiery',
                D: 'create:brass_casing'
            },
            id: 'minecraft:smithing_table'
        },
        {
            output: 'minecraft:anvil',
            pattern: ['AAA', ' B ', 'BCB'],
            key: {
                A: '#forge:storage_blocks/ironwood',
                B: '#forge:ingots/ironwood',
                C: '#forge:gems/source'
            },
            id: 'minecraft:anvil'
        },
        {
            output: 'minecraft:stonecutter',
            pattern: [' A ', 'BBB'],
            key: {
                A: 'manyideas_core:saw_stone',
                B: 'minecraft:stone'
            },
            id: 'minecraft:stonecutter'
        },
        {
            output: '3x minecraft:conduit',
            pattern: [' A ', 'BBB', ' C '],
            key: {
                A: '#forge:essences/air',
                B: 'minecraft:nautilus_shell',
                C: '#forge:essences/water'
            },
            id: 'minecraft:conduit'
        },
        {
            output: 'minecraft:shield',
            pattern: ['A A', 'ABA', ' A '],
            key: {
                A: '#minecraft:planks',
                B: '#forge:ingots/bronze'
            },
            id: 'minecraft:shield'
        },
        {
            output: Item.of('minecraft:shears').enchant('naturesaura:aura_mending', 1),
            pattern: ['AB', 'BA'],
            key: {
                A: '#forge:rods/ancient',
                B: '#forge:ingots/infused_iron'
            },
            id: 'minecraft:shears'
        },
        {
            output: '4x minecraft:dripstone_block',
            pattern: ['AB', 'BA'],
            key: {
                A: 'minecraft:clay',
                B: 'minecraft:tuff'
            },
            id: `${id_prefix}dripstone_block`
        },
        {
            output: '4x minecraft:end_crystal',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: 'spirit:soul_glass',
                B: '#forge:gems/infused_ender',
                C: '#forge:gems/nitro'
            },
            id: `minecraft:end_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
