ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/glyph/';
    const recipes = [
        {
            output: 'ars_nouveau:glyph_pickup',
            inputItems: [{ item: { item: 'minecraft:lodestone' } }, { item: { item: 'minecraft:lodestone' } }],
            count: 1,
            exp: 27,
            id: `ars_nouveau:glyph_pickup`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
