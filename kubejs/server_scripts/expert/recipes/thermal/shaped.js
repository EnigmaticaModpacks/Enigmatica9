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
                B: 'ae2:quartz_glass',
                C: '#forge:gears/bronze'
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
            output: '2x thermal:upgrade_augment_1',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/obsidian',
                B: '#forge:gears/compressed_iron',
                C: 'immersiveengineering:component_electronic'
            },
            id: `${id_prefix}upgrade_augment_1`
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
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:nuggets/lead',
                B: 'thermal:beekeeper_fabric'
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
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:plates/bronze',
                B: 'thermal:cured_rubber',
                C: 'starbunclemania:fluid_jar'
            },
            id: 'thermal:fluid_reservoir'
        },
        {
            output: 'thermal:machine_furnace',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'naturesaura:furnace_heater',
                C: '#forge:ingots/infused_iron',
                D: 'minecraft:furnace',
                E: 'naturesaura:infused_brick',
                F: '#forge:essences/fire'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plates/obsidian',
                B: 'naturesaura:furnace_heater',
                C: '#forge:ingots/fiery',
                D: 'minecraft:blast_furnace',
                E: 'naturesaura:infused_brick',
                F: '#forge:gems/pyrope'
            },
            id: 'thermal:machine_smelter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
