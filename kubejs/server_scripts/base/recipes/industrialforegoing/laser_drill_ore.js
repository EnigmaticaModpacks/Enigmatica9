ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/laser_drill_ore/';

    const recipes = [
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/brown' },
            output: { item: 'emendatusenigmatica:iron_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 85,
                    depth_min: 40,
                    weight: 20,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 3,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}iron_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/orange' },
            output: { item: 'emendatusenigmatica:copper_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 40,
                    depth_min: -40,
                    weight: 15,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 3,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}copper_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/yellow' },
            output: { item: 'emendatusenigmatica:gold_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: -20,
                    depth_min: -64,
                    weight: 10,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 2,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 128,
                    depth_min: 0,
                    weight: 25,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether
                    }
                }
            ],
            id: `${id_prefix}gold_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'emendatusenigmatica:diamond_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: -10,
                    depth_min: -64,
                    weight: 3,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 1,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 20,
                    depth_min: 0,
                    weight: 4,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether
                    }
                },
                {
                    depth_max: 40,
                    depth_min: -64,
                    weight: 7,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_hills
                    }
                }
            ],
            id: `${id_prefix}diamond_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/lime' },
            output: { item: 'emendatusenigmatica:emerald_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 1,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 40,
                    depth_min: -64,
                    weight: 10,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_hills
                    }
                }
            ],
            id: `${id_prefix}emerald_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/red' },
            output: { item: 'emendatusenigmatica:redstone_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 5,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 0,
                    depth_min: -64,
                    weight: 25,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 0,
                    depth_min: -40,
                    weight: 40,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_desert
                    }
                }
            ],
            id: `${id_prefix}redstone_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/black' },
            output: { item: 'emendatusenigmatica:coal_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 150,
                    depth_min: 30,
                    weight: 30,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 30,
                    depth_min: -10,
                    weight: 12,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}coal_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/blue' },
            output: { item: 'emendatusenigmatica:lapis_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 5,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 0,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}lapis_ore`
        },
        // MODDED
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/black' },
            output: { item: 'emendatusenigmatica:bitumen_sandstone_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 2,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 50,
                    depth_min: 90,
                    weight: 50,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_desert
                    }
                }
            ],
            id: `${id_prefix}bitumen_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/white' },
            output: { item: 'emendatusenigmatica:quartz_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: -32,
                    depth_min: -64,
                    weight: 2,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 0,
                    depth_min: 128,
                    weight: 40,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    }
                }
            ],
            id: `${id_prefix}quartz_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/lime' },
            output: { item: 'emendatusenigmatica:zinc_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 6,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 30,
                    depth_min: 150,
                    weight: 35,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}zinc_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_gray' },
            output: { item: 'emendatusenigmatica:nickel_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 5,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 30,
                    depth_min: 150,
                    weight: 30,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}nickel_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/green' },
            output: { item: 'emendatusenigmatica:uranium_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 60,
                    depth_min: 20,
                    weight: 35,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 128,
                    depth_min: 0,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether
                    }
                }
            ],
            id: `${id_prefix}uranium_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/blue' },
            output: { item: 'emendatusenigmatica:apatite_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 50,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: 50,
                    weight: 30,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}apatite_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'emendatusenigmatica:osmium_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 14,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}osmium_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/gray' },
            output: { item: 'emendatusenigmatica:lead_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 10,
                    depth_min: -64,
                    weight: 12,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: 10,
                    weight: 5,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 120,
                    depth_min: 8,
                    weight: 10,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether
                    }
                }
            ],
            id: `${id_prefix}lead_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'emendatusenigmatica:tin_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 25,
                    depth_min: -5,
                    weight: 45,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 320,
                    depth_min: 25,
                    weight: 15,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 25,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}tin_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'emendatusenigmatica:silver_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: 40,
                    weight: 8,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 40,
                    depth_min: 0,
                    weight: 14,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 0,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                }
            ],
            id: `${id_prefix}silver_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_gray' },
            output: { item: 'emendatusenigmatica:aluminum_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: 20,
                    weight: 14,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 20,
                    depth_min: -64,
                    weight: 7,
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_end
                    },
                    whitelist: {}
                },
                {
                    depth_max: 8,
                    depth_min: 120,
                    weight: 10,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_the_nether
                    }
                },
                {
                    depth_max: 10,
                    depth_min: 120,
                    weight: 40,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_swamps
                    }
                }
            ],
            id: `${id_prefix}aluminum_ore`
        },
        // Blue_Skies
        // TODO: Per-Biome bonuses and actual world ore gen for this, this is the only way to get them atm >.>
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/red' },
            output: { item: 'emendatusenigmatica:pyrope_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright.concat(biomes.in_everdawn)
                    }
                }
            ],
            id: `${id_prefix}pyrope_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/light_blue' },
            output: { item: 'emendatusenigmatica:aquite_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright.concat(biomes.in_everdawn)
                    }
                }
            ],
            id: `${id_prefix}aquite_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/pink' },
            output: { item: 'emendatusenigmatica:charoite_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright.concat(biomes.in_everdawn)
                    }
                }
            ],
            id: `${id_prefix}charoite_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/green' },
            output: { item: 'emendatusenigmatica:diopside_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright.concat(biomes.in_everdawn)
                    }
                }
            ],
            id: `${id_prefix}diopside_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/red' },
            output: { item: 'emendatusenigmatica:ventium_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright
                    }
                }
            ],
            id: `${id_prefix}ventium_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/purple' },
            output: { item: 'emendatusenigmatica:falsite_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everbright
                    }
                }
            ],
            id: `${id_prefix}falsite_ore`
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/orange' },
            output: { item: 'emendatusenigmatica:horizonite_ore' },
            pointer: 0,
            rarity: [
                {
                    depth_max: 320,
                    depth_min: -64,
                    weight: 20,
                    blacklist: {},
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: biomes.in_everdawn
                    }
                }
            ],
            id: `${id_prefix}horizonite_ore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_ore';

        event.custom(recipe).id(recipe.id);
    });
});
