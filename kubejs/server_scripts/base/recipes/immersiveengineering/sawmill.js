ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/sawmill/';

    const recipes = [
        {
            energy: 512,
            input: ['naturesaura:ancient_log'],
            output: '6x naturesaura:ancient_planks',
            secondaries: [{ output: 'naturesaura:gold_powder', stripping: false }],
            id: `${id_prefix}ancient_planks_from_ancient_log`
        },
        {
            energy: 512,
            input: ['naturesaura:ancient_bark'],
            output: '6x naturesaura:ancient_planks',
            secondaries: [{ output: 'naturesaura:gold_powder', stripping: false }],
            id: `${id_prefix}ancient_planks_from_ancient_bark`
        },
        {
            energy: 512,
            input: ['#forge:rods/all_metal'],
            output: '8x ae2:cable_anchor',
            secondaries: [],
            id: `${id_prefix}cable_anchor`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Plank
        let output = material.plank.block,
            input = material.log.block;
        recipes.push({
            energy: 512,
            input: [input],
            output: `6x ${output}`,
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
            input: [input],
            output: `6x ${output}`,
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
        recipe.input = recipe.input.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
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
