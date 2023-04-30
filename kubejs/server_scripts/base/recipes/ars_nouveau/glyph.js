ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/glyph/';
    const recipes = [
        {
            output: 'ars_nouveau:glyph_fell',
            inputItems: [{ item: { item: 'ars_nouveau:earth_essence' } }, { item: { item: 'minecraft:golden_axe' } }],
            count: 1,
            exp: 55,
            id: 'ars_nouveau:glyph_fell'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
