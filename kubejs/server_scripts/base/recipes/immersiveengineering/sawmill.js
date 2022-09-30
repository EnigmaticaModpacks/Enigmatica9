ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/sawmill/';

    let sawdust = 'mekanism:sawdust', //AlmostUnified.getPreferredItemForTag('#forge:sawdust')
        bark = 'farmersdelight:tree_bark';

    const recipes = [
        /*
        {
            energy: 512,
            input: Item.of('minecraft:oak_log'),
            output: Item.of('6x minecraft:oak_planks'),
            secondaries: [
                { output: bark, stripping: true },
                { output: sawdust, stripping: false }
            ],
            stripped: Item.of('minecraft:stripped_oak_log'),
            id: `${id_prefix}oak_planks_from_oak_log`
        }
        */
    ];

    wood_properties.forEach((material) => {
        let output = material.plank.block,
            input = material.log.block;

        // Log to Plank
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

        // input: [{ item: 'minecraft:oak_log' }, { item: 'minecraft:oak_wood' }]
        recipe.input = recipe.input.map((input) => input.toJson());

        // result: { count: 6, item: 'minecraft:oak_planks' }
        recipe.result = recipe.output.toJson();

        // secondaries: [
        //     { output: { tag: 'forge:dusts/wood' }, stripping: true },
        //     { output: { tag: 'forge:dusts/wood' }, stripping: false }
        // ]
        recipe.secondaries = recipe.secondaries.map((secondary) => ({
            output: { item: secondary.output },
            stripping: secondary.stripping
        }));

        // stripped: { item: 'minecraft:stripped_oak_log' }
        recipe.stripped = recipe.stripped.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
