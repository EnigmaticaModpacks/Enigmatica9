ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:craft',
            activation_item: 'minecraft:golden_apple',
            pentacle_id: 'occultism:summon_foliot',
            duration: 5,
            ritual_dummy: 'kubejs:summon_death_tome',
            ingredients: [
                'minecraft:ghast_tear',
                'minecraft:ghast_tear',
                'minecraft:ghast_tear',
                'minecraft:ghast_tear'
            ],
            result: 'kubejs:summon_death_tome',
            id: `${id_prefix}summon_death_tome`
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
