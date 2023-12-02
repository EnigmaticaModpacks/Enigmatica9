ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_ore/';
    const recipes = [
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'spirit:soul_powder' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 16,
                    depth_min: 5,
                    weight: 10,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ].concat(biomes.in_the_nether)
                    }
                },
                {
                    depth_max: 255,
                    depth_min: 0,
                    weight: 4,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ].concat(biomes.in_the_nether)
                    }
                }
            ],
            id: `${id_prefix}soul_powder`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/black' },
            output: { item: 'spirit:soul_slate' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 60,
                    depth_min: 5,
                    weight: 10,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ].concat(biomes.in_the_nether)
                    }
                },
                {
                    depth_max: 255,
                    depth_min: 0,
                    weight: 4,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ].concat(biomes.in_the_nether)
                    }
                }
            ],
            id: `${id_prefix}soul_slate`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_ore';

        event.custom(recipe).id(recipe.id);
    });
});
