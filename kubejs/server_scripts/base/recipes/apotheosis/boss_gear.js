ServerEvents.highPriorityData((event) => {
    const recipes = {
        overworld: [
            {
                name: 'chain',
                weight: 90,
                quality: 2.5,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:stone_sword' } },
                    { weight: 3, stack: { item: 'minecraft:stone_axe' } },
                    { weight: 2, stack: { item: 'minecraft:stone_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:stone_shovel' } }
                ],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:chainmail_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:chainmail_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:chainmail_chestplate' } }],
                helmets: [
                    { weight: 3, stack: { item: 'minecraft:chainmail_helmet' } },
                    { weight: 1, stack: { item: 'minecraft:turtle_helmet' } }
                ],
                tags: ['overworld']
            },
            {
                name: 'chain_bow',
                weight: 90,
                quality: 2.5,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:chainmail_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:chainmail_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:chainmail_chestplate' } }],
                helmets: [
                    { weight: 3, stack: { item: 'minecraft:chainmail_helmet' } },
                    { weight: 1, stack: { item: 'minecraft:turtle_helmet' } }
                ],
                tags: ['overworld_bow']
            },
            {
                name: 'iron',
                weight: 80,
                quality: 5,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:iron_sword' } },
                    { weight: 3, stack: { item: 'minecraft:iron_axe' } },
                    { weight: 2, stack: { item: 'minecraft:iron_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:iron_shovel' } }
                ],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:iron_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:iron_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:iron_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:iron_helmet' } }],
                tags: ['overworld']
            },
            {
                name: 'iron_bow',
                weight: 80,
                quality: 5,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:iron_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:iron_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:iron_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:iron_helmet' } }],
                tags: ['overworld_bow']
            },
            {
                name: 'leather',
                weight: 100,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:wooden_sword' } },
                    { weight: 3, stack: { item: 'minecraft:wooden_axe' } },
                    { weight: 2, stack: { item: 'minecraft:wooden_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:wooden_shovel' } }
                ],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:leather_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:leather_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:leather_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:leather_helmet' } }],
                tags: ['overworld']
            },
            {
                name: 'leather_bow',
                weight: 100,
                mainhands: [{ weight: 1, stack: { item: 'minecraft:bow' } }],
                offhands: [],
                boots: [{ weight: 1, stack: { item: 'minecraft:leather_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:leather_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:leather_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:leather_helmet' } }],
                tags: ['overworld_bow']
            }
        ],
        the_end: [
            {
                name: 'diamond',
                weight: 70,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:diamond_sword' } },
                    { weight: 3, stack: { item: 'minecraft:diamond_axe' } },
                    { weight: 2, stack: { item: 'minecraft:diamond_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:diamond_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:diamond_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:diamond_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:diamond_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:diamond_helmet' } }],
                tags: ['the_end']
            },
            {
                name: 'diamond_bow',
                weight: 70,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:diamond_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:diamond_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:diamond_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:diamond_helmet' } }],
                tags: ['the_end_bow']
            },
            {
                name: 'netherite',
                weight: 40,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:netherite_sword' } },
                    { weight: 3, stack: { item: 'minecraft:netherite_axe' } },
                    { weight: 2, stack: { item: 'minecraft:netherite_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:netherite_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:netherite_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:netherite_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:netherite_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:netherite_helmet' } }],
                tags: ['the_end']
            },
            {
                name: 'netherite_bow',
                weight: 40,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:netherite_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:netherite_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:netherite_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:netherite_helmet' } }],
                tags: ['the_end_bow']
            }
        ],
        the_nether: [
            {
                name: 'diamond',
                weight: 70,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:diamond_sword' } },
                    { weight: 3, stack: { item: 'minecraft:diamond_axe' } },
                    { weight: 2, stack: { item: 'minecraft:diamond_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:diamond_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:diamond_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:diamond_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:diamond_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:diamond_helmet' } }],
                tags: ['the_nether']
            },
            {
                name: 'diamond_bow',
                weight: 70,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:diamond_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:diamond_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:diamond_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:diamond_helmet' } }],
                tags: ['the_nether_bow']
            },
            {
                name: 'gold',
                weight: 120,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:golden_sword' } },
                    { weight: 3, stack: { item: 'minecraft:golden_axe' } },
                    { weight: 2, stack: { item: 'minecraft:golden_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:golden_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:golden_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:golden_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:golden_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:golden_helmet' } }],
                tags: ['the_nether']
            },
            {
                name: 'gold_bow',
                weight: 120,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:golden_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:golden_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:golden_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:golden_helmet' } }],
                tags: ['the_nether_bow']
            },
            {
                name: 'iron',
                weight: 100,
                mainhands: [
                    { weight: 3, stack: { item: 'minecraft:iron_sword' } },
                    { weight: 3, stack: { item: 'minecraft:iron_axe' } },
                    { weight: 2, stack: { item: 'minecraft:iron_pickaxe' } },
                    { weight: 2, stack: { item: 'minecraft:iron_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:iron_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:iron_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:iron_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:iron_helmet' } }],
                tags: ['the_nether']
            },
            {
                name: 'iron_bow',
                weight: 100,
                mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'minecraft:iron_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'minecraft:iron_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'minecraft:iron_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'minecraft:iron_helmet' } }],
                tags: ['the_nether_bow']
            }
        ],
        twilight: [
            {
                name: 'arctic',
                weight: 40,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_sword' } },
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_axe' } },
                    { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:arctic_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:arctic_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:arctic_chestplate' } }],
                helmets: [
                    { weight: 9, stack: { item: 'twilightforest:arctic_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:alpha_yeti_trophy' } }
                ],
                tags: ['twilight']
            },
            {
                name: 'arctic_bow',
                weight: 40,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:arctic_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:arctic_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:arctic_chestplate' } }],
                helmets: [
                    { weight: 9, stack: { item: 'twilightforest:arctic_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:alpha_yeti_trophy' } }
                ],
                tags: ['twilight_bow']
            },
            {
                name: 'fiery',
                weight: 60,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:fiery_sword' } },
                    { weight: 2, stack: { item: 'twilightforest:fiery_pickaxe' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:fiery_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:fiery_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:fiery_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:fiery_helmet' } }],
                tags: ['twilight']
            },
            {
                name: 'fiery_bow',
                weight: 60,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:fiery_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:fiery_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:fiery_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:fiery_helmet' } }],
                tags: ['twilight_bow']
            },
            {
                name: 'ironwood',
                weight: 100,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:ironwood_sword' } },
                    { weight: 3, stack: { item: 'twilightforest:ironwood_axe' } },
                    { weight: 2, stack: { item: 'twilightforest:ironwood_pickaxe' } },
                    { weight: 2, stack: { item: 'twilightforest:ironwood_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:ironwood_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:ironwood_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:ironwood_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:ironwood_helmet' } }],
                tags: ['twilight']
            },
            {
                name: 'ironwood_bow',
                weight: 100,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:ironwood_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:ironwood_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:ironwood_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:ironwood_helmet' } }],
                tags: ['twilight_bow']
            },
            {
                name: 'knightmetal',
                weight: 60,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_sword' } },
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_axe' } },
                    { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_chestplate' } }],
                helmets: [
                    { weight: 9, stack: { item: 'twilightforest:knightmetal_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:quest_ram_trophy' } }
                ],
                tags: ['twilight']
            },
            {
                name: 'knightmetal_bow',
                weight: 60,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_chestplate' } }],
                helmets: [
                    { weight: 9, stack: { item: 'twilightforest:knightmetal_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:quest_ram_trophy' } }
                ],
                tags: ['twilight_bow']
            },
            {
                name: 'steeleaf',
                weight: 80,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:steeleaf_sword' } },
                    { weight: 3, stack: { item: 'twilightforest:steeleaf_axe' } },
                    { weight: 2, stack: { item: 'twilightforest:steeleaf_pickaxe' } },
                    { weight: 2, stack: { item: 'twilightforest:steeleaf_shovel' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_helmet' } }],
                tags: ['twilight']
            },
            {
                name: 'steeleaf_bow',
                weight: 80,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'minecraft:shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_chestplate' } }],
                helmets: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_helmet' } }],
                tags: ['twilight_bow']
            },
            {
                name: 'yeti',
                weight: 10,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_sword' } },
                    { weight: 3, stack: { item: 'twilightforest:knightmetal_axe' } },
                    { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:yeti_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:yeti_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:yeti_chestplate' } }],
                helmets: [
                    { weight: 6, stack: { item: 'twilightforest:yeti_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:alpha_yeti_trophy' } }
                ],
                tags: ['twilight']
            },
            {
                name: 'yeti_bow',
                weight: 10,
                mainhands: [
                    { weight: 3, stack: { item: 'twilightforest:triple_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:seeker_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ice_bow' } },
                    { weight: 3, stack: { item: 'twilightforest:ender_bow' } }
                ],
                offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield' } }],
                boots: [{ weight: 1, stack: { item: 'twilightforest:yeti_boots' } }],
                leggings: [{ weight: 1, stack: { item: 'twilightforest:yeti_leggings' } }],
                chestplates: [{ weight: 1, stack: { item: 'twilightforest:yeti_chestplate' } }],
                helmets: [
                    { weight: 6, stack: { item: 'twilightforest:yeti_helmet' } },
                    { weight: 1, stack: { item: 'twilightforest:alpha_yeti_trophy' } }
                ],
                tags: ['twilight_bow']
            }
        ]
    };
    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            event.addJson(`apotheosis:boss_gear/${dimension}/${recipe.name}.json`, recipe);
        });
    });
});
