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
                A: 'pneumaticcraft:logistics_core',
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
                A: 'pneumaticcraft:logistics_core',
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
                D: '#forge:essences/earth'
            },
            id: `create:crafting/kinetics/mechanical_press`
        },
        {
            output: 'create:propeller',
            pattern: [' B ', 'BAB', 'CB '],
            key: {
                A: 'create:shaft',
                B: '#forge:plates/constantan',
                C: '#forge:essences/air'
            },
            id: `create:crafting/kinetics/propeller`
        },
        {
            output: 'create:whisk',
            pattern: [' C ', 'BAB', 'BAB'],
            key: {
                A: 'create:shaft',
                B: '#forge:plates/bronze',
                C: '#forge:essences/water'
            },
            id: `create:crafting/kinetics/whisk`
        },
        {
            output: 'create:rope_pulley',
            pattern: ['AB ', 'CCC', 'CCC'],
            key: {
                A: 'create:shaft',
                B: 'create:andesite_casing',
                C: '#forge:rope'
            },
            id: `create:crafting/kinetics/rope_pulley`
        },
        {
            output: 'create:mechanical_drill',
            pattern: ['BA'],
            key: {
                A: 'immersiveengineering:drillhead_steel',
                B: 'create:andesite_casing'
            },
            id: `create:crafting/kinetics/mechanical_drill`
        },
        {
            output: 'create:mechanical_saw',
            pattern: ['BA'],
            key: {
                A: '#forge:sawblades',
                B: 'create:andesite_casing'
            },
            id: `create:crafting/kinetics/mechanical_saw`
        },
        {
            output: '2x create:item_vault',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_blue',
                B: 'minecraft:barrel'
            },
            id: `create:crafting/kinetics/item_vault`
        },
        {
            output: '2x create:redstone_contact',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:plates/copper',
                B: '#forge:dusts/redstone',
                C: 'create:andesite_casing'
            },
            id: `create:crafting/logistics/redstone_contact`
        },
        {
            output: 'create:powered_toggle_latch',
            pattern: [' A ', ' B ', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'minecraft:lever',
                C: 'pneumaticcraft:compressed_stone_slab'
            },
            id: `create:crafting/logistics/powered_toggle_latch`
        },
        {
            output: 'create:powered_latch',
            pattern: [' A ', 'DBD', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'minecraft:lever',
                C: 'pneumaticcraft:compressed_stone_slab',
                D: '#forge:dusts/redstone'
            },
            id: `create:crafting/logistics/powered_latch`
        },
        {
            output: 'create:pulse_extender',
            pattern: ['  A', 'DBA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: '#forge:plates/electrum',
                C: 'pneumaticcraft:compressed_stone_slab',
                D: '#forge:dusts/redstone'
            },
            id: `create:crafting/logistics/pulse_extender`
        },
        {
            output: 'create:pulse_repeater',
            pattern: ['DBA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: '#forge:plates/electrum',
                C: 'pneumaticcraft:compressed_stone_slab',
                D: '#forge:dusts/redstone'
            },
            id: `create:crafting/logistics/pulse_repeater`
        },
        {
            output: 'create:deployer',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'create:andesite_casing',
                C: 'create:brass_hand'
            },
            id: `create:crafting/kinetics/deployer`
        },
        {
            output: 'create:mechanical_arm',
            pattern: ['AA', 'BC', 'DE'],
            key: {
                A: '#forge:ingots/constantan',
                B: '#forge:gears/constantan',
                C: 'create:brass_hand',
                D: 'create:brass_casing',
                E: 'pneumaticcraft:logistics_core'
            },
            id: `create:crafting/kinetics/mechanical_arm`
        },
        {
            output: 'create:peculiar_bell',
            pattern: ['A', 'B'],
            key: {
                A: '#forge:storage_blocks/energized_steel',
                B: '#forge:ingots/energized_steel'
            },
            id: `create:crafting/curiosities/peculiar_bell`
        },
        {
            output: 'create:crafter_slot_cover',
            pattern: ['ABA'],
            key: {
                A: '#forge:nuggets/gold',
                B: '#forge:plates/nickel'
            },
            id: `create:crafting/kinetics/crafter_slot_cover`
        },
        {
            output: 'create:attribute_filter',
            pattern: ['ABA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'thermal:beekeeper_fabric'
            },
            id: `create:crafting/kinetics/attribute_filter`
        },
        {
            output: 'create:filter',
            pattern: ['ABA'],
            key: {
                A: '#forge:nuggets/tin',
                B: 'thermal:beekeeper_fabric'
            },
            id: `create:crafting/kinetics/filter`
        },
        {
            output: 'create:extendo_grip',
            pattern: [' A ', 'BAC', 'DA '],
            key: {
                A: 'naturesaura:ancient_stick',
                B: '#forge:gears/compressed_iron',
                C: 'create:brass_hand',
                D: '#forge:wooden_grip'
            },
            id: `${id_prefix}extendo_grip`
        },
        {
            output: 'create:rotation_speed_controller',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'immersiveengineering:component_electronic',
                B: 'create:brass_casing',
                C: '#forge:gears/compressed_iron'
            },
            id: `create:crafting/kinetics/rotation_speed_controller`
        },
        {
            output: 'create:controls',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'immersiveengineering:component_electronic',
                B: 'create:railway_casing',
                C: '#forge:gears/compressed_iron'
            },
            id: `create:crafting/kinetics/controls`
        },
        {
            output: '3x create:train_door',
            pattern: ['AA', 'BB', 'AA'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:plates/gold'
            },
            id: `create:crafting/kinetics/train_door`
        },
        {
            output: '6x create:train_trapdoor',
            pattern: ['ABA', 'ABA'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:plates/gold'
            },
            id: `create:crafting/kinetics/train_trapdoor`
        },
        {
            output: '4x create:nixie_tube',
            pattern: ['AA', 'BB'],
            key: {
                A: 'immersiveengineering:electron_tube',
                B: '#forge:treated_wood_slab'
            },
            id: `create:crafting/kinetics/nixie_tube`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
