ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/farmersdelight/cutting/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:glyphs' }],
            result: [{ item: 'ars_nouveau:blank_parchment' }],
            tool: { tag: 'forge:tools/knives' },
            id: `${id_prefix}recycle_glyphs_to_parchment`
        },
        {
            ingredients: [{ item: 'hexerei:belladonna_flower' }],
            result: [{ item: 'hexerei:belladonna_flowers' }, { item: 'hexerei:belladonna_berries' }],
            tool: { tag: 'forge:tools/knives' },
            id: `${id_prefix}process_belladonna_flower`
        },
        {
            ingredients: [{ item: 'hexerei:yellow_dock_bush' }],
            result: [{ item: 'hexerei:yellow_dock_flowers' }, { item: 'hexerei:yellow_dock_leaves' }],
            tool: { tag: 'forge:tools/knives' },
            id: `${id_prefix}process_yellow_dock_bush`
        },
        {
            ingredients: [{ item: 'hexerei:mugwort_bush' }],
            result: [{ item: 'hexerei:mugwort_flowers' }, { item: 'hexerei:mugwort_leaves' }],
            tool: { tag: 'forge:tools/knives' },
            id: `${id_prefix}process_mugwort_bush`
        },
        {
            ingredients: [{ item: 'hexerei:mandrake_flower' }],
            result: [{ item: 'hexerei:mandrake_flowers' }, { item: 'hexerei:mandrake_root' }],
            tool: { tag: 'forge:tools/knives' },
            id: `${id_prefix}process_mandrake_flower`
        },
        {
            ingredients: [{ item: 'minecraft:saddle' }],
            result: [{ item: 'minecraft:leather' }, { item: 'twilightforest:knightmetal_ingot', chance: 0.1 }],
            tool: { tag: 'forge:shears' },
            id: `farmersdelight:cutting/saddle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
