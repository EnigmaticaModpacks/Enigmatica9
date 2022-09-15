ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/sawmill/';
    const recipes = [];

    wood_properties.forEach((wood_property) => {
        let sawdust = 'mekanism:sawdust',
            bark = 'farmersdelight:tree_bark',
            output = wood_property.plank.block,
            input_log = wood_property.log.block,
            input_wood = wood_property.wood.block;

        recipes.push(
            // Log to Plank
            {
                energy: 512,
                input: [{ item: input_log }],
                result: { count: 6, item: output },
                secondaries: [
                    { output: { item: bark }, stripping: true },
                    { output: { item: sawdust }, stripping: false }
                ],
                stripped: { item: wood_property.log.stripped },
                id: `${id_prefix}${output.split(':')[1]}_from_${input_log.split(':')[1]}`
            },
            // Wood to Plank
            {
                energy: 512,
                input: [{ item: input_wood }],
                result: { count: 6, item: output },
                secondaries: [
                    { output: { item: bark }, stripping: true },
                    { output: { item: sawdust }, stripping: false }
                ],
                stripped: { item: wood_property.wood.stripped },
                id: `${id_prefix}${output.split(':')[1]}_from_${input_wood.split(':')[1]}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:sawmill';
        event.custom(recipe).id(recipe.id);
    });
});
