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
            result: 'kubejs:summon_death_tome',
            activation_item: '#forge:bookshelves',
            ingredients: [
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
        }
    ];

    /*
        Ingredient Display in JEI
            ingredients: [
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

        recipe.activation_item = recipe.activation_item.startsWith('#')
            ? Ingredient.of(recipe.activation_item).toJson()
            : Item.of(recipe.activation_item).toJson();

        if (recipe.item_to_use) {
            recipe.item_to_use = recipe.item_to_use.startsWith('#')
                ? Ingredient.of(recipe.item_to_use).toJson()
                : Item.of(recipe.item_to_use).toJson();
        }

        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();

        recipe.ingredients = recipe.ingredients.map((input) =>
            input.startsWith('#') ? Ingredient.of(input).toJson() : Item.of(input).toJson()
        );

        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
