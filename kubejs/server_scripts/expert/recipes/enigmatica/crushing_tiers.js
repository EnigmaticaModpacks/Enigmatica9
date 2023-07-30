ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/';
    // Tiers range from 1-4, with 4 being the highest
    const recipes = [
        {
            outputs: {
                primary: 'minecraft:netherite_scrap',
                secondary: AlmostUnified.getPreferredItemForTag(`forge:gems/quartz`).getId(),
                secondary_amount: 2,
                tertiary: 'minecraft:ancient_debris'
            },
            input: '#forge:ores/netherite',
            crushing_tier: metal_properties['netherite'].crushing_tier,
            id_suffix: 'netherite_crushed_ore_from_raw_ore'
        },
        {
            outputs: { primary: 'occultism:crushed_end_stone' },
            input: 'minecraft:end_stone',
            crushing_tier: 2,
            id_suffix: 'crushed_end_stone_from_end_stone'
        },
        {
            outputs: { primary: 'emendatusenigmatica:nickel_dirty_dust' },
            input: `#mekanism:clumps/nickel`,
            crushing_tier: metal_properties.nickel.crushing_tier,
            id_suffix: `nickel_dirty_dust_from_clumps`
        },
        {
            outputs: { primary: 'byg:brim_powder' },
            input: `byg:brimstone`,
            crushing_tier: 1,
            id_suffix: `brim_powder`
        }
    ];

    const ore_metals = ['iron', 'copper', 'silver', 'gold', 'tin'];
    ore_metals.forEach((metal) => {
        let outputs = {
            primary: AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${metal}`).getId(),
            tertiary: AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${metal}`).getId()
        };

        let secondary = metal_properties[metal].oreProcessing.expert_output.secondary;
        if (secondary == 'quartz') {
            outputs.secondary = AlmostUnified.getPreferredItemForTag(`forge:gems/${secondary}`).getId();
            outputs.secondary_amount = 2;
        } else {
            outputs.secondary = AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${secondary}`).getId();
        }

        recipes.push({
            outputs: outputs,
            input: `#forge:raw_materials/${metal}`,
            crushing_tier: metal_properties[metal].crushing_tier,
            id_suffix: `${metal}_crushed_ore_from_raw_ore`
        });
    });

    simple_metals.forEach((metal) => {
        recipes.push({
            outputs: {
                primary: AlmostUnified.getPreferredItemForTag(`mekanism:dirty_dusts/${metal}`).getId()
            },
            input: `#mekanism:clumps/${metal}`,
            crushing_tier: metal_properties[`${metal}`].crushing_tier,
            id_suffix: `${metal}_dirty_dust_from_clumps`
        });
    });

    const recipetypes_crushing = (event, recipe) => {
        let duration = 100 * recipe.crushing_tier;
        let experience = 0.2 * recipe.crushing_tier;
        let energy = 3000 * recipe.crushing_tier;
        // Note on Thermal Tier, Pulverizers have some very powerful catalysts that interact with this, so the baseline must be low to avoid infinite ore.
        // With Earth Essence and Resonant Components, 0.15 is about 4.5x, while 0.25 is about 17.5x. 0.2 is around 7x
        let tertiary_chances = { tier_one: 0, tier_two: 0.5, tier_three: 0.63, tier_four: 0.75, tier_thermal: 0.15 };

        if (recipe.crushing_tier <= 1) {
            let count = 5;

            if (recipe.input.includes('raw_materials')) {
                count = 12;
            }
            // Hexerei
            event
                .custom({
                    type: 'hexerei:pestle_and_mortar',
                    ingredients: [
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
                    ],
                    output: { item: recipe.outputs.primary, count: count },
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
                    input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                    output: outputs
                })
                .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);

            // Create Milling
            event
                .custom({
                    type: 'create:milling',
                    ingredients: [
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
                    ],
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
                    ingredients: [
                        recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
                    ],
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
                    input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
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
                    ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
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
