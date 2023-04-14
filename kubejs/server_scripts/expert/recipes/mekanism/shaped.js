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
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plates/obsidian',
                B: 'pneumaticcraft:heat_sink',
                C: '#forge:ingots/fiery',
                D: 'immersiveengineering:furnace_heater',
                E: 'naturesaura:infused_brick',
                F: '#forge:gems/pyrope'
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

        // Placeholder recipes

        {
            output: 'mekanism:laser',
            pattern: ['AB ', 'ACD', 'AB '],
            key: {
                A: '#forge:alloys/elite',
                B: 'powah:capacitor_spirited',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:gems/diamond'
            },
            id: 'mekanism:laser'
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#forge:glass/colorless',
                B: '#forge:circuits/basic',
                C: 'mekanism:basic_chemical_tank',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'mekanism:basic_fluid_tank'
            },
            id: 'mekanism:rotary_condensentrator'
        },
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
        },
        {
            output: 'mekanism:robit',
            pattern: [' A ', 'BCB', 'AAA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'powah:capacitor_spirited',
                C: '#forge:alloys/ultimate'
            },
            id: 'mekanism:robit'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
