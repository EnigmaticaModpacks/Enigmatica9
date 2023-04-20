ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:normal/create/crushing_wheels/';
    if (global.isNormalMode == false) {
        return;
    }

    let recipes = [
        {
            ingredients: [Ingredient.of(`#forge:ores/netherite`, 1)],
            processingTime: 480,
            results: [
                { item: 'emendatusenigmatica:crushed_netherite_ore' },
                { item: 'emendatusenigmatica:crushed_gold_ore', chance: 0.66 }
            ],
            id: `${id_prefix}crushed_netherite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:crushing';
        recipe.ingredients.map((ingredient) => ingredient.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
