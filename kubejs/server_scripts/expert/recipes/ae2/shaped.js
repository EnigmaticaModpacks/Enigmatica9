ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shaped/';

    const recipes = [
        {
            output: 'ae2:energy_acceptor',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ae2:quartz_glass',
                C: '#forge:storage_blocks/source'
            },
            id: `ae2:network/blocks/energy_energy_acceptor`
        },
        {
            output: 'ae2:quartz_growth_accelerator',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ae2:quartz_glass',
                C: 'ae2:fluix_block',
                D: 'ae2:fluix_glass_cable'
            },
            id: `ae2:network/blocks/crystal_processing_quartz_growth_accelerator`
        },
        {
            output: '3x ae2:semi_dark_monitor',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: '#forge:dusts/glowstone',
                C: '#forge:dusts/redstone',
                D: 'naturesaura:infused_stone'
            },
            id: `ae2:network/parts/panels_semi_dark_monitor`
        },
        {
            output: 'ae2:interface',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'naturesaura:infused_stone',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `ae2:network/blocks/interfaces_interface`
        },
        {
            output: '3x ae2:annihilation_core',
            pattern: ['AAA', 'BCB'],
            key: {
                A: '#forge:gems/moonstone_crystal',
                B: '#forge:dusts/fluix',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `ae2:materials/annihilationcore`
        },
        {
            output: '3x ae2:formation_core',
            pattern: ['AAA', 'BCB'],
            key: {
                A: '#forge:gems/sunstone_crystal',
                B: '#forge:dusts/fluix',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `ae2:materials/formationcore`
        },
        {
            output: '2x ae2:export_bus',
            pattern: ['ABA', ' C '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:logistics_core',
                C: '#forge:essences/water'
            },
            id: `ae2:network/parts/export_bus`
        },
        {
            output: '2x ae2:import_bus',
            pattern: [' C ', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:logistics_core',
                C: '#forge:essences/water'
            },
            id: `ae2:network/parts/import_bus`
        },
        {
            output: 'ae2:formation_plane',
            pattern: [' BA'],
            key: {
                A: 'blue_skies:crystal_glass_pane',
                B: 'ae2:export_bus'
            },
            id: `${id_prefix}formation_plane`
        },
        {
            output: 'ae2:annihilation_plane',
            pattern: [' BA'],
            key: {
                A: 'blue_skies:midnight_glass_pane',
                B: 'ae2:import_bus'
            },
            id: `${id_prefix}annihilation_plane`
        },
        {
            output: 'ae2:pattern_provider',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:ingots/energized_steel',
                C: 'ae2:quartz_glass'
            },
            id: `ae2:network/blocks/pattern_providers_interface`
        },
        {
            output: 'ae2:molecular_assembler',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: 'quark:rainbow_rune',
                B: '#forge:ingots/compressed_iron',
                C: 'ae2:annihilation_core',
                D: 'ae2:quartz_glass',
                E: 'ae2:formation_core'
            },
            id: `ae2:network/crafting/molecular_assembler`
        },
        {
            output: 'ae2:me_p2p_tunnel',
            pattern: [' BA', 'CDA', ' BA'],
            key: {
                A: '#forge:gems/fluix',
                B: '#forge:ingots/compressed_iron',
                C: '#forge:essences/water',
                D: 'occultism:stable_wormhole'
            },
            id: `ae2:network/parts/tunnels_me`
        },
        {
            output: 'ae2:me_p2p_tunnel',
            pattern: [' BA', 'CDA', ' BA'],
            key: {
                A: '#forge:gems/fluix',
                B: '#forge:ingots/compressed_iron',
                C: '#forge:essences/water',
                D: 'occultism:stable_wormhole'
            },
            id: `ae2:network/parts/tunnels_me`
        },
        {
            output: '6x ae2:quartz_fixture',
            pattern: [' B ', 'AAA', ' B '],
            key: {
                A: 'ae2:charged_certus_quartz_crystal',
                B: '#forge:ingots/compressed_iron'
            },
            id: `ae2:decorative/quartz_fixture`
        },
        {
            output: '6x ae2:light_detector',
            pattern: [' B ', 'AAA', ' B '],
            key: {
                A: '#forge:gems/quartz',
                B: '#forge:ingots/compressed_iron'
            },
            id: `ae2:decorative/light_detector`
        },
        {
            output: '4x ae2:level_emitter',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:dusts/redstone',
                B: 'ae2:quartz_fixture'
            },
            id: `ae2:network/parts/level_emitter`
        },
        {
            output: '4x ae2:energy_level_emitter',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#forge:dusts/fluix',
                B: 'ae2:quartz_fixture'
            },
            id: `ae2:network/parts/energy_level_emitter`
        },
        {
            output: 'ae2:cell_component_1k',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:sky_dust',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'naturesaura:sky_ingot'
            },
            id: `ae2:network/cells/item_storage_components_cell_1k_part`
        },
        {
            output: 'ae2:cell_component_4k',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'ae2:sky_dust',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'ae2:cell_component_1k',
                D: 'naturesaura:sky_ingot'
            },
            id: `ae2:network/cells/item_storage_components_cell_4k_part`
        },
        {
            output: 'ae2:cell_component_16k',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'ae2:sky_dust',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'ae2:cell_component_4k',
                D: 'naturesaura:sky_ingot'
            },
            id: `ae2:network/cells/item_storage_components_cell_16k_part`
        },
        {
            output: 'ae2:cell_component_64k',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'ae2:sky_dust',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'ae2:cell_component_16k',
                D: 'naturesaura:sky_ingot'
            },
            id: `ae2:network/cells/item_storage_components_cell_64k_part`
        },
        {
            output: 'ae2:cell_component_256k',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'ae2:sky_dust',
                B: 'kubejs:dimensional_storage_crystal',
                C: 'ae2:cell_component_64k',
                D: 'naturesaura:sky_ingot'
            },
            id: `ae2:network/cells/item_storage_components_cell_256k_part`
        },
        {
            output: 'ae2:printed_logic_processor',
            pattern: ['AB ', 'CDC', ' B '],
            key: {
                A: 'occultism:purified_ink',
                B: 'quark:orange_rune',
                C: 'quark:yellow_rune',
                D: 'ae2:printed_silicon'
            },
            id: `${id_prefix}printed_logic_processor`
        },
        {
            output: 'ae2:printed_calculation_processor',
            pattern: ['AB ', 'CDC', ' B '],
            key: {
                A: 'occultism:purified_ink',
                B: 'quark:light_blue_rune',
                C: 'quark:blue_rune',
                D: 'ae2:printed_silicon'
            },
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            output: 'ae2:printed_engineering_processor',
            pattern: ['AB ', 'CDC', ' B '],
            key: {
                A: 'occultism:purified_ink',
                B: 'quark:cyan_rune',
                C: 'quark:lime_rune',
                D: 'ae2:printed_silicon'
            },
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            output: 'ae2:biometric_card',
            pattern: ['ABC', 'DDD'],
            key: {
                A: '#forge:plastic',
                B: 'minecraft:ender_eye',
                C: 'quark:rainbow_rune',
                D: '#forge:nuggets/gold'
            },
            id: 'ae2:tools/network_biometric_card'
        },
        {
            output: 'ae2:memory_card',
            pattern: ['ABC', 'DDD'],
            key: {
                A: '#forge:plastic',
                B: 'ars_nouveau:experience_gem',
                C: 'quark:rainbow_rune',
                D: '#forge:nuggets/gold'
            },
            id: 'ae2:tools/network_memory_card'
        },
        {
            output: 'ae2:entropy_manipulator',
            pattern: [' AB', ' CD', 'C  '],
            key: {
                A: '#forge:essences/manipulation',
                B: '#forge:gems/fluix',
                C: 'naturesaura:ancient_stick',
                D: 'ae2:energy_cell'
            },
            id: 'ae2:tools/misctools_entropy_manipulator'
        },
        {
            output: 'ae2:wireless_receiver',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'ae2:fluix_pearl',
                B: '#forge:ingots/skies',
                C: 'ae2:quartz_fiber'
            },
            id: 'ae2:network/wireless_part'
        },
        {
            output: 'ae2:spatial_cell_component_2',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:fluix_pearl',
                B: 'kubejs:dimensional_storage_crystal',
                C: '#forge:ingots/skies'
            },
            id: 'ae2:network/cells/spatial_components'
        },
        {
            output: 'ae2:spatial_cell_component_16',
            pattern: ['ABD', 'BCB', 'DBA'],
            key: {
                A: 'ae2:fluix_pearl',
                B: 'kubejs:dimensional_storage_crystal',
                C: '#forge:ingots/skies',
                D: 'ae2:spatial_cell_component_2'
            },
            id: 'ae2:network/cells/spatial_components_0'
        },
        {
            output: 'ae2:spatial_cell_component_128',
            pattern: ['ABD', 'BCB', 'DBA'],
            key: {
                A: 'ae2:fluix_pearl',
                B: 'kubejs:dimensional_storage_crystal',
                C: '#forge:ingots/skies',
                D: 'ae2:spatial_cell_component_16'
            },
            id: 'ae2:network/cells/spatial_components_1'
        },
        {
            output: 'ae2:chest',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'ae2:terminal',
                B: 'ae2:fluix_glass_cable',
                C: 'ars_nouveau:repository'
            },
            id: 'ae2:network/blocks/storage_chest'
        },
        {
            output: 'ae2:spatial_anchor',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'ae2:spatial_pylon',
                B: 'ae2:fluix_glass_cable',
                C: 'ae2:spatial_cell_component_128',
                D: '#forge:ingots/skies',
                E: 'pneumaticcraft:logistics_core'
            },
            id: 'ae2:network/blocks/spatial_anchor'
        },
        {
            output: 'ae2:spatial_io_port',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'ae2:fluix_glass_cable',
                C: 'ae2:io_port',
                D: '#forge:ingots/skies',
                E: 'pneumaticcraft:logistics_core'
            },
            id: 'ae2:network/blocks/spatial_io_port'
        },
        {
            output: 'ae2:energy_cell',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:planks/archwood',
                B: 'powah:capacitor_basic_large',
                C: '#forge:storage_blocks/certus_quartz'
            },
            id: 'ae2:network/blocks/energy_energy_cell'
        },
        {
            output: '2x ae2:quantum_ring',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: 'mekanism:teleportation_core',
                C: 'pneumaticcraft:logistics_core',
                D: '#ae2:smart_dense_cable'
            },
            id: 'ae2:network/blocks/quantum_ring'
        },
        {
            output: 'ae2:cell_workbench',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: '#forge:fabrics/woven',
                B: '#forge:gems/certus_quartz',
                C: 'ars_nouveau:repository',
                D: 'naturesaura:infused_stone'
            },
            id: 'ae2:network/blocks/cell_workbench'
        },
        {
            output: 'ae2:security_station',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'ae2:fluix_glass_cable',
                B: 'supplementaries:key',
                C: '#forge:plates/bronze',
                D: 'ae2:chest'
            },
            id: 'ae2:network/blocks/security_station'
        },
        {
            output: 'ae2:io_port',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'ae2:drive',
                C: 'ae2:fluix_glass_cable',
                D: 'naturesaura:infused_stone',
                E: '#forge:essences/manipulation'
            },
            id: 'ae2:network/blocks/io_port'
        },
        {
            output: 'ae2:drive',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#forge:ingots/skies',
                B: 'ae2:fluix_glass_cable',
                C: 'ars_nouveau:repository',
                D: 'naturesaura:infused_stone',
                E: 'pneumaticcraft:logistics_core'
            },
            id: 'ae2:network/blocks/storage_drive'
        },
        {
            output: '3x ae2:blank_pattern',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'ars_nouveau:blank_parchment',
                C: 'occultism:purified_ink',
                D: '#forge:plates/aluminum'
            },
            id: 'ae2:network/crafting/patterns_blank'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
