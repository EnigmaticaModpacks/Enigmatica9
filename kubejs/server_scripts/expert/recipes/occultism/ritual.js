ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        {
            output: 'ars_nouveau:wixie_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:witch_helmet',
                'twilightforest:torchberries',
                'twilightforest:raven_feather',
                'twilightforest:torchberries'
            ],
            ritual_dummy: 'kubejs:ritual_summon_wixie',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_wixie`
        },
        {
            output: 'ars_nouveau:wixie_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: ['ars_nouveau:wixie_shards'],
            ritual_dummy: 'kubejs:ritual_summon_wixie_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_wixie_from_shards`
        },
        {
            output: 'ars_nouveau:amethyst_golem_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: ['#forge:gems/amethyst', '#forge:gems/carminite', '#forge:gems/amethyst', '#forge:gems/carminite'],
            ritual_dummy: 'kubejs:ritual_summon_amethyst_golem',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_amethyst_golem`
        },
        {
            output: 'ars_nouveau:starbuncle_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                '#forge:raw_materials/gold',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'kubejs:ritual_summon_starbuncle',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_starbuncle`
        },
        {
            output: 'ars_nouveau:starbuncle_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: ['ars_nouveau:starbuncle_shards'],
            ritual_dummy: 'kubejs:ritual_summon_starbuncle_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_starbuncle_from_shards`
        },
        {
            output: Item.of(
                'hexerei:willow_broom',
                '{Inventory:{Items:[{Count:1b,Slot:0,id:"hexerei:gold_rings"},{Count:1b,Slot:1,id:"hexerei:small_satchel"},{Count:1b,Slot:2,id:"hexerei:broom_brush",tag:{Damage:0}}],Size:30}}'
            ),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:gold_rings',
                'hexerei:broom_brush',
                'ars_nouveau:air_essence',
                'hexerei:small_satchel',
                'hexerei:willow_log',
                'hexerei:willow_log'
            ],
            ritual_dummy: 'kubejs:ritual_craft_willow_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            entity_to_sacrifice: {
                tag: 'enigmatica:ravens',
                display_name: 'ritual.occultism.sacrifice.ravens'
            },
            id: `${id_prefix}ritual_craft_willow_broom`
        },

        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
        {
            output: 'kubejs:summon_death_tome',
            activation_item: '#forge:bookshelves',
            inputs: [
                'ars_elemental:anima_essence',
                'ars_nouveau:air_essence',
                'ars_elemental:anima_essence',
                'ars_nouveau:air_essence'
            ],
            ritual_dummy: 'kubejs:ritual_summon_death_tome',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_evil',
            duration: 10,
            id: `${id_prefix}ritual_summon_death_tome`
        },
        {
            output: Item.of('kubejs:aura_leaf', { aura_amount: 20000, aura_max: 1000000 }),
            activation_item: 'naturesaura:gold_leaf',
            inputs: [
                'ars_nouveau:conjuration_essence',
                'ars_nouveau:conjuration_essence',
                'ars_nouveau:conjuration_essence',
                'ars_nouveau:conjuration_essence'
            ],
            ritual_dummy: 'kubejs:aura_leaf',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:possess_foliot',
            duration: 10,
            id: `${id_prefix}ritual_aura_generation`
        },
        {
            output: Item.of('kubejs:tree_of_life_1', { aura_amount: 100000, aura_max: 1000000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_1',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_1`
        },
        {
            output: Item.of('kubejs:tree_of_life_2', { aura_amount: 200000, aura_max: 1000000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/silver',
                '#forge:storage_blocks/silver',
                '#forge:storage_blocks/silver',
                '#forge:storage_blocks/silver'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_2',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_2`
        },
        {
            output: Item.of('kubejs:tree_of_life_3', { aura_amount: 500000, aura_max: 1500000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_3',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_2',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_3`
        },
        {
            output: Item.of('kubejs:tree_of_life_4', { aura_amount: 4000000, aura_max: 4000000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/emerald',
                '#forge:storage_blocks/emerald',
                '#forge:storage_blocks/emerald',
                '#forge:storage_blocks/emerald'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_4',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_3',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_4`
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
