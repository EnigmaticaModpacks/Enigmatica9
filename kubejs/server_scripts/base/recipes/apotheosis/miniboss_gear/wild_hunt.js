ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'wild_hunt_wither_skeleton',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'ars_nouveau:enchanters_sword',
                        nbt: Object.assign(enchanters_sword.hex_blade, enchant_glint.blank, enchantments.knockback_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            offhands: [
                {
                    stack: {
                        item: 'minecraft:shield',
                        nbt: shield_nbt.dragon_eye
                    },
                    weight: 100,
                    drop_chance: 0.05
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_helmet',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.05
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_chestplate',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.05
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_leggings',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.05
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_boots',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.05
                }
            ],
            tags: ['miniboss/wild_hunt_wither_skeleton']
        },
        {
            name: 'wild_hunt_skeleton',
            weight: 100,
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
                        item: 'minecraft:wither_skeleton_skull',
                        nbt: leather_colors.black
                    },
                    weight: 100,
                    drop_chance: 1.0
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
            tags: ['miniboss/wild_hunt_skeleton']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
