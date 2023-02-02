ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/';

    const recipes = [
        // Placeholder recipe. Iron will have different secondary. Almost Unified functions will be used for outputs.
        {
            outputs: { primary: 'create:crushed_iron_ore', secondary: 'create:crushed_tin_ore' },
            input: '#forge:raw_ores/iron',
            experience: 0.2,
            duration: 200,
            energy: 6000,
            crushing_tier: 3,
            occultism_multiplier: true,
            id_suffix: `crushed_iron_from_raw_ore`
        }
    ];

    const recipetypes_crushing = (event, recipe) => {
        if (recipe.crushing_tier <= 1) {
            let multiplier = 2;

            // Hexerei
            event
                .custom({
                    type: 'hexerei:pestle_and_mortar',
                    ingredients: [
                        Ingredient.of(recipe.input).toJson(),
                        Ingredient.of(recipe.input).toJson(),
                        Ingredient.of(recipe.input).toJson(),
                        Ingredient.of(recipe.input).toJson(),
                        Ingredient.of(recipe.input).toJson()
                    ],
                    output: {
                        item: recipe.outputs.primary,
                        count: 5 * multiplier
                    },
                    grindingTime: recipe.duration * 5
                })
                .id(`${id_prefix}hexerei_pestle_and_mortar/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 2) {
            let multiplier = 3;
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: multiplier,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: 1,
                    chance: 0.25
                });
            }

            // Ars Nouveau
            event
                .custom({
                    type: 'ars_nouveau:crush',
                    input: Ingredient.of(recipe.input).toJson(),
                    output: outputs
                })
                .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 3) {
            let multiplier = 3;
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: multiplier,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: 1,
                    chance: 0.25
                });
            }

            // Create
            event
                .custom({
                    type: 'create:crushing',
                    ingredients: [Ingredient.of(recipe.input).toJson()],
                    results: outputs,
                    processingTime: recipe.duration
                })
                .id(`${id_prefix}create_crushing/${recipe.id_suffix}`);

            // Occultism
            event
                .custom({
                    type: 'occultism:crushing',
                    ingredient: Ingredient.of(recipe.input).toJson(),
                    result: { item: recipe.outputs.primary, count: 2 },
                    min_tier: recipe.crushing_tier,
                    crushing_time: recipe.duration,
                    ignore_crushing_multiplier: recipe.occultism_multiplier
                })
                .id(`${id_prefix}occultism_crushing/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 4) {
            let multiplier = 4;

            let secondary_outputs = [];

            if (recipe.outputs.secondary) {
                secondary_outputs.push({
                    output: {
                        item: recipe.outputs.secondary,
                        count: 1
                    },
                    chance: 0.5
                });
            }

            // Immersive Engineering
            event
                .custom({
                    type: 'immersiveengineering:crusher',
                    energy: recipe.energy,
                    input: Ingredient.of(recipe.input).toJson(),
                    result: {
                        base_ingredient: { item: recipe.outputs.primary },
                        count: multiplier
                    },
                    secondaries: secondary_outputs
                })
                .id(`${id_prefix}immersiveengineering_crusher/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 5) {
            let multiplier = 2.25; // Pulverizer has massive catalysts, this does about 5x with the best
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: multiplier,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: 1,
                    chance: 0.5
                });
            }

            // Thermal
            event
                .custom({
                    type: 'thermal:pulverizer',
                    ingredient: Ingredient.of(recipe.input).toJson(),
                    energy: recipe.energy,
                    result: outputs,
                    experience: recipe.experience
                })
                .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);

            // Occultism
            event
                .custom({
                    type: 'occultism:crushing',
                    ingredient: Ingredient.of(recipe.input).toJson(),
                    result: { item: recipe.outputs.primary, count: 2 },
                    min_tier: 4,
                    crushing_time: recipe.duration,
                    ignore_crushing_multiplier: recipe.occultism_multiplier
                })
                .id(`${id_prefix}occultism_crushing/${recipe.id_suffix}`);
        }
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
