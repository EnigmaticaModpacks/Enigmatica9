ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/shaped/';

    const recipes = [
        {
            output: 'naturesaura:rf_converter',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/carminite',
                B: 'naturesaura:infused_iron',
                C: 'twilightforest:carminite_reactor'
            },
            id: `naturesaura:rf_converter`
        },
        {
            output: 'naturesaura:potion_generator',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'minecraft:nether_bricks',
                B: '#forge:ingots/electrum',
                C: 'naturesaura:infused_iron',
                D: '#forge:storage_blocks/source'
            },
            id: `naturesaura:potion_generator`
        },
        {
            output: 'naturesaura:color_changer',
            pattern: ['ABC', 'DED', ' D '],
            key: {
                A: '#forge:dyes/red',
                B: '#forge:dyes/yellow',
                C: '#forge:dyes/blue',
                D: 'naturesaura:infused_iron',
                E: 'ars_nouveau:water_essence'
            },
            id: `naturesaura:color_changer`
        },
        {
            output: 'naturesaura:spring',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:stone_bricks',
                B: 'ars_nouveau:water_essence',
                C: 'ars_nouveau:conjuration_essence'
            },
            id: `naturesaura:spring`
        },
        {
            output: '2x naturesaura:field_creator',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'ae2:charged_certus_quartz_crystal'
            },
            id: `naturesaura:field_creator`
        },
        {
            output: '4x naturesaura:calling_spirit',
            pattern: [' A ', 'BEC', ' D '],
            key: {
                A: 'ars_nouveau:air_essence',
                B: 'ars_nouveau:fire_essence',
                C: 'ars_nouveau:water_essence',
                D: 'ars_nouveau:earth_essence',
                E: '#forge:gems/moonstone'
            },
            id: `naturesaura:calling_spirit`
        },
        {
            output: 'naturesaura:projectile_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'naturesaura:infused_iron',
                C: '#forge:gems/nitro',
                D: '#forge:storage_blocks/source',
                E: 'quark:ender_watcher'
            },
            id: `naturesaura:projectile_generator`
        },
        {
            output: 'naturesaura:firework_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'naturesaura:infused_iron',
                C: '#forge:gems/nitro',
                D: '#forge:storage_blocks/source',
                E: 'minecraft:sculk_sensor'
            },
            id: `naturesaura:firework_generator`
        },
        {
            output: 'naturesaura:generator_limit_remover',
            pattern: ['ABA', 'DCE', 'AFA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ars_nouveau:air_essence',
                C: '#forge:gems/nitro',
                D: 'ars_nouveau:earth_essence',
                E: 'ars_nouveau:fire_essence',
                F: 'ars_nouveau:water_essence'
            },
            id: `naturesaura:generator_limit_remover`
        },
        {
            output: 'naturesaura:spawn_lamp',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'ae2:sky_stone_block',
                B: 'naturesaura:infused_iron',
                C: 'ae2:quartz_vibrant_glass',
                D: 'twilightforest:firefly_jar'
            },
            id: `naturesaura:spawn_lamp`
        },
        {
            output: 'naturesaura:powder_placer',
            pattern: ['ABA', 'CCC'],
            key: {
                A: 'naturesaura:gold_powder',
                B: 'ars_nouveau:manipulation_essence',
                C: 'naturesaura:infused_slab'
            },
            id: `naturesaura:powder_placer`
        },
        {
            output: 'naturesaura:weather_changer',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'naturesaura:infused_brick',
                B: 'minecraft:fire_charge',
                C: 'minecraft:dark_prismarine',
                D: 'quark:bottled_cloud',
                E: 'minecraft:sunflower',
                F: 'ars_nouveau:manipulation_essence'
            },
            id: `naturesaura:weather_changer`
        },
        {
            output: 'naturesaura:time_changer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_brick',
                B: '#forge:storage_blocks/sunstone',
                C: 'naturesaura:infused_iron',
                D: 'ars_nouveau:manipulation_essence',
                E: '#forge:storage_blocks/moonstone'
            },
            id: `naturesaura:time_changer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
