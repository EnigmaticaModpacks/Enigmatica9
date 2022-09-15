ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/sawing/';
    const recipes = [];

    wood_properties.forEach((wood_property) => {
        let sawdust = 'mekanism:sawdust',
            bark = 'farmersdelight:tree_bark';

        recipes.push(
            // Log to Stripped
            {
                input: { ingredient: [{ item: wood_property.log.block }] },
                mainOutput: { count: 6, item: wood_property.log.stripped },
                secondaryChance: 1.0,
                secondaryOutput: { item: bark },
                id: `${id_prefix}${wood_property.log.stripped.split(':')[1]}_from_${
                    wood_property.log.block.split(':')[1]
                }`
            },
            // Wood to Stripped
            {
                input: { ingredient: [{ item: wood_property.wood.block }] },
                mainOutput: { count: 6, item: wood_property.wood.stripped },
                secondaryChance: 1.0,
                secondaryOutput: { item: bark },
                id: `${id_prefix}${wood_property.wood.stripped.split(':')[1]}_from_${
                    wood_property.wood.block.split(':')[1]
                }`
            },
            // Stripped to Plank
            {
                input: { ingredient: [{ item: wood_property.log.stripped, item: wood_property.wood.stripped }] },
                mainOutput: { count: 6, item: wood_property.plank.block },
                secondaryChance: 0.25,
                secondaryOutput: { item: sawdust },
                id: `${id_prefix}${wood_property.plank.block.split(':')[1]}_from_${
                    wood_property.log.stripped.split(':')[1]
                }`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:sawing';
        event.custom(recipe).id(recipe.id);
    });
});
