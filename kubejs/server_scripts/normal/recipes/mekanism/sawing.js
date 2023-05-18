ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/sawing/';

    const recipes = [
        {
            input: [Ingredient.of('#minecraft:wooden_stairs')],
            output: Item.of('minecraft:stick', 9),
            secondary: { output: Item.of(sawdust), chance: 0.38 },
            id: `mekanism:sawing/stairs`
        },
        {
            input: [Ingredient.of('#minecraft:wooden_slabs')],
            output: Item.of('minecraft:stick', 3),
            secondary: { output: Item.of(sawdust), chance: 0.13 },
            id: `mekanism:sawing/slabs`
        },
        {
            input: [Ingredient.of('#forge:rods/wooden')],
            output: Item.of(sawdust),
            id: `mekanism:sawing/stick`
        },
        {
            input: [Ingredient.of('#minecraft:planks')],
            output: Item.of('minecraft:stick', 6),
            secondary: { output: Item.of(sawdust), chance: 0.25 },
            id: `mekanism:sawing/planks`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            input: [Item.of(input)],
            output: Item.of(output),
            secondary: { output: Item.of(bark), chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Stripped
        input = material.wood.block;
        output = material.wood.stripped;
        recipes.push({
            input: [Item.of(input)],
            output: Item.of(output),
            secondary: { output: Item.of(bark), chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Stripped to Plank
        input = material.log.stripped;
        output = material.plank.block;
        recipes.push({
            input: [Item.of(input), Item.of(material.wood.stripped)],
            output: Item.of(output, 6),
            secondary: { output: Item.of(sawdust), chance: 0.25 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:sawing';
        // input: { ingredient: [{ item: 'minecraft:oak_log' }] },
        recipe.input = { ingredient: recipe.input.map((input) => input.toJson()) };
        // mainOutput: { count: 6, item: 'minecraft:oak_planks' }
        recipe.mainOutput = recipe.output.toJson();
        if (recipe.secondary) {
            if (recipe.secondary.output) {
                // secondaryOutput: { item: 'farmersdelight:tree_bark' },
                recipe.secondaryOutput = recipe.secondary.output.toJson();
            }
            if (recipe.secondary.chance) {
                // secondaryChance: 0.25,
                recipe.secondaryChance = recipe.secondary.chance;
            }
        }
        event.custom(recipe).id(recipe.id);
    });
});
