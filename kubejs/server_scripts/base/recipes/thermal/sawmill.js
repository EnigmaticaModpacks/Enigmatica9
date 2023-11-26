ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/sawmill/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:melon' },
            result: [
                { item: 'minecraft:melon_slice', count: 8 },
                { item: 'minecraft:melon_seeds', chance: 0.25 }
            ],
            energy: 800,
            id: `${id_prefix}melon_slice`
        },
        {
            ingredient: { item: 'thermal:frost_melon' },
            result: [
                { item: 'thermal:frost_melon_slice', count: 8 },
                { item: 'thermal:frost_melon_seeds', chance: 0.25 }
            ],
            energy: 800,
            id: `${id_prefix}frost_melon_slice`
        },
        {
            ingredient: { item: 'naturesaura:ancient_log' },
            result: [
                { item: 'naturesaura:ancient_planks', count: 6 },
                { item: 'naturesaura:gold_powder', chance: 1.1 }
            ],
            energy: 1000,
            id: `${id_prefix}ancient_planks_from_ancient_log`
        },
        {
            ingredient: { item: 'naturesaura:ancient_bark' },
            result: [
                { item: 'naturesaura:ancient_planks', count: 6 },
                { item: 'naturesaura:gold_powder', chance: 1.1 }
            ],
            energy: 1000,
            id: `${id_prefix}ancient_planks_from_ancient_bark`
        },
        {
            ingredient: { tag: 'forge:rods/all_metal' },
            result: [{ item: 'ae2:cable_anchor', count: 8 }],
            energy: 1000,
            id: `${id_prefix}cable_anchor`
        },
        {
            ingredient: { tag: 'forge:bookshelves' },
            result: [
                { item: 'minecraft:book', count: 3 },
                { item: sawdust, chance: 1 }
            ],
            energy: 1000,
            id: `${id_prefix}book_from_bookshelves`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            ingredient: { item: input },
            result: [
                { item: output, count: 1 },
                { item: bark, chance: 1.25 }
            ],
            energy: 1000,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Stripped
        input = material.wood.block;
        output = material.wood.stripped;
        recipes.push({
            ingredient: { item: input },
            result: [
                { item: output, count: 1 },
                { item: bark, chance: 1.25 }
            ],
            energy: 1000,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Stripped to Plank
        input = material.log.stripped;
        output = material.plank.block;
        recipes.push({
            ingredient: [{ item: input }],
            result: [
                { item: output, count: 6 },
                { item: sawdust, chance: 0.5 }
            ],
            energy: 1000,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        input = material.wood.stripped;
        output = material.plank.block;
        recipes.push({
            ingredient: [{ item: input }],
            result: [
                { item: output, count: 6 },
                { item: sawdust, chance: 0.5 }
            ],
            energy: 1000,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:sawmill';
        event.custom(recipe).id(recipe.id);
    });
});
