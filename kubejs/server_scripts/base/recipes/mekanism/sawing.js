ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/sawing/';
    let sawdust = 'mekanism:sawdust', //AlmostUnified.getPreferredItemForTag('#forge:sawdust')
        bark = 'farmersdelight:tree_bark';

    const recipes = [
        /*
        {
            input: [Item.of('minecraft:oak_log')],
            mainOutput: Item.of('6x minecraft:stripped_oak_log'),
            secondary: { output: Item.of('farmersdelight:tree_bark'), chance: 1.0 },
            id: `${id_prefix}stripped_oak_log_from_oak_log`
        }
        */
    ];

    wood_properties.forEach((material) => {
        let input = material.log.block,
            output = material.log.stripped;

        // Log to Stripped
        recipes.push({
            input: [Item.of(input)],
            output: Item.of(`${output}`),
            secondary: { output: Item.of(bark), chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        input = material.wood.block;
        output = material.wood.stripped;
        // Wood to Stripped
        recipes.push({
            input: [Item.of(input)],
            output: Item.of(`${output}`),
            secondary: { output: Item.of(bark), chance: 1.0 },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        input = material.log.stripped;
        output = material.plank.block;

        // Stripped to Plank
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

        // secondaryOutput: { item: 'farmersdelight:tree_bark' },
        recipe.secondaryOutput = recipe.secondary.output.toJson();

        // secondaryChance: 0.25,
        recipe.secondaryChance = recipe.secondary.chance;

        event.custom(recipe).id(recipe.id);
    });
});
