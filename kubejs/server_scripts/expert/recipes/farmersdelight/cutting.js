ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/farmersdelight/cutting/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:glyphs' }],
            result: [{ item: 'ars_nouveau:blank_parchment' }],
            tool: {
                tag: 'forge:tools/knives'
            },
            id: `${id_prefix}recycle_glyphs_to_parchment`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
