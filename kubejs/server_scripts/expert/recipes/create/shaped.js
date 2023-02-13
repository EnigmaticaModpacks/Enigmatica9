ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/shaped/';

    const recipes = [
        {
            output: 'create:wand_of_symmetry',
            pattern: [' BA', ' CD', 'C  '],
            key: {
                A: 'ars_nouveau:spell_prism',
                B: '#forge:plates/bronze',
                C: 'naturesaura:ancient_stick',
                D: '#forge:wires/electrum'
            },
            id: `${id_prefix}wand_of_symmetry`
        },
        {
            output: 'create:water_wheel',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:waterwheel_segment',
                B: 'create:large_cogwheel'
            },
            id: `create:crafting/kinetics/water_wheel`
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B'],
            key: {
                A: 'create:turntable',
                B: 'create:andesite_casing'
            },
            id: `create:crafting/kinetics/windmill_bearing`
        },
        {
            output: 'create:millstone',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:cogwheel',
                B: 'create:andesite_casing',
                C: 'pneumaticcraft:compressed_stone_slab'
            },
            id: `create:crafting/kinetics/millstone`
        },
        {
            output: '3x create:andesite_tunnel',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'create:andesite_casing',
                C: 'immersiveengineering:strip_curtain'
            },
            id: `create:crafting/logistics/andesite_tunnel`
        },
        {
            output: '3x create:brass_tunnel',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: 'create:electron_tube',
                B: 'create:brass_casing',
                C: 'immersiveengineering:strip_curtain'
            },
            id: `create:crafting/logistics/brass_tunnel`
        },
        {
            output: '2x create:andesite_funnel',
            pattern: [' A ', 'CBC'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'create:andesite_casing',
                C: 'immersiveengineering:strip_curtain'
            },
            id: `create:crafting/logistics/andesite_funnel`
        },
        {
            output: '2x create:brass_funnel',
            pattern: [' A ', 'CBC'],
            key: {
                A: 'create:electron_tube',
                B: 'create:brass_casing',
                C: 'immersiveengineering:strip_curtain'
            },
            id: `create:crafting/logistics/brass_funnel`
        },
        {
            output: 'create:encased_chain_drive',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:shaft',
                B: 'create:andesite_casing',
                C: 'minecraft:chain'
            },
            id: `create:crafting/kinetics/encased_chain_drive`
        },
        {
            output: 'create:encased_chain_drive',
            pattern: [' A ', ' B ', 'CCC'],
            key: {
                A: 'create:shaft',
                B: 'create:andesite_casing',
                C: '#forge:rope'
            },
            id: `${id_prefix}encased_chain_drive_from_rope`
        },
        {
            output: '12x create:chute',
            pattern: ['A A', 'A A', 'A A'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_black'
            },
            id: `create:crafting/kinetics/chute`
        },
        {
            output: 'create:mechanical_press',
            pattern: [' A ', 'DBD', ' C '],
            key: {
                A: 'create:shaft',
                B: 'create:andesite_casing',
                C: 'naturesaura:infused_stone',
                D: 'ars_nouveau:earth_essence'
            },
            id: `create:crafting/kinetics/mechanical_press`
        },
        {
            output: 'create:propeller',
            pattern: [' B ', 'BAB', 'CB '],
            key: {
                A: 'create:shaft',
                B: '#forge:plates/constantan',
                C: 'ars_nouveau:air_essence'
            },
            id: `create:crafting/kinetics/propeller`
        },
        {
            output: 'create:whisk',
            pattern: [' C ', 'BAB', 'BAB'],
            key: {
                A: 'create:shaft',
                B: '#forge:plates/bronze',
                C: 'ars_nouveau:water_essence'
            },
            id: `create:crafting/kinetics/whisk`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
