ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/hexerei/pestle_and_mortar/';

    const recipes = [
        /*
        {
            inputs: [
                Item.of('hexerei:belladonna_flowers'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:sage')
            ],
            output: Item.of('hexerei:mindful_trance_blend'),
            grindingTime: 300
        }
        */
        {
            inputs: [
                Ingredient.of('minecraft:wheat'),
                Ingredient.of('minecraft:wheat'),
                Ingredient.of('minecraft:wheat'),
                Ingredient.of('minecraft:wheat'),
                Ingredient.of('minecraft:wheat')
            ],
            output: Item.of('create:wheat_flour', 6),
            grindingTime: 300,
            id: `${id_prefix}wheat_flour`
        },
        {
            inputs: [
                Ingredient.of('minecraft:netherrack'),
                Ingredient.of('minecraft:netherrack'),
                Ingredient.of('minecraft:netherrack'),
                Ingredient.of('minecraft:netherrack'),
                Ingredient.of('minecraft:netherrack')
            ],
            output: Item.of('create:cinder_flour', 8),
            grindingTime: 300,
            id: `${id_prefix}cinder_flour`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => input.toJson());
        recipe.output = recipe.output.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
