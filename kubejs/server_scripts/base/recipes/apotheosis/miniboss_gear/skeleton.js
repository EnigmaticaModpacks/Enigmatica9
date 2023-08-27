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
            name: 'skeleton_siege_breaker',
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
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting, count: 5 },
                    weight: 100,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: leather_colors.sapper_red
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: leather_colors.sapper_red
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'minecraft:leather_leggings',
                        nbt: leather_colors.sapper_red
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'minecraft:leather_boots',
                        nbt: leather_colors.sapper_red
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_siege_breaker']
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
        },
        {
            name: 'skeleton_sword',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:knightmetal_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'naturesaura:infused_iron_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'ae2:fluix_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'ae2:certus_quartz_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                },
                {
                    stack: { item: 'twilightforest:steeleaf_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: all_shield_designs,
            helmets: [
                {
                    stack: { item: 'immersiveengineering:armor_steel_head', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'immersiveengineering:armor_steel_chest', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'immersiveengineering:armor_steel_legs', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'immersiveengineering:armor_steel_feet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_sword']
        },
        {
            name: 'skeleton_tempest_caller',
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
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.tempest, count: 5 },
                    weight: 100,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: leather_colors.tempest_blue
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(
                            reactive.orbit_lightning,
                            enchant_glint.blank,
                            enchantments.reactive_3,
                            leather_colors.tempest_blue
                        )
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'minecraft:leather_leggings',
                        nbt: leather_colors.tempest_blue
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'minecraft:leather_boots',
                        nbt: leather_colors.tempest_blue
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_tempest_caller']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
