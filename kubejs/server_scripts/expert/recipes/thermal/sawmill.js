ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/thermal/sawmill/';

    const recipes = [
        {
            ingredient: { item: 'occultism:dimensional_matrix' },
            result: [
                { item: 'kubejs:dimensional_storage_crystal', count: 27 },
                { item: 'ae2:certus_quartz_dust', chance: 1.0 }
            ],
            energy: 5000,
            id: `${id_prefix}dimensional_storage_crystal`
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
