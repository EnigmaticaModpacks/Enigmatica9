ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        // {
        //     outputs: { primary: { item: 'kubejs:amethyst_dust', count: 1, chance: 1.0 } },
        //     input: '#forge:gems/amethyst',
        //     experience: 0.2,
        //     duration: 20,
        //     energy: 1000,
        //     ignore_occultism_multiplier: true,
        //     id_suffix: `amethyst_dust_from_amethyst`
        // }
    ];

    const recipetypes_crushing = (event, recipe) => {
        // Mekanism
        event
            .custom({
                type: 'mekanism:crushing',
                input: { ingredient: Ingredient.of(recipe.input).toJson() },
                output: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson()
            })
            .id(`${id_prefix}mekanism_crushing/${recipe.id_suffix}`);

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
                input: Ingredient.of(recipe.input).toJson(),
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
                input: Ingredient.of(recipe.input).toJson(),
                output: outputs
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);

        // Create
        event
            .custom({
                type: 'create:milling',
                ingredients: [Ingredient.of(recipe.input).toJson()],
                results: outputs,
                processingTime: 50
            })
            .id(`${id_prefix}create_milling/${recipe.id_suffix}`);

        // Thermal
        event
            .custom({
                type: 'thermal:pulverizer',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: outputs,
                experience: recipe.experience
            })
            .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
