/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    let recipes = {
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
        twilight: []
    };
    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            event.addJson(`apotheosis:boss_gear/${dimension}/${recipe.name}.json`, recipe);
        });
    });
});
