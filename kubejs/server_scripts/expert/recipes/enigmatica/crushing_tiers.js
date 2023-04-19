ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/';
    // Tiers range from 1-4, with 4 being the highest
    const recipes = [
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_iron_ore',
                secondary: 'emendatusenigmatica:crushed_nickel_ore'
            },
            input: '#forge:raw_ores/iron',
            experience: 0.2,
            duration: 200,
            energy: 6000,
            crushing_tier: 3,
            ignore_multiplier: false,
            id_suffix: `iron_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_copper_ore',
                secondary: 'emendatusenigmatica:crushed_tin_ore'
            },
            input: '#forge:raw_ores/copper',
            experience: 0.2,
            duration: 100,
            energy: 3000,
            crushing_tier: 1,
            ignore_multiplier: false,
            id_suffix: `copper_crushed_ore_from_raw_ore`
        },
        {
            outputs: { primary: 'emendatusenigmatica:copper_dirty_dust' },
            input: '#mekanism:clumps/copper',
            experience: 0.2,
            duration: 100,
            energy: 3000,
            crushing_tier: 1,
            ignore_multiplier: true,
            id_suffix: `copper_clump_from_dirty_dust`
        }
    ];

    // Todo: Update Metal and Gem properties to include crushing tier, make loop for all of this based on that. Pending completion of EE setup by Kanz

    const recipetypes_crushing = (event, recipe) => {
        if (recipe.crushing_tier <= 1) {
            let multiplier = recipe.ignore_multiplier ? 1 : 2;

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
            let multiplier = recipe.ignore_multiplier ? 1 : 3;
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
            let multiplier = recipe.ignore_multiplier ? 1 : 3;
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
        }

        if (recipe.crushing_tier <= 4) {
            // Immersive Engineering
            let multiplier = recipe.ignore_multiplier ? 1 : 4;
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

            // Thermal
            multiplier = recipe.ignore_multiplier ? 1 : 2.25; // Pulverizer has massive catalysts, this does about 5x with the best
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

            event
                .custom({
                    type: 'thermal:pulverizer',
                    ingredient: Ingredient.of(recipe.input).toJson(),
                    energy: recipe.energy,
                    result: outputs,
                    experience: recipe.experience
                })
                .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
        }
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
