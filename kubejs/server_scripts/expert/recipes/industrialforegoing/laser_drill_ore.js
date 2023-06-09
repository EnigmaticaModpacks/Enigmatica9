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
                        values: biomes.in_the_nether.concat([
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ])
                    }
                },
                {
                    depth_max: 255,
                    depth_min: 0,
                    weight: 4,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether.concat([
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ])
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
                        values: biomes.in_the_nether.concat([
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ])
                    }
                },
                {
                    depth_max: 255,
                    depth_min: 0,
                    weight: 4,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether.concat([
                            'twilightforest:dark_forest',
                            'twilightforest:dark_forest_center',
                            'twilightforest:spooky_forest'
                        ])
                    }
                }
            ],
            id: `${id_prefix}soul_slate`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/ender' },
            output: { item: 'quark:dragon_scale' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 40,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_the_end }
                }
            ],
            id: `${id_prefix}dragon_scale`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/ender' },
            output: { item: 'minecraft:dragon_breath' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 30,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_the_end }
                }
            ],
            id: `${id_prefix}dragon_breath`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/ender' },
            output: { item: 'minecraft:dragon_head' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_the_end }
                }
            ],
            id: `${id_prefix}dragon_head`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/ender' },
            output: { item: 'minecraft:dragon_egg' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 10,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_the_end }
                }
            ],
            id: `${id_prefix}dragon_egg`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_ore';

        event.custom(recipe).id(recipe.id);
    });
});
