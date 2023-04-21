ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/filling/';

    const recipes = [
        {
            results: [{ item: 'hexerei:blood_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                {
                    fluidTag: 'forge:blood',
                    amount: 250
                }
            ],
            id: `${id_prefix}blood_bottle`
        }
    ];
    // Move to sequenced assembly recipes so we can have multiple outputs

    // const simple_metals = ['copper', 'silver', 'gold', 'tin', 'horizonite', 'ventium', 'ventium', 'falsite'];

    // simple_metals.forEach((metal) => {
    //     let outputs = [{ item: `emendatusenigmatica:${metal}_dirty_dust`, count: 2 }];

    //     let secondary = metal_properties[metal].oreProcessing.expert_output.secondary;
    //     if (secondary == 'quartz') {
    //         outputs.push({ item: `emendatusenigmatica:${secondary}_dust`, chance: 0.25, count: 2 });
    //     } else {
    //         outputs.push({ item: `emendatusenigmatica:${secondary}_dirty_dust`, chance: 0.25 });
    //     }

    //     recipes.push({
    //         results: outputs,
    //         ingredients: [
    //             Ingredient.of(`#create:crushed_ores/${metal}`).toJson(),
    //             { fluidTag: 'forge:redstone_acid', amount: 25 }
    //         ],
    //         id: `${id_prefix}${metal}_dirty_dust_from_acid`
    //     });
    // });

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
