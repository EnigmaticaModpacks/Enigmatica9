ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/';
    // Tiers range from 1-4, with 4 being the highest
    const recipes = [
        {
            input_types: ['gems'],
            material: 'ender_pearl',
            output: 'emendatusenigmatica:ender_pearl_dust',
            crushing_tier: gem_properties['ender_pearl'].crushing_tier
        },
        {
            input_types: ['gems'],
            material: 'amethyst',
            output: 'kubejs:amethyst_dust',
            crushing_tier: gem_properties['amethyst'].crushing_tier
        },
        {
            input_types: ['gems'],
            material: 'fluix',
            output: 'ae2:fluix_dust',
            crushing_tier: gem_properties['fluix'].crushing_tier
        },
        {
            input_types: ['gems'],
            material: 'certus_quartz',
            output: 'ae2:certus_quartz_dust',
            crushing_tier: gem_properties['certus_quartz'].crushing_tier
        },
        {
            input_types: ['gems'],
            material: 'therium',
            output: 'kubejs:therium_dust',
            crushing_tier: gem_properties['therium'].crushing_tier
        },
        {
            input_types: ['gems'],
            material: 'subzero',
            output: 'kubejs:subzero_dust',
            crushing_tier: gem_properties['subzero'].crushing_tier
        }
    ];

    const metals = Object.keys(metal_properties);

    metals.forEach((metal) => {
        if (metal_properties[metal].crushing_tier && Item.exists(`emendatusenigmatica:${metal}_dust`)) {
            let input_types = [];
            if (Item.exists(`emendatusenigmatica:${metal}_ingot`)) input_types.push('ingots');
            if (Item.exists(`emendatusenigmatica:${metal}_plate`)) input_types.push('plates');
            if (Item.exists(`emendatusenigmatica:${metal}_gear`)) input_types.push('gears');

            recipes.push({
                input_types: input_types,
                material: metal,
                output: Item.of(AlmostUnified.getPreferredItemForTag(`forge:dusts/${metal}`)).getId(),
                crushing_tier: metal_properties[metal].crushing_tier
            });
        }
    });

    let gems = Object.keys(gem_properties);

    gems.forEach((gem) => {
        if (gem_properties[gem].crushing_tier && Item.exists(`emendatusenigmatica:${gem}_dust`)) {
            let input_types = ['gems'];
            recipes.push({
                input_types: input_types,
                material: gem,
                output: Item.of(AlmostUnified.getPreferredItemForTag(`forge:dusts/${gem}`)).getId(),
                crushing_tier: gem_properties[gem].crushing_tier
            });
        }
    });

    const recipetypes_crushing = (event, recipe) => {
        let duration = 200 * recipe.crushing_tier;
        let energy = 3000 * recipe.crushing_tier;
        let experience = 0.2 * recipe.crushing_tier;

        recipe.input_types.forEach((input_type) => {
            let count = 1;
            if (input_type == 'gears') count = 4;
            let id_suffix = `${recipe.material}_${input_type}`;

            // Tier 1
            if (recipe.crushing_tier <= 1) {
                // Hexerei
                event
                    .custom({
                        type: 'hexerei:pestle_and_mortar',
                        output: Item.of(`${5 * count}x ${recipe.output}`).toJson(),
                        ingredients: [
                            Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson()
                        ],
                        grindingTime: duration * 5
                    })
                    .id(`${id_prefix}hexerei_pestle_and_mortar/${id_suffix}`);
            }

            // Tier 2
            if (recipe.crushing_tier <= 2) {
                // Ars Nouveau
                event
                    .custom({
                        type: 'ars_nouveau:crush',
                        output: [{ item: `${recipe.output}`, count: count, chance: 1.0 }],
                        input: Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson()
                    })
                    .id(`${id_prefix}ars_nouveau_crushing/${id_suffix}`);

                // Create Milling
                event
                    .custom({
                        type: 'create:milling',
                        results: [Item.of(`${count}x ${recipe.output}`).toJson()],
                        ingredients: [Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson()],
                        processingTime: duration
                    })
                    .id(`${id_prefix}create_milling/${id_suffix}`);
            }

            // Tier 3
            if (recipe.crushing_tier <= 3) {
                // Create
                event
                    .custom({
                        type: 'create:crushing',
                        results: [Item.of(`${count}x ${recipe.output}`).toJson()],
                        ingredients: [Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson()],
                        processingTime: duration
                    })
                    .id(`${id_prefix}create_crushing/${id_suffix}`);
            }

            // Tier 4
            if (recipe.crushing_tier <= 4) {
                // Immersive Engineering

                event
                    .custom({
                        type: 'immersiveengineering:crusher',
                        result: {
                            base_ingredient: { item: `${recipe.output}` },
                            count: count
                        },
                        input: Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                        energy: energy,
                        secondaries: []
                    })
                    .id(`${id_prefix}immersiveengineering_crusher/${id_suffix}`);

                // Thermal Pulverizer

                event
                    .custom({
                        type: 'thermal:pulverizer',
                        result: [Item.of(`${count}x ${recipe.output}`).toJson()],
                        ingredient: Ingredient.of(`#forge:${input_type}/${recipe.material}`).toJson(),
                        energy: energy,
                        experience: experience
                    })
                    .id(`${id_prefix}thermal_pulverizer/${id_suffix}`);

                // Thermal Earth Charge
                if (input_type == 'gems') {
                    event
                        .shapeless(`${count}x ${recipe.output}`, [
                            `#forge:${input_type}/${recipe.material}`,
                            'thermal:earth_charge'
                        ])
                        .id(`${id_prefix}thermal_earth_charge/${id_suffix}`);
                }
            }
        });
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
