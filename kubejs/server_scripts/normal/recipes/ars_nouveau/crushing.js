ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/ars_nouveau/crushing/';
    const recipes = [
        // {
        //     input: '#my_mod:my_great_tag',
        //     outputs: [
        //         { item: "my_mod:my_item", count: 1, chance: 1 }
        //     ],
        //     id: `${id_prefix}my_awesome_id!`
        // }
        {
            input: '#forge:ores/netherite',
            output: [
                { item: 'minecraft:netherite_scrap', count: 1, chance: 1 },
                { item: 'minecraft:netherite_scrap', count: 1, chance: 0.75 }
            ],
            id: `${id_prefix}netherite_scrap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        recipe.input = Ingredient.of(recipe.input).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
