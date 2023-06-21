ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/sawmill/';

    const recipes = [
        {
            energy: 512,
            input: [Item.of('naturesaura:ancient_log')],
            output: Item.of('naturesaura:ancient_planks', 6),
            secondaries: [{ output: 'naturesaura:gold_powder', stripping: false }],
            id: `${id_prefix}ancient_planks_from_ancient_log`
        },
        {
            energy: 512,
            input: [Item.of('naturesaura:ancient_bark')],
            output: Item.of('naturesaura:ancient_planks', 6),
            secondaries: [{ output: 'naturesaura:gold_powder', stripping: false }],
            id: `${id_prefix}ancient_planks_from_ancient_bark`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Plank
        let output = material.plank.block,
            input = material.log.block;
        recipes.push({
            energy: 512,
            input: [Item.of(input)],
            output: Item.of(output, 6),
            secondaries: [
                { output: bark, stripping: true },
                { output: sawdust, stripping: false }
            ],
            stripped: Item.of(material.log.stripped),
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Plank
        input = material.wood.block;
        recipes.push({
            energy: 512,
            input: [Item.of(input)],
            output: Item.of(output, 6),
            secondaries: [
                { output: bark, stripping: true },
                { output: sawdust, stripping: false }
            ],
            stripped: Item.of(material.wood.stripped),
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:sawmill';
        recipe.input = recipe.input.map((input) => input.toJson());
        recipe.result = recipe.output.toJson();
        recipe.secondaries = recipe.secondaries.map((secondary) => ({
            output: { item: secondary.output },
            stripping: secondary.stripping
        }));
        if (recipe.stripped) {
            recipe.stripped = recipe.stripped.toJson();
        }
        event.custom(recipe).id(recipe.id);
    });
});
