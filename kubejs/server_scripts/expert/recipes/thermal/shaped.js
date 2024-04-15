ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/shaped/';

    const recipes = [
        {
            output: '8x thermal:jar',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: '#forge:glass/colorless'
            },
            id: `${id_prefix}jar`
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'thermal:cured_rubber',
                B: '#forge:plates/bronze',
                C: 'ae2:quartz_glass'
            },
            id: 'thermal:fluid_cell_frame'
        },
        {
            output: '4x thermal:earth_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:essences/earth',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}earth_charge`
        },
        {
            output: '4x thermal:lightning_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:essences/air',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}lightning_charge`
        },
        {
            output: '4x thermal:ice_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:essences/water',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}ice_charge`
        },
        {
            output: '2x thermal:machine_frame',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:rods/aluminum',
                B: '#forge:plates/aluminum'
            },
            id: `thermal:machine_frame`
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:quartz_glass',
                B: '#forge:wires/electrum',
                C: 'thermal:machine_frame'
            },
            id: `thermal:energy_cell_frame`
        },
        {
            output: '4x thermal:redstone_servo',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:wirecoil_redstone',
                B: '#forge:ingots/aluminum'
            },
            id: `thermal:redstone_servo`
        },
        {
            output: '2x thermal:device_tree_extractor',
            pattern: ['CAC', 'EBE', 'CDC'],
            key: {
                A: 'supplementaries:faucet',
                B: '#forge:essences/earth',
                C: 'create:andesite_casing',
                D: 'thermal:jar',
                E: '#forge:plates/tin'
            },
            id: 'thermal:device_tree_extractor'
        },
        {
            output: '2x thermal:device_hive_extractor',
            pattern: ['CAC', 'EBE', 'CDC'],
            key: {
                A: 'naturesaura:grated_chute',
                B: '#forge:essences/abjuration',
                C: 'create:andesite_casing',
                D: 'thermal:jar',
                E: '#forge:plates/gold'
            },
            id: 'thermal:device_hive_extractor'
        },
        {
            output: '2x thermal:device_fisher',
            pattern: ['CAC', 'DBD', 'CAC'],
            key: {
                A: 'minecraft:barrel',
                B: '#forge:essences/water',
                C: 'create:andesite_casing',
                D: '#forge:plates/tin'
            },
            id: 'thermal:device_fisher'
        },
        {
            output: '2x thermal:device_composter',
            pattern: ['CAC', 'DBD', 'CAC'],
            key: {
                A: 'minecraft:composter',
                B: '#forge:essences/earth',
                C: 'create:andesite_casing',
                D: '#forge:plates/tin'
            },
            id: 'thermal:device_composter'
        },
        {
            output: '2x thermal:device_soil_infuser',
            pattern: ['CAC', 'EBE', 'CDC'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: '#forge:essences/earth',
                C: 'create:andesite_casing',
                D: 'powah:capacitor_basic_large',
                E: '#forge:plates/electrum'
            },
            id: 'thermal:device_soil_infuser'
        },
        {
            output: '2x thermal:device_collector',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'naturesaura:hopper_upgrade',
                C: 'minecraft:barrel',
                D: 'naturesaura:infused_stone'
            },
            id: 'thermal:device_collector'
        },
        {
            output: 'thermal:device_nullifier',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: '#forge:plates/tin',
                C: 'minecraft:barrel',
                D: 'naturesaura:infused_stone',
                E: '#forge:ingots/fiery'
            },
            id: 'thermal:device_nullifier'
        },
        {
            output: 'thermal:device_rock_gen',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:essences/earth',
                C: 'starbunclemania:fluid_jar',
                D: 'create:andesite_casing',
                E: 'naturesaura:infused_stone'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:essences/water',
                C: '#forge:plates/bronze',
                D: 'thermal:fluid_cell_frame',
                E: 'naturesaura:infused_stone',
                F: 'pneumaticcraft:liquid_hopper'
            },
            id: 'thermal:device_water_gen'
        },
        {
            output: 'thermal:charge_bench',
            pattern: ['AAA', 'BCB', 'DBD'],
            key: {
                A: '#forge:plates/electrum',
                B: 'powah:capacitor_basic_large',
                C: 'create:andesite_casing',
                D: 'naturesaura:infused_stone'
            },
            id: 'thermal:charge_bench'
        },
        {
            output: 'thermal:tinker_bench',
            pattern: ['AAA', 'DBD', 'DCD'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:gems/fluix',
                C: 'ars_nouveau:sourcestone',
                D: '#forge:treated_wood'
            },
            id: 'thermal:tinker_bench'
        },
        {
            output: 'thermal:item_filter_augment',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'thermal:beekeeper_fabric'
            },
            id: 'thermal:augments/item_filter_augment'
        },
        {
            output: 'thermal:fluid_filter_augment',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'thermal:diving_fabric'
            },
            id: 'thermal:augments/fluid_filter_augment'
        },
        {
            output: 'thermal:junk_net',
            pattern: ['ABA', 'BBB', 'ABA'],
            key: {
                A: '#forge:nuggets/lead',
                B: 'farmersdelight:safety_net'
            },
            id: 'thermal:junk_net'
        },
        {
            output: 'thermal:flux_magnet',
            pattern: ['A B', 'CDC', ' E '],
            key: {
                A: 'quark:red_rune',
                B: 'quark:blue_rune',
                C: 'powah:dielectric_rod',
                D: 'powah:capacitor_basic_large',
                E: 'powah:dielectric_rod_horizontal'
            },
            id: 'thermal:flux_magnet'
        },
        {
            output: 'thermal:potion_quiver',
            pattern: [' AB', 'ACD', ' DA'],
            key: {
                A: '#forge:plates/bronze',
                B: '#forge:rope',
                C: 'ars_nouveau:potion_jar',
                D: 'thermal:cured_rubber'
            },
            id: 'thermal:potion_quiver'
        },
        {
            output: 'thermal:potion_infuser',
            pattern: [' AA', 'DCA', 'BD '],
            key: {
                A: '#forge:plates/bronze',
                B: '#forge:gems/amethyst',
                C: 'ars_nouveau:potion_jar',
                D: 'thermal:cured_rubber'
            },
            id: 'thermal:potion_infuser'
        },
        {
            output: 'thermal:fluid_reservoir',
            pattern: [' A ', 'ABA'],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'starbunclemania:fluid_jar'
            },
            id: 'thermal:fluid_reservoir'
        },
        {
            output: 'thermal:machine_furnace',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_brick',
                B: 'naturesaura:furnace_heater',
                C: '#forge:ingots/infused_iron',
                D: 'minecraft:furnace',
                E: '#forge:essences/fire'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'naturesaura:infused_brick',
                C: 'minecraft:blast_furnace',
                D: 'immersiveengineering:blastbrick_reinforced',
                E: 'immersiveengineering:rs_engineering'
            },
            id: 'thermal:machine_smelter'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: '#forge:essences/fire',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: 'naturesaura:infused_brick',
                E: 'pneumaticcraft:vortex_tube'
            },
            id: 'thermal:machine_crucible'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: '#forge:essences/water',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: 'naturesaura:infused_brick',
                E: 'pneumaticcraft:vortex_tube'
            },
            id: 'thermal:machine_chiller'
        },
        {
            output: 'thermal:machine_brewer',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: '#forge:essences/abjuration',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: 'naturesaura:infused_brick',
                E: 'minecraft:brewing_stand'
            },
            id: 'thermal:machine_brewer'
        },
        {
            output: 'thermal:machine_bottler',
            pattern: ['DAD', 'BCB', 'FEF'],
            key: {
                A: 'create:spout',
                B: 'pneumaticcraft:printed_circuit_board',
                C: '#industrialforegoing:machine_frame/advanced',
                D: 'naturesaura:infused_brick',
                E: 'create:depot',
                F: '#forge:gears/diamond'
            },
            id: 'thermal:machine_bottler'
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:storage_blocks/depths',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:gears/steel',
                F: 'create:depot'
            },
            id: 'thermal:machine_pulverizer'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:metal_bracket',
                B: 'immersiveengineering:sawblade',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:gears/steel',
                F: 'create:depot'
            },
            id: 'thermal:machine_sawmill'
        },
        {
            output: 'thermal:machine_press',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:metal_bracket',
                B: 'create:mechanical_press',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:gears/steel',
                F: 'create:depot'
            },
            id: 'thermal:machine_press'
        },
        {
            output: 'thermal:machine_crystallizer',
            pattern: ['AFA', 'BCB', 'DED'],
            key: {
                A: 'ae2:quartz_growth_accelerator',
                B: 'pneumaticcraft:printed_circuit_board',
                C: '#industrialforegoing:machine_frame/advanced',
                D: '#forge:gears/diamond',
                E: 'ars_elemental:earth_focus',
                F: 'ars_elemental:water_focus'
            },
            id: 'thermal:machine_crystallizer'
        },
        {
            output: 'thermal:machine_crafter',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'create:crafting_blueprint',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:gears/compressed_iron',
                E: '#forge:essences/manipulation'
            },
            id: 'thermal:machine_crafter'
        },
        {
            output: 'thermal:machine_centrifuge',
            pattern: ['FAG', 'BCB', 'DED'],
            key: {
                A: 'immersiveengineering:turntable',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:gears/compressed_iron',
                E: '#forge:essences/air',
                F: 'minecraft:barrel',
                G: 'thermal:fluid_cell_frame'
            },
            id: 'thermal:machine_centrifuge'
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'minecraft:blast_furnace',
                B: '#pneumaticcraft:plastic_sheets',
                C: '#industrialforegoing:machine_frame/simple',
                D: 'immersiveengineering:blastbrick_reinforced',
                E: 'thermal:fluid_cell_frame'
            },
            id: 'thermal:machine_pyrolyzer'
        },
        {
            output: 'thermal:machine_refinery',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:refinery',
                B: 'pneumaticcraft:refinery_output',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:gears/compressed_iron',
                E: '#forge:essences/fire'
            },
            id: 'thermal:machine_refinery'
        },
        {
            output: '2x thermal:servo_attachment',
            pattern: [' A ', 'BCB'],
            key: {
                A: '#forge:nuggets/copper',
                B: '#forge:nuggets/tin',
                C: 'pneumaticcraft:logistics_core'
            },
            id: 'thermal:servo_attachment_2'
        },
        {
            output: '2x thermal:turbo_servo_attachment',
            pattern: [' A ', 'BCB'],
            key: {
                A: '#forge:nuggets/signalum',
                B: '#forge:nuggets/invar',
                C: 'pneumaticcraft:logistics_core'
            },
            id: 'thermal:turbo_servo_attachment_2'
        },
        {
            output: '8x thermal:explosive_grenade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gunpowder',
                B: 'minecraft:sand',
                C: '#forge:nuggets/lead'
            },
            id: `${id_prefix}explosive_grenade`
        },
        {
            output: 'thermal:device_xp_condenser',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: '#forge:gears/silver',
                C: 'thermal:xp_crystal',
                D: 'ars_nouveau:blue_archwood_log',
                E: 'thermal:redstone_servo'
            },
            id: 'thermal:device_xp_condenser'
        },
        {
            output: 'thermal:slot_seal',
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:nuggets/aluminum',
                B: '#forge:plates/aluminum'
            },
            id: 'thermal:slot_seal'
        },
        {
            output: 'thermal:wrench',
            pattern: [' A ', ' BA', 'A  '],
            key: {
                A: '#forge:ingots/bronze',
                B: '#forge:gears/bronze'
            },
            id: 'thermal:tools/wrench'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
