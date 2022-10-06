ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const time_multiplier = 10,
        id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';

    const recipes = [
        {
            output: '8x twilightforest:ironwood_ingot',
            ingredients: [
                'twilightforest:raw_ironwood',
                'twilightforest:raw_ironwood',
                'twilightforest:raw_ironwood',
                'twilightforest:raw_ironwood',
                'ars_nouveau:earth_essence',
                'ars_nouveau:fire_essence',
                'ars_nouveau:earth_essence',
                'ars_nouveau:fire_essence'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: `${id_prefix}ironwood_ingot`
        }
        /*
            ,
            {
                ingredients: [
                    item, //top
                    item, //bottom
                    item, //left
                    item, //right

                    item, //topleft
                    item, //bottomright
                    item, //topright
                    item //bottomleft
                output: 'naturesaura:oak_generator',
                sapling: 'quark:yellow_blossom_sapling',
                id: 'naturesaura:oak_generator'
            }
            */
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';

        // ingredients: [{ item: 'minecraft:oak_sapling' }, { tag: '#minecraft:small_flowers' }],
        recipe.ingredients = recipe.ingredients.map((input) =>
            input.startsWith('#') ? Ingredient.of(input).toJson() : Item.of(input).toJson()
        );

        // sapling: { item: 'minecraft:oak_sapling' },
        recipe.sapling = Item.of(recipe.sapling).toJson();

        // output: { item: 'naturesaura:ancient_sapling', count: 2 },
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
