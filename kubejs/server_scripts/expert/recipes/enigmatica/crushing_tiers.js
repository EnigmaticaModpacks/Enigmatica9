ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/';
    // Tiers range from 1-4, with 4 being the highest
    const recipes = [
        {
            types: ['gems'],
            material: 'ender_pearl',
            dust_item: 'thermal:ender_pearl_dust',
            crushing_tier: gem_properties['ender_pearl'].crushing_tier
        },
        {
            types: ['gems'],
            material: 'amethyst',
            dust_item: 'kubejs:amethyst_dust',
            crushing_tier: gem_properties['amethyst'].crushing_tier
        },
        {
            types: ['gems'],
            material: 'fluix',
            dust_item: 'ae2:fluix_dust',
            crushing_tier: gem_properties['fluix'].crushing_tier
        },
        {
            types: ['gems'],
            material: 'certus_quartz',
            dust_item: 'ae2:certus_quartz_dust',
            crushing_tier: gem_properties['certus_quartz'].crushing_tier
        }
    ];

    const metals = Object.keys(metal_properties);

    metals.forEach((metal) => {
        if (metal_properties[metal].crushing_tier && Item.exists(`emendatusenigmatica:${metal}_dust`)) {
            let types = [];
            if (Item.exists(`emendatusenigmatica:${metal}_ingot`)) types.push('ingots');
            if (Item.exists(`emendatusenigmatica:${metal}_plate`)) types.push('plates');
            if (Item.exists(`emendatusenigmatica:${metal}_gear`)) types.push('gears');

            recipes.push({
                types: types,
                material: metal,
                crushing_tier: metal_properties[metal].crushing_tier
            });
        }
    });

    let gems = Object.keys(gem_properties);

    gems.forEach((gem) => {
        if (gem_properties[gem].crushing_tier && Item.exists(`emendatusenigmatica:${gem}_dust`)) {
            let types = ['gems'];
            recipes.push({
                types: types,
                material: gem,
                crushing_tier: gem_properties[gem].crushing_tier
            });
        }
    });

    const recipetypes_crushing = (event, recipe) => {
        let duration = 200 * recipe.crushing_tier;
        let energy = 3000 * recipe.crushing_tier;
        let experience = 0.2 * recipe.crushing_tier;
        let dust_item = recipe.dust_item
            ? recipe.dust_item
            : Item.of(AlmostUnified.getPreferredItemForTag(`forge:dusts/${recipe.material}`)).getId();

        recipe.types.forEach((type) => {
            let count = 1;
            if (type == 'gears') count = 4;
            let id_suffix = `${recipe.material}_${type}_to_dust`;

            // Tier 1
            if (recipe.crushing_tier <= 1) {
                // Hexerei
                event
                    .custom({
                        type: 'hexerei:pestle_and_mortar',
                        output: Item.of(`${5 * count}x ${dust_item}`).toJson(),
                        ingredients: [
                            Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                            Ingredient.of(`#forge:${type}/${recipe.material}`).toJson()
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
                        output: [{ item: `${dust_item}`, count: count, chance: 1.0 }],
                        input: Ingredient.of(`#forge:${type}/${recipe.material}`).toJson()
                    })
                    .id(`${id_prefix}ars_nouveau_crushing/${id_suffix}`);

                // Create Milling
                event
                    .custom({
                        type: 'create:milling',
                        results: [Item.of(`${count}x ${dust_item}`).toJson()],
                        ingredients: [Ingredient.of(`#forge:${type}/${recipe.material}`).toJson()],
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
                        results: [Item.of(`${count}x ${dust_item}`).toJson()],
                        ingredients: [Ingredient.of(`#forge:${type}/${recipe.material}`).toJson()],
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
                            base_ingredient: { item: `${dust_item}` },
                            count: count
                        },
                        input: Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                        energy: energy,
                        secondaries: []
                    })
                    .id(`${id_prefix}immersiveengineering_crusher/${id_suffix}`);

                // Thermal Pulverizer

                event
                    .custom({
                        type: 'thermal:pulverizer',
                        result: [Item.of(`${count}x ${dust_item}`).toJson()],
                        ingredient: Ingredient.of(`#forge:${type}/${recipe.material}`).toJson(),
                        energy: energy,
                        experience: experience
                    })
                    .id(`${id_prefix}thermal_pulverizer/${id_suffix}`);

                // Thermal Earth Charge
                if (type == 'gems') {
                    event
                        .shapeless(`${count}x ${dust_item}`, [
                            `#forge:${type}/${recipe.material}`,
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
