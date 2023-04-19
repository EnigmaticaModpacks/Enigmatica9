ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/shaped/';

    const recipes = [
        {
            output: 'naturesaura:potion_generator',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'minecraft:nether_bricks',
                B: '#forge:ingots/electrum',
                C: '#forge:ingots/infused_iron',
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
                D: '#forge:ingots/infused_iron',
                E: '#forge:essences/water'
            },
            id: `naturesaura:color_changer`
        },
        {
            output: 'naturesaura:spring',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:stone_bricks',
                B: '#forge:essences/water',
                C: '#forge:essences/conjuration'
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
                A: '#forge:essences/air',
                B: '#forge:essences/fire',
                C: '#forge:essences/water',
                D: '#forge:essences/earth',
                E: '#forge:gems/moonstone'
            },
            id: `naturesaura:calling_spirit`
        },
        {
            output: 'naturesaura:projectile_generator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#forge:ingots/infused_iron',
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
                B: '#forge:ingots/infused_iron',
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
                B: '#forge:essences/air',
                C: '#forge:gems/nitro',
                D: '#forge:essences/earth',
                E: '#forge:essences/fire',
                F: '#forge:essences/water'
            },
            id: `naturesaura:generator_limit_remover`
        },
        {
            output: 'naturesaura:spawn_lamp',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'ae2:sky_stone_block',
                B: '#forge:ingots/infused_iron',
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
                B: '#forge:essences/manipulation',
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
                F: '#forge:essences/manipulation'
            },
            id: `naturesaura:weather_changer`
        },
        {
            output: 'naturesaura:time_changer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_brick',
                B: '#forge:storage_blocks/sunstone',
                C: '#forge:ingots/infused_iron',
                D: '#forge:essences/manipulation',
                E: '#forge:storage_blocks/moonstone'
            },
            id: `naturesaura:time_changer`
        },
        {
            output: '4x naturesaura:hopper_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#forge:ingots/infused_iron',
                C: 'minecraft:lodestone'
            },
            id: `naturesaura:hopper_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
