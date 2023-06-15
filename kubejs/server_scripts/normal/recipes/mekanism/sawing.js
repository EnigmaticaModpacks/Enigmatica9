ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/sawing/';

    const recipes = [
        {
            input: ['#minecraft:wooden_stairs'],
            output: '9x minecraft:stick',
            secondary: { output: sawdust, chance: 0.38 },
            id: `mekanism:sawing/stairs`
        },
        {
            input: ['#minecraft:wooden_slabs'],
            output: '3x minecraft:stick',
            secondary: { output: sawdust, chance: 0.13 },
            id: `mekanism:sawing/slabs`
        },
        {
            input: ['#forge:rods/wooden'],
            output: sawdust,
            id: `mekanism:sawing/stick`
        },
        {
            input: ['#minecraft:planks'],
            output: '6x minecraft:stick',
            secondary: { output: sawdust, chance: 0.25 },
            id: `mekanism:sawing/planks`
        },
        {
            input: ['naturesaura:ancient_log', 'naturesaura:ancient_bark'],
            output: '6x naturesaura:ancient_planks',
            secondary: { output: 'naturesaura:gold_powder', chance: 1.0 },
            id: `${id_prefix}ancient_planks_from_ancient_log`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            input: [input],
            output: output,
            secondary: { output: bark, chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Stripped
        input = material.wood.block;
        output = material.wood.stripped;
        recipes.push({
            input: [input],
            output: output,
            secondary: { output: bark, chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Stripped to Plank
        input = material.log.stripped;
        output = material.plank.block;
        recipes.push({
            input: [input, material.wood.stripped],
            output: Item.of(output, 6),
            secondary: { output: sawdust, chance: 0.25 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:sawing';
        recipe.input = { ingredient: recipe.input.map((input) => Ingredient.of(input).toJson()) };
        recipe.mainOutput = Item.of(recipe.output).toJson();
        if (recipe.secondary) {
            if (recipe.secondary.output) {
                recipe.secondaryOutput = Item.of(recipe.secondary.output).toJson();
            }
            if (recipe.secondary.chance) {
                recipe.secondaryChance = recipe.secondary.chance;
            }
        }
        event.custom(recipe).id(recipe.id);
    });
});
