ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:normal/create/crushing_wheels/';

    let recipes = [
        {
            ingredients: [Ingredient.of(`#forge:ores/netherite`, 1)],
            processingTime: 480,
            results: [
                AlmostUnified.getPreferredItemForTag(`create:crushed_ores/netherite`),
                {
                    item: AlmostUnified.getPreferredItemForTag('create:crushed_ores/gold').getId(),
                    chance: 0.66
                }
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
