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
        },
        {
            output: 'toomanyglyphs:glyph_chaining',
            inputItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:chain' } },
                { item: { item: 'minecraft:chain' } },
                { item: { item: 'minecraft:chain' } },
                { item: { tag: 'forge:ingots/depths' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:ingots/depths' } }
            ],
            count: 1,
            exp: 55,
            id: `${id_prefix}glyph_chaining`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
