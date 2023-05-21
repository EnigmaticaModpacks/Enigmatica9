ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'skeleton_forsaken_knight',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:knightmetal_sword', nbt: default_nbt },
                    weight: 50,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'twilightforest:knightmetal_axe', nbt: default_nbt },
                    weight: 25,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'twilightforest:knightmetal_pickaxe', nbt: default_nbt },
                    weight: 25,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: { item: 'twilightforest:knightmetal_shield', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            helmets: [
                {
                    stack: { item: 'twilightforest:knightmetal_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'twilightforest:knightmetal_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'twilightforest:knightmetal_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'twilightforest:knightmetal_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_forsaken_knight']
        },
        {
            name: 'skeleton_bow_chainmail',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'minecraft:bow', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.harming, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting, count: 5 },
                    weight: 15,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering, count: 5 },
                    weight: 35,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: { item: 'minecraft:chainmail_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'minecraft:chainmail_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'minecraft:chainmail_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'minecraft:chainmail_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_bow']
        },
        {
            name: 'skeleton_bow_leather',
            weight: 100,
            quality: 2.5,
            mainhands: [{ stack: { item: 'minecraft:bow', nbt: default_nbt }, weight: 100, drop_chance: 0.085 }],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.harming, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting, count: 5 },
                    weight: 15,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering, count: 5 },
                    weight: 35,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: leather_colors.black
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: leather_colors.black
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'minecraft:leather_leggings',
                        nbt: leather_colors.black
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'minecraft:leather_boots',
                        nbt: leather_colors.black
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_bow']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
