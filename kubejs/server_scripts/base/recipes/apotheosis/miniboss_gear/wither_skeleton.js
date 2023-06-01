ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'wither_skeleton_withered_knight',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'twilightforest:fiery_sword',
                        nbt: Object.assign(enchantments.sharpness_3, enchant_glint.blank)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: all_shield_designs,
            helmets: [
                {
                    stack: { item: 'pneumaticcraft:compressed_iron_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'pneumaticcraft:compressed_iron_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'pneumaticcraft:compressed_iron_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'pneumaticcraft:compressed_iron_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/wither_skeleton_withered_knight']
        },
        {
            name: 'wither_skeleton_sword',
            weight: 75,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'immersiveengineering:sword_steel',
                        nbt: Object.assign(enchantments.sharpness_3, enchant_glint.blank)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [],
            tags: ['miniboss/wither_skeleton']
        },
        {
            name: 'wither_skeleton_bow_leather',
            weight: 25,
            quality: 2.5,
            mainhands: [{ stack: { item: 'minecraft:bow', nbt: default_nbt }, weight: 100, drop_chance: 0.085 }],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.wither_strong, count: 5 },
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
            tags: ['miniboss/wither_skeleton']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
