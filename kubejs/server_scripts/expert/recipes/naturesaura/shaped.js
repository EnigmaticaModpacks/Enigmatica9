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
            output: 'naturesaura:generator_limit_remover',
            pattern: ['ABA', 'DCE', 'AFA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'kubejs:mote_of_wisdom',
                C: '#forge:gems/infused_diamond',
                D: 'kubejs:mote_of_enduring',
                E: 'kubejs:mote_of_rebirth',
                F: 'kubejs:mote_of_renewal'
            },
            id: `naturesaura:generator_limit_remover`
        },
        {
            output: 'naturesaura:lower_limiter',
            pattern: ['ABA', 'DCE', 'AFA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#forge:essences/air',
                C: '#forge:gems/source',
                D: '#forge:essences/earth',
                E: '#forge:essences/fire',
                F: '#forge:essences/water'
            },
            id: `naturesaura:lower_limiter`
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
                B: 'minecraft:clock',
                C: '#forge:ingots/infused_iron',
                D: '#forge:essences/manipulation',
                E: 'twilightforest:moon_dial'
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
        },
        {
            output: 'naturesaura:mover_cart',
            pattern: ['ABA', ' C '],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'minecraft:lodestone',
                C: 'minecraft:minecart'
            },
            id: `naturesaura:mover_cart`
        },
        {
            output: 'naturesaura:ender_crate',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'occultism:otherstone',
                B: 'minecraft:oxeye_daisy',
                C: 'minecraft:honey_bottle',
                D: 'minecraft:ender_chest'
            },
            id: `naturesaura:ender_crate`
        },
        {
            output: 'naturesaura:ender_access',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'occultism:burnt_otherstone',
                B: 'minecraft:oxeye_daisy',
                C: 'minecraft:honey_bottle',
                D: 'minecraft:ender_chest'
            },
            id: `naturesaura:ender_access`
        },
        {
            output: 'naturesaura:animal_spawner',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:essences/conjuration',
                B: '#forge:gems/source',
                C: 'spirit:broken_spawner',
                D: 'minecraft:hay_block'
            },
            id: `naturesaura:animal_spawner`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
