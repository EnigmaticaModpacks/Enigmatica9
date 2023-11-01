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
        },
        {
            output: 'ars_nouveau:glyph_lightning',
            inputItems: [
                { item: { tag: 'forge:essences/air' } },
                { item: { item: 'minecraft:lightning_rod' } },
                { item: { item: 'minecraft:lightning_rod' } },
                { item: { item: 'minecraft:lightning_rod' } },
                { item: { item: 'minecraft:conduit' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 160,
            id: 'ars_nouveau:glyph_lightning'
        },
        {
            output: 'ars_scalaes:glyph_shrink',
            inputItems: [
                { item: { tag: 'forge:essences/manipulation' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:nuggets/lead' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 160,
            id: 'ars_scalaes:glyph_shrink'
        },
        {
            output: 'ars_nouveau:glyph_fell',
            inputItems: [
                { item: { tag: 'forge:essences/earth' } },
                { item: { item: 'twilightforest:steeleaf_axe' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 27,
            id: 'ars_nouveau:glyph_fell'
        },
        {
            output: 'ars_nouveau:glyph_harvest',
            inputItems: [
                { item: { tag: 'forge:essences/earth' } },
                { item: { item: 'twilightforest:steeleaf_hoe' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 27,
            id: 'ars_nouveau:glyph_harvest'
        },
        {
            output: 'ars_nouveau:glyph_cut',
            inputItems: [
                { item: { tag: 'forge:essences/manipulation' } },
                { item: { item: 'minecraft:shears' } },
                { item: { item: 'twilightforest:steeleaf_sword' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 27,
            id: 'ars_nouveau:glyph_cut'
        },
        {
            output: 'ars_elemental:glyph_phantom_grasp',
            inputItems: [
                { item: { tag: 'forge:essences/anima' } },
                {
                    item: [
                        { item: 'twilightforest:phantom_helmet' },
                        { item: 'twilightforest:phantom_chestplate' },
                        { item: 'twilightforest:knight_phantom_trophy' }
                    ]
                },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 55,
            id: 'ars_elemental:glyph_phantom_grasp'
        },
        {
            output: 'ars_nouveau:glyph_hex',
            inputItems: [
                { item: { tag: 'forge:essences/anima' } },
                { item: { item: 'hexerei:belladonna_berries' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 160,
            id: 'ars_nouveau:glyph_hex'
        },
        {
            output: 'ars_nouveau:glyph_break',
            inputItems: [
                { item: { item: 'immersiveengineering:drillhead_steel' } },
                { item: { tag: 'forge:essences/earth' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 55,
            id: 'ars_nouveau:glyph_break'
        }
    ];

    // Add Antique Ink to every glyph
    event.forEachRecipe({ type: 'ars_nouveau:glyph' }, (r) => {
        let found = recipes.some((recipe) => recipe.id === r.getId());
        let recipe = JSON.parse(r.json);
        recipe.inputItems.push({ item: { item: 'supplementaries:antique_ink' } });
        if (!found) event.custom(recipe).id(r.getId());
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
