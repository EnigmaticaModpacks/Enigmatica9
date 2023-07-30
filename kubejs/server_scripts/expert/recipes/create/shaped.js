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
                C: 'pneumaticcraft:compressed_stone',
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
            pattern: ['  A', ' C ', 'B  '],
            key: {
                A: 'immersiveengineering:drillhead_steel',
                B: 'create:andesite_casing',
                C: '#forge:gears/compressed_iron'
            },
            id: `create:crafting/kinetics/mechanical_drill`
        },
        {
            output: 'create:mechanical_harvester',
            pattern: [' AB', 'ACA', 'BAD'],
            key: {
                A: '#forge:plates/steel',
                B: '#forge:gears/compressed_iron',
                C: '#forge:rods/steel',
                D: 'create:andesite_casing'
            },
            id: `create:crafting/kinetics/mechanical_harvester`
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
                A: '#forge:storage_blocks/brass',
                B: '#forge:rods/brass'
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
                B: 'immersiveengineering:light_engineering',
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
                C: '#forge:gears/aluminum'
            },
            id: `create:crafting/kinetics/rotation_speed_controller`
        },
        {
            output: 'create:controls',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'immersiveengineering:component_electronic',
                B: 'create:railway_casing',
                C: '#forge:gears/lumium'
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
        },
        {
            output: '32x create:track',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/iron',
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_from_iron`
        },
        {
            output: '48x create:track',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/osmium',
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_from_osmium`
        },
        {
            output: '16x create:track',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/bronze',
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_from_bronze`
        },
        {
            output: 'create:smart_fluid_pipe',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:plates/brass',
                B: 'create:fluid_pipe',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `create:crafting/kinetics/smart_fluid_pipe`
        },
        {
            output: 'create:smart_chute',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:plates/brass',
                B: 'create:chute',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `create:crafting/kinetics/smart_chute`
        },
        {
            output: 'create:flywheel',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'create:shaft'
            },
            id: `create:crafting/kinetics/flywheel`
        },
        {
            output: 'create:elevator_pulley',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:brass_casing',
                B: 'create:rope_pulley',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `create:crafting/kinetics/elevator_pulley`
        },
        {
            output: 'create:potato_cannon',
            pattern: ['AAA', 'BC '],
            key: {
                A: 'create:fluid_pipe',
                B: '#forge:wooden_grip',
                C: 'immersiveengineering:light_engineering'
            },
            id: `${id_prefix}potato_cannon`
        },
        {
            output: 'create:schematicannon',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'pneumaticcraft:cannon_barrel',
                B: '#minecraft:planks',
                C: 'minecraft:dispenser',
                D: 'minecraft:smooth_stone'
            },
            id: `create:crafting/schematics/schematicannon`
        },
        {
            output: 'create:steam_engine',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:rods/aluminum',
                B: '#forge:essences/air',
                C: 'pneumaticcraft:cannon_barrel',
                D: '#forge:storage_blocks/bronze'
            },
            id: `create:crafting/kinetics/steam_engine`
        },
        {
            output: 'create:super_glue',
            pattern: ['AB', 'CA'],
            key: {
                A: '#forge:slimeballs',
                B: '#forge:plates/tin',
                C: '#forge:nuggets/tin'
            },
            id: `create:crafting/kinetics/super_glue`
        },
        {
            output: '16x create:metal_bracket',
            pattern: ['AAA', 'BCB'],
            key: {
                A: ['#forge:nuggets/nickel', '#forge:nuggets/iron'],
                B: ['#forge:ingots/nickel', '#forge:ingots/iron'],
                C: 'pneumaticcraft:compressed_stone'
            },
            id: `create:crafting/kinetics/metal_bracket`
        },
        {
            output: '16x create:wooden_bracket',
            pattern: ['AAA', 'BCB'],
            key: {
                A: '#forge:rods/wooden',
                B: '#minecraft:planks',
                C: 'pneumaticcraft:compressed_stone'
            },
            id: `create:crafting/kinetics/wooden_bracket`
        },
        {
            output: '16x create:metal_girder',
            pattern: ['AAA', 'BBB'],
            key: {
                A: ['#forge:plates/nickel', '#forge:plates/iron'],
                B: 'pneumaticcraft:compressed_stone'
            },
            id: `create:crafting/kinetics/metal_girder`
        },
        {
            output: 'create:minecart_coupling',
            pattern: ['  B', ' A ', 'B  '],
            key: {
                A: ['#forge:plates/nickel', '#forge:plates/iron'],
                B: 'pneumaticcraft:compressed_stone'
            },
            id: `create:crafting/curiosities/minecart_coupling`
        },
        {
            output: 'create:experience_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'ars_nouveau:greater_experience_gem'
            },
            id: `create:crafting/materials/experience_block`
        },
        {
            output: '2x create:redstone_link',
            pattern: ['AB', 'CC'],
            key: {
                A: 'littlelogistics:transmitter_component',
                B: 'littlelogistics:receiver_component',
                C: '#forge:plates/electrum'
            },
            id: `create:crafting/logistics/redstone_link`
        },
        {
            output: 'create:display_link',
            pattern: ['AB', 'CC'],
            key: {
                A: 'littlelogistics:transmitter_component',
                B: 'immersiveengineering:light_bulb',
                C: '#forge:treated_wood_slab'
            },
            id: `create:crafting/logistics/display_link`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
