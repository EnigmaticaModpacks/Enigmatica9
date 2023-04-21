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
                secondary: 'emendatusenigmatica:crushed_tin_ore',
                tertiary: 'emendatusenigmatica:raw_iron'
            },
            input: '#forge:raw_materials/iron',
            crushing_tier: metal_properties['iron'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `iron_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_copper_ore',
                secondary: 'emendatusenigmatica:crushed_nickel_ore',
                tertiary: 'emendatusenigmatica:raw_copper'
            },
            input: '#forge:raw_materials/copper',
            crushing_tier: metal_properties['copper'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `copper_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_tin_ore',
                secondary: 'emendatusenigmatica:quartz_dust',
                secondary_amount: 3,
                tertiary: 'emendatusenigmatica:raw_tin'
            },
            input: '#forge:raw_materials/tin',
            crushing_tier: metal_properties['tin'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `tin_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_gold_ore',
                secondary: 'emendatusenigmatica:crushed_copper_ore',
                tertiary: 'emendatusenigmatica:raw_gold'
            },
            input: '#forge:raw_materials/gold',
            crushing_tier: metal_properties['gold'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `gold_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_silver_ore',
                secondary: 'emendatusenigmatica:crushed_lead_ore',
                tertiary: 'emendatusenigmatica:raw_silver'
            },
            input: '#forge:raw_materials/silver',
            crushing_tier: metal_properties['silver'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `silver_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_horizonite_ore',
                secondary: 'emendatusenigmatica:crushed_copper_ore',
                tertiary: 'emendatusenigmatica:raw_horizonite'
            },
            input: '#forge:raw_materials/horizonite',
            crushing_tier: metal_properties['horizonite'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `horizonite_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_ventium_ore',
                secondary: 'emendatusenigmatica:crushed_nickel_ore',
                tertiary: 'emendatusenigmatica:raw_ventium'
            },
            input: '#forge:raw_materials/ventium',
            crushing_tier: metal_properties['ventium'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `ventium_crushed_ore_from_raw_ore`
        },
        {
            outputs: {
                primary: 'emendatusenigmatica:crushed_falsite_ore',
                secondary: 'emendatusenigmatica:crushed_osmium_ore',
                tertiary: 'emendatusenigmatica:raw_falsite'
            },
            input: '#forge:raw_materials/falsite',
            crushing_tier: metal_properties['falsite'].crushing_tier,
            ignore_multiplier: false,
            id_suffix: `falsite_crushed_ore_from_raw_ore`
        }
    ];

    const simple_metals = ['copper', 'silver', 'gold', 'tin', 'horizonite', 'ventium', 'falsite'];

    simple_metals.forEach((metal) => {
        recipes.push({
            outputs: {
                primary: `emendatusenigmatica:${metal}_dirty_dust`
            },
            input: `#mekanism:clumps/${metal}`,
            crushing_tier: metal_properties[`${metal}`].crushing_tier,
            ignore_multiplier: true,
            id_suffix: `${metal}_dirty_dust_from_clumps`
        });
    });

    const recipetypes_crushing = (event, recipe) => {
        let duration = 100 * recipe.crushing_tier;
        let experience = 0.2 * recipe.crushing_tier;
        let energy = 3000 * recipe.crushing_tier;
        // Note on Thermal Tier, Pulverizers have some very powerful catalysts that interact with this, so the baseline must be low to avoid infinite ore.
        // With Earth Essence and Resonant Components, 0.15 is about 4.5x, while 0.25 is about 17.5x. 0.2 is around 7x
        let tertiary_chances = { tier_one: 0, tier_two: 0.5, tier_three: 0.63, tier_four: 0.75, tier_thermal: 0.2 };

        if (recipe.crushing_tier <= 1) {
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
                        count: 5
                    },
                    grindingTime: duration * 5
                })
                .id(`${id_prefix}hexerei_pestle_and_mortar/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 2) {
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: 1,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: recipe.outputs.secondary_amount ? recipe.outputs.secondary_amount : 1,
                    chance: 0.25
                });
            }

            if (recipe.outputs.tertiary) {
                outputs.push({
                    item: recipe.outputs.tertiary,
                    count: 1,
                    chance: tertiary_chances.tier_two
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

            // Create Milling
            event
                .custom({
                    type: 'create:milling',
                    ingredients: [Ingredient.of(recipe.input).toJson()],
                    results: outputs,
                    processingTime: duration
                })
                .id(`${id_prefix}create_milling/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 3) {
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: 1,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: recipe.outputs.secondary_amount ? recipe.outputs.secondary_amount : 1,
                    chance: 0.25
                });
            }

            if (recipe.outputs.tertiary) {
                outputs.push({
                    item: recipe.outputs.tertiary,
                    count: 1,
                    chance: tertiary_chances.tier_three
                });
            }

            // Create Crushing
            event
                .custom({
                    type: 'create:crushing',
                    ingredients: [Ingredient.of(recipe.input).toJson()],
                    results: outputs,
                    processingTime: duration
                })
                .id(`${id_prefix}create_crushing/${recipe.id_suffix}`);
        }

        if (recipe.crushing_tier <= 4) {
            // Immersive Engineering
            let secondary_outputs = [];
            if (recipe.outputs.secondary) {
                secondary_outputs.push({
                    output: {
                        item: recipe.outputs.secondary,
                        count: recipe.outputs.secondary_amount ? recipe.outputs.secondary_amount : 1
                    },
                    chance: 0.5
                });
            }

            if (recipe.outputs.tertiary) {
                secondary_outputs.push({
                    output: {
                        item: recipe.outputs.tertiary,
                        count: 1
                    },
                    chance: tertiary_chances.tier_four
                });
            }

            event
                .custom({
                    type: 'immersiveengineering:crusher',
                    energy: energy,
                    input: Ingredient.of(recipe.input).toJson(),
                    result: {
                        base_ingredient: { item: recipe.outputs.primary },
                        count: 1
                    },
                    secondaries: secondary_outputs
                })
                .id(`${id_prefix}immersiveengineering_crusher/${recipe.id_suffix}`);

            // Thermal
            let outputs = [
                {
                    item: recipe.outputs.primary,
                    count: 1,
                    chance: 1.0
                }
            ];

            if (recipe.outputs.secondary) {
                outputs.push({
                    item: recipe.outputs.secondary,
                    count: recipe.outputs.secondary_amount ? recipe.outputs.secondary_amount : 1,
                    chance: 0.5
                });
            }

            if (recipe.outputs.tertiary) {
                outputs.push({
                    item: recipe.outputs.tertiary,
                    count: 1,
                    chance: tertiary_chances.tier_thermal
                });
            }

            event
                .custom({
                    type: 'thermal:pulverizer',
                    ingredient: Ingredient.of(recipe.input).toJson(),
                    energy: energy,
                    result: outputs,
                    experience: experience
                })
                .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
        }
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
