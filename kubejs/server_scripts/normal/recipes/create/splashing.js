ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:normal/create/splashing/';
    if (global.isNormalMode == false) {
        return;
    }

    let recipes = [
        {
            ingredients: [Item.of('mekanism:dirty_netherite_scrap')],
            results: [
                Item.of('minecraft:netherite_scrap', 1).toJson(),
                {
                    chance: 0.33,
                    count: 1,
                    item: 'minecraft:netherite_scrap'
                },
                {
                    chance: 0.33,
                    count: 1,
                    item: 'emendatusenigmatica:gold_dirty_dust'
                }
            ],
            id: `${id_prefix}netherite_washing`
        }
    ];

    Object.keys(metal_properties).forEach((key) => {
        if (Item.exists(`emendatusenigmatica:${key}_dirty_dust`)) {
            recipes.push({
                ingredients: [Ingredient.of(`#mekanism:dirty_dusts/${key}`)],
                results: [Item.of(`emendatusenigmatica:${key}_dust`, 1).toJson()],
                id: `${id_prefix}dirty_${key}_dust`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:splashing';
        recipe.ingredients.map((ingredient) => ingredient.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
