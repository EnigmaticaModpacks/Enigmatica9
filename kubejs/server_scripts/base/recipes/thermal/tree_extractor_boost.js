ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/tree_extractor_boost/';

    var data = {
        recipes: [
            {
                ingredient: [
                    { item: 'industrialforegoing:fertilizer' },
                    { item: 'immersiveengineering:fertilizer' },
                    { item: 'thermal:compost' }
                ],
                output: 1.7,
                cycles: 12,
                id: `${id_prefix}fertilizer`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'thermal:tree_extractor_boost';
        event.custom(recipe).id(recipe.id);
    });
});
