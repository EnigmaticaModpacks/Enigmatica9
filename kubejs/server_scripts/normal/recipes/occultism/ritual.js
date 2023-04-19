ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/ritual/';
    const recipes = [
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:foliot',
            spirit_job_type: 'occultism:crush_tier1',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_foliot',
            inputs: [
                '#forge:raw_materials/iron',
                '#forge:raw_materials/gold',
                '#forge:raw_materials/copper',
                '#forge:raw_materials/silver'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            id: 'occultism:ritual/summon_foliot_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:djinni',
            spirit_job_type: 'occultism:crush_tier2',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_djinni',
            inputs: ['#forge:dusts/iron', '#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'],
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_djinni',
            duration: 90,
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:afrit',
            spirit_job_type: 'occultism:crush_tier3',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_afrit',
            inputs: ['#forge:gems/diamond', '#forge:dusts/iesnium', '#forge:dusts/iesnium', '#forge:gems/emerald'],
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_afrit',
            duration: 120,
            id: 'occultism:ritual/summon_afrit_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:marid',
            spirit_job_type: 'occultism:crush_tier4',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_marid',
            inputs: [
                '#forge:storage_blocks/diamond',
                'minecraft:ghast_tear',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/emerald'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_marid_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_marid',
            duration: 150,
            id: 'occultism:ritual/summon_marid_crusher'
        },

        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            activation_item: '#forge:essences/anima',
            inputs: [
                'minecraft:wither_skeleton_skull',
                'minecraft:wither_skeleton_skull',
                'spirit:compressed_soul_powder_block',
                'minecraft:wither_skeleton_skull',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 10,
            id: `${id_prefix}wither_council_gate`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            activation_item: 'minecraft:skeleton_skull',
            inputs: [
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',

                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',

                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_wild_afrit',
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            duration: 10,
            id: `${id_prefix}wilden_grove_gate`
        }
    ];

    /*
        Ingredient Display in JEI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
