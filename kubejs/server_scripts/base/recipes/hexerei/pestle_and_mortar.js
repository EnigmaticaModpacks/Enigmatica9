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
                Item.of('minecraft:wheat'),
                Item.of('minecraft:wheat'),
                Item.of('minecraft:wheat'),
                Item.of('minecraft:wheat'),
                Item.of('minecraft:wheat')
            ],
            output: Item.of('create:wheat_flour', 6),
            grindingTime: 300
        },
        {
            inputs: [
                Item.of('minecraft:netherrack'),
                Item.of('minecraft:netherrack'),
                Item.of('minecraft:netherrack'),
                Item.of('minecraft:netherrack'),
                Item.of('minecraft:netherrack')
            ],
            output: Item.of('create:cinder_flour', 8),
            grindingTime: 300
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';

        // ingredients:  [{ item: 'minecraft:oak_log' }],
        recipe.ingredients = recipe.inputs.map((input) => input.toJson());

        // output: [{ count: 6, item: 'minecraft:oak_planks' }]
        recipe.output = recipe.output.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
