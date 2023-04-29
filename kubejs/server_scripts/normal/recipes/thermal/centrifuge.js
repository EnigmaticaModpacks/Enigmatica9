ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/centrifuge/';

    const recipes = [
        {
            input: Ingredient.of('#create:crushed_ores/netherite'),
            outputs: [
                Item.of(AlmostUnified.getPreferredItemForTag('forge:nuggets/netherite'), 6),
                {
                    item: AlmostUnified.getPreferredItemForTag('forge:nuggets/netherite').getId(),
                    chance: 0.25,
                    count: 3
                },
                { item: AlmostUnified.getPreferredItemForTag('forge:nuggets/gold').getId(), chance: 0.66, count: 6 }
            ],
            energy: 50000,
            id: `${id_prefix}netherite_centrifuging`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        recipe.ingredient = recipe.input.toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
