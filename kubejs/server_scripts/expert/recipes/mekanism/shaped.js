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
                C: '#forge:plastic',
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
        {
            output: 'mekanism:chemical_crystallizer',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'ae2:quartz_growth_accelerator',
                B: 'mekanism:basic_chemical_tank',
                C: '#industrialforegoing:machine_frame/supreme',
                D: '#forge:gears/diamond',
                E: '#forge:essences/earth'
            },
            id: 'mekanism:chemical_crystallizer'
        },
        {
            output: 'mekanism:antiprotonic_nucleosynthesizer',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'spirit:soul_glass',
                B: 'mekanism:basic_chemical_tank',
                C: 'mekanism:supercharged_coil',
                D: 'ars_nouveau:arcane_core',
                E: '#forge:gears/diamond',
                F: '#forge:nether_stars'
            },
            id: 'mekanism:antiprotonic_nucleosynthesizer'
        },
        {
            output: 'mekanism:module_energy_unit',
            pattern: ['ABA', 'CDC', 'FBF'],
            key: {
                A: '#forge:gems/source',
                B: 'powah:capacitor_spirited',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_energy_unit'
        },
        {
            output: 'mekanism:module_gravitational_modulating_unit',
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:ingots/brass',
                B: 'ars_elemental:air_focus',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_gravitational_modulating_unit'
        },
        {
            output: 'mekanism:module_hydraulic_propulsion_unit',
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:essences/air',
                B: 'ars_nouveau:glyph_amplify',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_hydraulic_propulsion_unit'
        },
        {
            output: 'mekanism:module_hydrostatic_repulsor_unit',
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:essences/water',
                B: 'ars_nouveau:glyph_amplify',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_hydrostatic_repulsor_unit'
        },
        {
            output: 'mekanism:module_motorized_servo_unit',
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:essences/earth',
                B: 'ars_nouveau:glyph_amplify',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_motorized_servo_unit'
        },
        {
            output: 'mekanism:module_locomotive_boosting_unit',
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:essences/fire',
                B: 'ars_nouveau:glyph_amplify',
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: 'mekanism:module_locomotive_boosting_unit'
        },
        {
            output: 'mekanism:modification_station',
            pattern: ['ABC', 'DEF'],
            key: {
                A: 'supplementaries:crystal_display',
                B: '#forge:essences/manipulation',
                C: 'create:mechanical_arm',
                D: 'createaddition:electric_motor',
                E: 'immersiveengineering:circuit_table',
                F: 'create:sequenced_gearshift'
            },
            id: 'mekanism:modification_station'
        }
    ];

    const meka_tool_modules = [
        { module: 'mekanism:module_teleportation_unit', glyph: 'ars_nouveau:glyph_blink' },
        { module: 'mekanism:module_farming_unit', glyph: 'ars_nouveau:glyph_harvest' },
        { module: 'mekanism:module_shearing_unit', glyph: 'ars_nouveau:glyph_cut' },
        { module: 'mekanism:module_silk_touch_unit', glyph: 'ars_nouveau:glyph_extract' },
        { module: 'mekanism:module_attack_amplification_unit', glyph: 'ars_nouveau:glyph_harm' },
        { module: 'mekanism:module_fortune_unit', glyph: 'ars_nouveau:glyph_fortune' },
        { module: 'mekanism:module_blasting_unit', glyph: 'ars_nouveau:glyph_explosion' },
        { module: 'mekanism:module_excavation_escalation_unit', glyph: 'ars_nouveau:glyph_amplify' },
        { module: 'mekanism:module_vein_mining_unit', glyph: 'toomanyglyphs:glyph_chaining' },

        { module: 'mekanism:module_laser_dissipation_unit', glyph: 'ars_nouveau:glyph_intangible' },
        { module: 'mekanism:module_vision_enhancement_unit', glyph: 'ars_nouveau:glyph_light' },
        { module: 'mekanism:module_electrolytic_breathing_unit', glyph: 'ars_nouveau:glyph_evaporate' },
        { module: 'mekanism:module_frost_walker_unit', glyph: 'ars_nouveau:glyph_freeze' },
        { module: 'mekanism:module_nutritional_injection_unit', glyph: 'ars_nouveau:glyph_toss' },
        { module: 'mekanism:module_jetpack_unit', glyph: 'ars_nouveau:glyph_launch' },
        { module: 'mekanism:module_gyroscopic_stabilization_unit', glyph: 'ars_nouveau:glyph_underfoot' },
        { module: 'mekanism:module_elytra_unit', glyph: 'ars_nouveau:glyph_glide' },
        { module: 'mekanism:module_charge_distribution_unit', glyph: 'ars_nouveau:glyph_split' },
        { module: 'mekanism:module_magnetic_attraction_unit', glyph: 'ars_nouveau:glyph_pickup' }
    ];

    meka_tool_modules.forEach((recipe) => {
        recipes.push({
            output: recipe.module,
            pattern: ['ABA', 'CDC', 'FEF'],
            key: {
                A: '#forge:gems/source',
                B: recipe.glyph,
                C: '#forge:plates/aluminum',
                D: 'modularrouters:augment_core',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#forge:gears/osmium'
            },
            id: recipe.module
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
