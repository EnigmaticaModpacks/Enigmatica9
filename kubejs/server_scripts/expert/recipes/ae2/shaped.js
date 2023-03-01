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
                C: 'ars_nouveau:water_essence'
            },
            id: `ae2:network/parts/export_bus`
        },
        {
            output: '2x ae2:import_bus',
            pattern: [' C ', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:logistics_core',
                C: 'ars_nouveau:water_essence'
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
                C: 'ars_nouveau:water_essence',
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
                C: 'ars_nouveau:water_essence',
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
