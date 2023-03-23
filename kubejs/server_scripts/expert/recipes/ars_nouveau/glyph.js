ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/glyph/';
    const recipes = [
        // {
        //     output: 'ars_nouveau:glyph_glide',
        //     inputItems: [
        //         { item: { item: 'ars_nouveau:air_essence' } },
        //         { item: { item: 'immersiveengineering:glider' } },
        //         { item: { tag: 'forge:gems/diamond' } },
        //         { item: { tag: 'forge:gems/diamond' } },
        //         { item: { tag: 'forge:gems/diamond' } }
        //     ],
        //     count: 1,
        //     exp: 160,
        //     id: `ars_nouveau:glyph_glide`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
