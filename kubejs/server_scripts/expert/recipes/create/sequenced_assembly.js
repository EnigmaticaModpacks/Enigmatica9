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
            transitionalItem: 'thermal:rich_slag',
            loops: 4,
            sequence: [
                {
                    type: 'create:filling',
                    ingredients: [{ item: 'thermal:rich_slag' }, { fluidTag: 'forge:redstone_acid', amount: 25 }],
                    results: [{ item: 'thermal:rich_slag' }]
                }
            ],
            id: `${id_prefix}sky_dust_silver_osmium_clump`
        },
        {
            results: [{ item: `create:track`, count: 64 }],
            input: 'minecraft:smooth_stone_slab',
            transitionalItem: 'minecraft:smooth_stone_slab',
            loops: 1,
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'minecraft:smooth_stone_slab' },
                        Ingredient.of([
                            'emendatusenigmatica:bronze_rod',
                            '#forge:rods/osmium',
                            '#forge:rods/iron'
                        ]).toJson()
                    ],
                    results: [{ item: 'minecraft:smooth_stone_slab' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'minecraft:smooth_stone_slab' },
                        Ingredient.of([
                            'emendatusenigmatica:bronze_rod',
                            '#forge:rods/osmium',
                            '#forge:rods/iron'
                        ]).toJson()
                    ],
                    results: [{ item: 'minecraft:smooth_stone_slab' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'minecraft:smooth_stone_slab' }],
                    results: [{ item: 'minecraft:smooth_stone_slab' }],
                    processingTime: 50
                }
            ],
            id: `${id_prefix}track_sequential`
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
        let preferredIngot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`).getId();
        recipes.push({
            results: [{ item: `emendatusenigmatica:${material}_plate` }],
            input: `#forge:ingots/${material}`,
            transitionalItem: preferredIngot,
            loops: 3,
            sequence: [
                {
                    type: 'create:pressing',
                    ingredients: [{ item: preferredIngot }],
                    results: [{ item: preferredIngot }]
                }
            ],
            id: `${id_prefix}${material}_plate`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        recipe.ingredient = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.transitionalItem = Item.of(recipe.transitionalItem).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
