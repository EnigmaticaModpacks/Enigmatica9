ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
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
            ritual_dummy: Item.of('kubejs:aura_leaf'),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:possess_foliot',
            duration: 10,
            id: `${id_prefix}aura_ritual`
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

        // activation_item: { item: 'occultism:book_of_binding_bound_marid' },
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();

        if (recipe.item_to_use) {
            // item_to_use: { item: 'minecraft:egg' },
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }

        // ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier4' },
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();

        // ingredients: [{ item: 'occultism:storage_stabilizer_tier3' }, { tag: 'forge:storage_blocks/iesnium' }],
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        // result: { item: 'occultism:storage_stabilizer_tier4' }
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
