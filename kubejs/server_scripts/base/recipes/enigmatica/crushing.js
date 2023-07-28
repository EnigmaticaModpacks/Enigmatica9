ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        {
            outputs: { primary: { item: 'immersiveengineering:slag_gravel', count: 1, chance: 1.0 } },
            input: '#forge:slag',
            experience: 0.2,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `slag_gravel`
        }
    ];

    const recipetypes_crushing = (event, recipe) => {
        // Immersive Engineering
        let immersiveengineering_secondaries = [];
        if (recipe.outputs.secondary) {
            immersiveengineering_secondaries.push({
                chance: recipe.outputs.secondary.chance,
                output: Item.of(recipe.outputs.secondary.item, recipe.outputs.secondary.count).toJson()
            });
        }
        if (recipe.outputs.tertiary) {
            immersiveengineering_secondaries.push({
                chance: recipe.outputs.tertiary.chance,
                output: Item.of(recipe.outputs.tertiary.item, recipe.outputs.tertiary.count).toJson()
            });
        }
        event
            .custom({
                type: 'immersiveengineering:crusher',
                energy: recipe.energy,
                input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                result: { base_ingredient: { item: recipe.outputs.primary.item }, count: recipe.outputs.primary.count },
                secondaries: immersiveengineering_secondaries
            })
            .id(`${id_prefix}immersiveengineering_crusher/${recipe.id_suffix}`);

        let outputs = [recipe.outputs.primary];

        if (recipe.outputs.secondary) {
            outputs.push(recipe.outputs.secondary);
        }

        if (recipe.outputs.tertiary) {
            outputs.push(recipe.outputs.tertiary);
        }

        // Ars Nouveau
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                output: outputs
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);

        // Create
        event
            .custom({
                type: 'create:milling',
                ingredients: [recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }],
                results: outputs,
                processingTime: 50
            })
            .id(`${id_prefix}create_milling/${recipe.id_suffix}`);

        // Thermal
        event
            .custom({
                type: 'thermal:pulverizer',
                ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                result: outputs,
                experience: recipe.experience
            })
            .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
