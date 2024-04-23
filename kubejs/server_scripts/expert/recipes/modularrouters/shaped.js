ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/modularrouters/shaped/';
    const recipes = [
        {
            output: '3x modularrouters:blank_module',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'quark:rainbow_rune',
                B: 'pneumaticcraft:logistics_core',
                C: '#pneumaticcraft:plastic_sheets'
            },
            id: 'modularrouters:blank_module'
        },
        {
            output: '3x modularrouters:blank_upgrade',
            pattern: ['AAC', 'ABC', ' AC'],
            key: {
                A: 'quark:rainbow_rune',
                B: 'pneumaticcraft:logistics_core',
                C: '#pneumaticcraft:plastic_sheets'
            },
            id: 'modularrouters:blank_upgrade'
        },
        {
            output: 'modularrouters:modular_router',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#forge:plates/signalum',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:modular_router'
        },
        {
            output: '2x modularrouters:player_module',
            pattern: ['BAC', 'DED', 'CAB'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'occultism:wormhole_frame',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:player_module'
        },
        {
            output: '4x modularrouters:sender_module_1',
            pattern: ['CAC', 'DED', 'BAB'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/silver',
                C: '#forge:ingots/infused_iron',
                D: 'minecraft:hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:sender_module_1'
        },
        {
            output: '4x modularrouters:puller_module_1',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/silver',
                C: '#forge:ingots/infused_iron',
                D: 'minecraft:hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:puller_module_1'
        },
        {
            output: '4x modularrouters:sender_module_2',
            pattern: ['CAC', 'DED', 'BAB'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:sender_module_2'
        },
        {
            output: '4x modularrouters:puller_module_2',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:puller_module_2'
        },
        {
            output: '4x modularrouters:sender_module_3',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'mekanism:teleportation_core',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:sender_module_3'
        },
        {
            output: '4x modularrouters:distributor_module',
            pattern: ['BAC', 'DED', 'CAB'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:distributor_module'
        },
        {
            output: '4x modularrouters:fluid_module',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/silver',
                C: '#forge:ingots/infused_iron',
                D: 'littlelogistics:fluid_hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:fluid_module'
        },
        {
            output: '4x modularrouters:fluid_module_2',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'pneumaticcraft:liquid_hopper',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:fluid_module_2'
        },
        {
            output: '2x modularrouters:vacuum_module',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:gems/source',
                B: 'minecraft:lodestone',
                C: 'modularrouters:blank_module'
            },
            id: 'modularrouters:vacuum_module'
        },
        {
            output: 'modularrouters:energy_distributor_module',
            pattern: ['BAB', 'DED', 'CAC'],
            key: {
                A: '#forge:gems/source',
                B: '#forge:ingots/sky',
                C: '#forge:ingots/infused_iron',
                D: 'powah:energizing_rod_basic',
                E: 'modularrouters:blank_module'
            },
            id: 'modularrouters:energy_distributor_module'
        },
        {
            output: 'modularrouters:energy_output_module',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/source',
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
        },
        {
            output: 'modularrouters:bulk_item_filter',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gems/certus_quartz',
                B: '#forge:glass/colorless',
                C: 'modularrouters:blank_module',
                D: '#forge:essences/manipulation'
            },
            id: 'modularrouters:bulk_item_filter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
