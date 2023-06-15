ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/sawmill/';

    const recipes = [
        {
            input: 'minecraft:melon',
            outputs: [
                { item: 'minecraft:melon_slice', count: 8 },
                { item: 'minecraft:melon_seeds', chance: 0.25 }
            ],
            energy: 800,
            id: `${id_prefix}melon_slice`
        },
        {
            input: 'thermal:frost_melon',
            outputs: [
                { item: 'thermal:frost_melon_slice', count: 8 },
                { item: 'thermal:frost_melon_seeds', chance: 0.25 }
            ],
            energy: 800,
            id: `${id_prefix}frost_melon_slice`
        },
        {
            input: 'naturesaura:ancient_log',
            outputs: [
                { item: 'naturesaura:ancient_planks', count: 6 },
                { item: 'naturesaura:gold_powder', chance: 1.1 }
            ],
            energy: 1000,
            id: `${id_prefix}ancient_planks_from_ancient_log`
        },
        {
            input: 'naturesaura:ancient_bark',
            outputs: [
                { item: 'naturesaura:ancient_planks', count: 6 },
                { item: 'naturesaura:gold_powder', chance: 1.1 }
            ],
            energy: 1000,
            id: `${id_prefix}ancient_planks_from_ancient_bark`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            input: input,
            outputs: [
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
            input: input,
            outputs: [
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
            input: [input, material.wood.stripped],
            outputs: [
                { item: output, count: 6 },
                { item: sawdust, chance: 0.5 }
            ],
            energy: 1000,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:sawmill';
        recipe.ingredients = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
