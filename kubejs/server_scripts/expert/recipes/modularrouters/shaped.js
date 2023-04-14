ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/modularrouters/shaped/';
    const recipes = [
        {
            output: 'modularrouters:blank_module',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'quark:rainbow_rune',
                B: 'pneumaticcraft:logistics_core',
                C: '#forge:plastic'
            },
            id: 'modularrouters:blank_module'
        },
        {
            output: 'modularrouters:blank_upgrade',
            pattern: ['AAC', 'ABC', ' AC'],
            key: {
                A: 'quark:rainbow_rune',
                B: 'pneumaticcraft:logistics_core',
                C: '#forge:plastic'
            },
            id: 'modularrouters:blank_upgrade'
        },
        {
            output: 'modularrouters:modular_router',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#forge:ingots/infused_iron',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:modular_router'
        },
        {
            output: 'modularrouters:player_module',
            pattern: ['ABC'],
            key: {
                A: 'modularrouters:puller_module_2',
                B: 'occultism:stable_wormhole',
                C: 'modularrouters:sender_module_2'
            },
            id: 'modularrouters:player_module'
        },
        {
            output: 'modularrouters:sender_module_1',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:ingots/steeleaf',
                B: 'modularrouters:blank_module',
                C: 'minecraft:hopper'
            },
            id: 'modularrouters:sender_module_1'
        },
        {
            output: 'modularrouters:puller_module_1',
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/steeleaf',
                B: 'modularrouters:blank_module',
                C: 'minecraft:hopper'
            },
            id: 'modularrouters:puller_module_1'
        },
        {
            output: 'modularrouters:sender_module_2',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: 'blue_skies:soul_fragment',
                B: 'modularrouters:blank_module',
                C: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'modularrouters:sender_module_2'
        },
        {
            output: 'modularrouters:puller_module_2',
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: 'blue_skies:soul_fragment',
                B: 'modularrouters:blank_module',
                C: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'modularrouters:puller_module_2'
        },
        {
            output: 'modularrouters:sender_module_3',
            pattern: [' D ', 'ABA', ' C '],
            key: {
                A: 'blue_skies:soul_fragment',
                B: 'modularrouters:blank_module',
                C: 'pneumaticcraft:omnidirectional_hopper',
                D: 'mekanism:teleportation_core'
            },
            id: 'modularrouters:sender_module_3'
        },
        {
            output: 'modularrouters:distributor_module',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'blue_skies:soul_fragment',
                B: 'modularrouters:blank_module',
                C: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'modularrouters:distributor_module'
        },
        {
            output: 'modularrouters:fluid_module',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'littlelogistics:fluid_hopper',
                B: '#forge:ingots/steeleaf',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:fluid_module'
        },
        {
            output: 'modularrouters:fluid_module_2',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'pneumaticcraft:liquid_hopper',
                B: 'blue_skies:soul_fragment',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:fluid_module_2'
        },
        {
            output: 'modularrouters:vacuum_module',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'minecraft:lodestone',
                B: '#forge:ingots/steeleaf',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:vacuum_module'
        },
        {
            output: 'modularrouters:energy_distributor_module',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'blue_skies:soul_fragment',
                B: 'powah:energizing_rod_basic',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:energy_distributor_module'
        },
        {
            output: 'modularrouters:energy_output_module',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/steeleaf',
                B: 'powah:capacitor_basic_large',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:energy_output_module'
        },
        {
            output: '3x modularrouters:speed_upgrade',
            pattern: [' A ', 'ABA', 'CCC'],
            key: {
                A: '#forge:essences/air',
                B: 'modularrouters:blank_upgrade',
                C: '#forge:gems/fluix'
            },
            id: 'modularrouters:speed_upgrade'
        },
        {
            output: '3x modularrouters:fluid_upgrade',
            pattern: [' A ', 'ABA', 'CCC'],
            key: {
                A: '#forge:essences/water',
                B: 'modularrouters:blank_upgrade',
                C: '#forge:gems/fluix'
            },
            id: 'modularrouters:fluid_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
