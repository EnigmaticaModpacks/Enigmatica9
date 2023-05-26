ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/shaped/';

    const recipes = [
        {
            output: '8x mekanism:teleporter_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/infused_iron',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'mekanism:teleporter_frame'
        },
        {
            output: 'mekanism:teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'travelanchors:travel_anchor',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:teleporter'
        },
        {
            output: 'mekanism:portable_teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'supplementaries:crystal_display',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:portable_teleporter'
        },
        {
            output: 'mekanism:network_reader',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:gems/source',
                B: 'powah:blank_card',
                C: 'powah:capacitor_basic_large'
            },
            id: 'mekanism:network_reader'
        },
        {
            output: 'mekanism:configurator',
            pattern: ['  A', ' B ', 'C  '],
            key: {
                A: '#forge:rods/all_metal',
                B: '#forge:gems/source',
                C: 'powah:capacitor_basic_large'
            },
            id: 'mekanism:configurator'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:plates/obsidian',
                B: 'pneumaticcraft:heat_sink',
                C: '#forge:ingots/fiery',
                D: 'immersiveengineering:furnace_heater',
                E: 'naturesaura:infused_brick'
            },
            id: 'mekanism:resistive_heater'
        },
        {
            output: 'mekanism:chargepad',
            pattern: ['  A', 'BCB', 'DDD'],
            key: {
                A: 'powah:capacitor_basic_large',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:essences/earth',
                D: 'pneumaticcraft:compressed_stone_slab'
            },
            id: 'mekanism:chargepad'
        },
        {
            output: 'mekanism:chemical_oxidizer',
            pattern: ['CBE', 'ADA', 'FBF'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:essences/air',
                C: 'pneumaticcraft:reinforced_chest',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'mekanism:basic_chemical_tank',
                F: '#forge:plates/obsidian'
            },
            id: 'mekanism:chemical_oxidizer'
        },
        {
            output: 'mekanism:chemical_infuser',
            pattern: ['EBE', 'ACA', 'DED'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:ingots/fiery',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:plates/obsidian',
                E: 'mekanism:basic_chemical_tank'
            },
            id: 'mekanism:chemical_infuser'
        },
        {
            output: 'mekanism:basic_chemical_tank',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'pneumaticcraft:safety_tube_module',
                B: '#forge:plates/osmium',
                C: 'pneumaticcraft:air_canister'
            },
            id: `${id_prefix}basic_chemical_tank`
        },
        {
            output: 'mekanism:basic_fluid_tank',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'create:fluid_valve',
                B: '#forge:plates/steel',
                C: 'thermal:fluid_cell_frame'
            },
            id: `${id_prefix}basic_fluid_tank`
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['EBF', 'ACA', 'DBD'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: 'pneumaticcraft:turbine_rotor',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:plates/obsidian',
                E: 'mekanism:basic_chemical_tank',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'mekanism:rotary_condensentrator'
        },
        {
            output: '2x mekanism:sps_port',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'mekanism:sps_casing',
                B: 'ae2:spatial_pylon',
                C: '#industrialforegoing:machine_frame/supreme',
                D: 'ae2:spatial_anchor'
            },
            id: 'mekanism:sps_port'
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['EBE', 'CDC', 'AFA'],
            key: {
                A: '#forge:gears/steel',
                B: '#forge:essences/manipulation',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:plates/obsidian',
                F: '#forge:essences/abjuration'
            },
            id: 'mekanism:enrichment_chamber'
        },
        {
            output: 'mekanism:pressurized_reaction_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/steel',
                B: '#forge:essences/earth',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'mekanism:basic_chemical_tank',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'mekanism:pressurized_reaction_chamber'
        },
        {
            output: 'mekanism:laser_tractor_beam',
            pattern: ['B', 'A'],
            key: {
                A: 'pneumaticcraft:smart_chest',
                B: 'mekanism:laser_amplifier'
            },
            id: 'mekanism:laser_tractor_beam'
        },
        {
            output: 'mekanism:laser_amplifier',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/steel',
                B: '#forge:gems/infused_diamond',
                C: 'thermal:machine_frame'
            },
            id: 'mekanism:laser_amplifier'
        },
        {
            output: 'mekanism:basic_tier_installer',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/compressed_iron',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'immersiveengineering:component_electronic',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: `${id_prefix}basic_tier_installer`
        },
        {
            output: 'mekanism:advanced_tier_installer',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/osmium',
                B: 'ae2:spatial_cell_component_2',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: `${id_prefix}advanced_tier_installer`
        },
        {
            output: 'mekanism:elite_tier_installer',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/diamond',
                B: 'ae2:spatial_cell_component_2',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced'
            },
            id: `${id_prefix}elite_tier_installer`
        },
        {
            output: 'mekanism:ultimate_tier_installer',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/netherite',
                B: 'ae2:spatial_cell_component_2',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/supreme'
            },
            id: `${id_prefix}ultimate_tier_installer`
        },

        // Placeholder recipes

        {
            output: 'mekanism:meka_tool',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:circuits/ultimate',
                B: 'mekanism:configurator',
                C: 'mekanism:hdpe_sheet',
                D: '#forge:alloys/ultimate',
                E: '#forge:pellets/polonium',
                F: 'powah:capacitor_spirited'
            },
            id: 'mekanism:meka_tool'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
