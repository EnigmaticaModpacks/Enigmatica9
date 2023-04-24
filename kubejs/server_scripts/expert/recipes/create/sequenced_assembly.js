ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/sequenced_assembly/';
    const recipes = [
        {
            results: [
                { item: `ae2:sky_dust`, chance: 4 },
                { item: `emendatusenigmatica:silver_clump`, chance: 1 },
                { item: `emendatusenigmatica:osmium_clump`, chance: 1 },
                { item: 'thermal:slag', chance: 3 }
            ],
            input: 'thermal:rich_slag',
            transitionalItem: 'ae2:sky_dust',
            loops: 4,
            sequence: [
                {
                    type: 'create:filling',
                    ingredients: [{ item: 'ae2:sky_dust' }, { fluidTag: 'forge:redstone_acid', amount: 25 }],
                    results: [{ item: 'ae2:sky_dust' }]
                }
            ],
            id: `${id_prefix}sky_dust_silver_osmium_clump`
        }
    ];

    const plate_materials = [
        'netherite',
        'iron',
        'lead',
        'constantan',
        'osmium',
        'electrum',
        'nickel',
        'copper',
        'enderium',
        'signalum',
        'lumium',
        'gold',
        'aluminum',
        'steel',
        'uranium',
        'silver',
        'bronze',
        'brass',
        'rose_gold',
        'zinc',
        'invar',
        'tin'
    ];

    plate_materials.forEach((material) => {
        recipes.push({
            results: [{ item: `emendatusenigmatica:${material}_plate` }],
            input: `#forge:ingots/${material}`,
            transitionalItem: `emendatusenigmatica:${material}_ingot`,
            loops: 3,
            sequence: [
                {
                    type: 'create:pressing',
                    ingredients: [{ item: `emendatusenigmatica:${material}_ingot` }],
                    results: [{ item: `emendatusenigmatica:${material}_ingot` }]
                }
            ],
            id: `${id_prefix}${material}_plate`
        });
    });

    simple_metals.forEach((metal) => {
        let results = [{ item: `emendatusenigmatica:${metal}_dirty_dust`, count: 4 }];

        let secondary = metal_properties[metal].oreProcessing.expert_output.secondary;
        if (secondary == 'quartz') {
            results.push({ item: `emendatusenigmatica:${secondary}_dust`, count: 4 });
        } else {
            results.push({ item: `emendatusenigmatica:${secondary}_dirty_dust`, count: 2 });
        }

        recipes.push({
            results: results,
            input: `#create:crushed_ores/${metal}`,
            transitionalItem: `emendatusenigmatica:crushed_${metal}_ore`,
            loops: 4,
            sequence: [
                {
                    type: 'create:filling',
                    ingredients: [
                        { item: `emendatusenigmatica:crushed_${metal}_ore` },
                        { fluidTag: 'forge:redstone_acid', amount: 25 }
                    ],
                    results: [{ item: `emendatusenigmatica:crushed_${metal}_ore` }]
                }
            ],
            id: `${id_prefix}${metal}_dirty_dust_from_acid`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.transitionalItem = Item.of(recipe.transitionalItem).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
