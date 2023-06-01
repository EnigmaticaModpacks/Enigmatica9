ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/glyph/';
    const recipes = [
        {
            output: 'ars_nouveau:glyph_pickup',
            inputItems: [
                { item: { item: 'minecraft:lodestone' } },
                { item: { item: 'minecraft:lodestone' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
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
                { item: { tag: 'forge:ingots/depths' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 55,
            id: 'toomanyglyphs:glyph_chaining'
        },
        {
            output: 'ars_elemental:glyph_bubble_shield',
            inputItems: [
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'minecraft:prismarine_shard' } },
                { item: { item: 'ars_nouveau:bastion_pod' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 55,
            id: 'ars_elemental:glyph_bubble_shield'
        }
    ];

    // Add Antique Ink to every glyph
    event.forEachRecipe({ type: 'ars_nouveau:glyph' }, (r) => {
        let recipe = JSON.parse(r.json);
        recipe.inputItems.push({ item: { item: 'supplementaries:antique_ink' } });
        event.custom(recipe).id(r.getId());
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
