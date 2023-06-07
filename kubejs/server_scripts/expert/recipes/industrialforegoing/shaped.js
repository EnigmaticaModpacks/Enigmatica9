ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shaped/';

    const recipes = [
        {
            output: '2x industrialforegoing:machine_frame_simple',
            pattern: ['BDB', 'CAC', 'BEB'],
            key: {
                A: 'ae2:sky_stone_block',
                B: '#forge:ingots/compressed_iron',
                C: 'powah:capacitor_niotic',
                D: 'kubejs:energetic_transference_matrix',
                E: 'ae2:logic_processor'
            },
            id: `${id_prefix}machine_frame_simple`
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: [' B ', 'DAD', 'DCD'],
            key: {
                A: 'powah:energizing_rod_niotic',
                B: 'mekanism:teleportation_core',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#pneumaticcraft:plastic_sheets'
            },
            id: 'industrialforegoing:laser_drill'
        },
        {
            output: '4x industrialforegoing:hydroponic_bed',
            pattern: ['CBC', 'EAE', 'CFC'],
            key: {
                A: 'farmersdelight:rich_soil',
                B: '#forge:essences/water',
                C: '#pneumaticcraft:plastic_sheets',
                E: '#forge:ingots/infused_iron',
                F: '#forge:essences/earth'
            },
            id: 'industrialforegoing:hydroponic_bed'
        },
        {
            output: '4x industrialforegoing:mechanical_dirt',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:mycelium',
                B: '#forge:essences/conjuration',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:ingots/lead',
                F: '#forge:essences/anima'
            },
            id: 'industrialforegoing:mechanical_dirt'
        },
        {
            output: 'industrialforegoing:plant_sower',
            pattern: ['CBC', 'EAE', 'CFC'],
            key: {
                A: 'minecraft:flower_pot',
                B: '#forge:essences/abjuration',
                C: '#pneumaticcraft:plastic_sheets',
                E: '#forge:ingots/ironwood',
                F: '#forge:essences/earth'
            },
            id: 'industrialforegoing:plant_sower'
        },
        {
            output: 'industrialforegoing:plant_fertilizer',
            pattern: ['CBC', 'EAE', 'CFC'],
            key: {
                A: 'create:nozzle',
                B: '#forge:essences/air',
                C: '#pneumaticcraft:plastic_sheets',
                E: '#forge:ingots/ironwood',
                F: '#forge:essences/earth'
            },
            id: 'industrialforegoing:plant_fertilizer'
        },
        {
            output: 'industrialforegoing:plant_gatherer',
            pattern: ['CBC', 'EAE', 'CFC'],
            key: {
                A: Item.of('naturesaura:infused_iron_hoe', '{Damage:0}').weakNBT(),
                B: '#forge:essences/conjuration',
                C: '#pneumaticcraft:plastic_sheets',
                E: '#forge:ingots/ironwood',
                F: '#forge:essences/earth'
            },
            id: 'industrialforegoing:plant_gatherer'
        },
        {
            output: 'industrialforegoing:animal_rancher',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: Item.of('minecraft:shears', '{Damage:0}'),
                B: '#forge:essences/conjuration',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:ingots/ironwood',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'industrialforegoing:animal_rancher'
        },
        {
            output: 'industrialforegoing:animal_baby_separator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'supplementaries:gold_gate',
                B: 'mekanism:teleportation_core',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:ingots/ironwood',
                F: '#forge:gears/bronze'
            },
            id: 'industrialforegoing:animal_baby_separator'
        },
        {
            output: 'industrialforegoing:dye_mixer',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: 'thermal:fluid_cell_frame',
                B: 'create:whisk',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: 'industrialforegoing:dye_mixer'
        },
        {
            output: 'industrialforegoing:sewer',
            pattern: [' A ', 'CBC', ' D '],
            key: {
                A: 'pneumaticcraft:liquid_hopper',
                B: 'thermal:fluid_cell_frame',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: 'industrialforegoing:sewer'
        },
        {
            output: 'industrialforegoing:sewage_composter',
            pattern: [' A ', 'CBC', ' D '],
            key: {
                A: 'minecraft:composter',
                B: 'thermal:fluid_cell_frame',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: 'industrialforegoing:sewage_composter'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['CAC', 'BDB', 'EFE'],
            key: {
                A: 'pneumaticcraft:reinforced_chest',
                B: 'thermal:fluid_cell_frame',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:ingots/compressed_iron',
                F: '#forge:essences/manipulation'
            },
            id: 'industrialforegoing:dissolution_chamber'
        },
        {
            output: 'industrialforegoing:potion_brewer',
            pattern: [' A ', 'BCD', 'EFE'],
            key: {
                A: 'ars_nouveau:wixie_charm',
                B: 'enigmaticunity:dim_source_producer',
                C: 'compactmachines:machine_small',
                D: 'ars_nouveau:source_jar',
                E: ['ars_nouveau:arcane_pedestal', 'ars_nouveau:arcane_platform'],
                F: 'minecraft:cauldron'
            },
            id: 'industrialforegoing:potion_brewer'
        },
        {
            output: 'industrialforegoing:material_stonework_factory',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: '#forge:essences/manipulation',
                C: '#forge:essences/water',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:essences/fire',
                F: '#forge:gears/steel',
                G: '#forge:essences/earth'
            },
            id: 'industrialforegoing:material_stonework_factory'
        },
        {
            output: '2x industrialforegoing:item_transporter_type',
            pattern: [' AE', 'BCB', ' D '],
            key: {
                A: 'minecraft:hopper',
                B: '#forge:ingots/electrum',
                C: 'pneumaticcraft:logistics_core',
                D: '#forge:gems/source',
                E: '#forge:essences/air'
            },
            id: 'industrialforegoing:item_transporter_type'
        },
        {
            output: '2x industrialforegoing:fluid_transporter_type',
            pattern: [' AE', 'BCB', ' D '],
            key: {
                A: 'littlelogistics:fluid_hopper',
                B: '#forge:ingots/electrum',
                C: 'pneumaticcraft:logistics_core',
                D: '#forge:gems/source',
                E: '#forge:essences/air'
            },
            id: 'industrialforegoing:fluid_transporter_type'
        },
        {
            output: '2x industrialforegoing:world_transporter_type',
            pattern: [' AE', 'BCB', ' D '],
            key: {
                A: 'minecraft:dropper',
                B: '#forge:ingots/electrum',
                C: 'pneumaticcraft:logistics_core',
                D: '#forge:gems/source',
                E: '#forge:essences/air'
            },
            id: 'industrialforegoing:world_transporter_type'
        },
        {
            output: 'industrialforegoing:sludge_refiner',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:sand',
                B: 'thermal:fluid_cell_frame',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:gears/compressed_iron',
                F: 'immersiveengineering:furnace_heater'
            },
            id: 'industrialforegoing:sludge_refiner'
        },
        {
            output: 'industrialforegoing:marine_fisher',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'thermal:deep_aquachow',
                B: 'thermal:junk_net',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:gears/bronze',
                F: 'thermal:device_fisher'
            },
            id: 'industrialforegoing:marine_fisher'
        },
        {
            output: 'industrialforegoing:stasis_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'spirit:soul_glass',
                B: 'spirit:soul_pedestal',
                C: '#pneumaticcraft:plastic_sheets',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:gears/lead',
                F: '#forge:essences/anima'
            },
            id: 'industrialforegoing:stasis_chamber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
