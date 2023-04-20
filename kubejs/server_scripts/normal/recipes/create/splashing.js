ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:normal/create/splashing/';
    if (global.isNormalMode == false) {
        return;
    }

    let recipes = [
        {
            ingredients: [Ingredient.of('#create:crushed_ores/netherite', 1)],
            results: [
                Item.of('emendatusenigmatica:netherite_nugget', 3).toJson(),
                {
                    chance: 0.66,
                    count: 3,
                    item: 'emendatusenigmatica:netherite_nugget'
                },
                {
                    chance: 0.33,
                    count: 3,
                    item: 'emendatusenigmatica:netherite_nugget'
                }
            ],
            id: `${id_prefix}netherite_washing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:splashing';
        recipe.ingredients.map((ingredient) => ingredient.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
