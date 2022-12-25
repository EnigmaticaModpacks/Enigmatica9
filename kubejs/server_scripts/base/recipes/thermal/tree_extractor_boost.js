ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/tree_extractor_boost/';

    const recipes = [
        {
            ingredient: [
                { item: 'industrialforegoing:fertilizer' },
                { item: 'immersiveengineering:fertilizer' },
                { item: 'thermal:compost' }
            ],
            output: 1.7,
            cycles: 12,
            id: `${id_prefix}fertilizer`
        },
        {
            ingredient: [{ item: 'ars_nouveau:water_essence' }],
            output: 2.0,
            cycles: 24,
            id: `${id_prefix}water_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:tree_extractor_boost';
        event.custom(recipe).id(recipe.id);
    });
});
