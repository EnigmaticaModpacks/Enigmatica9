ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'possessed_enderman',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'ars_nouveau:enchanters_sword',
                        nbt: Object.assign(enchanters_sword.dispel, enchant_glint.blank, enchantments.knockback_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'blue_skies:charoite_helmet',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'blue_skies:charoite_chestplate',
                        nbt: Object.assign(reactive.vanish, enchant_glint.blank, enchantments.reactive_3)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'blue_skies:charoite_leggings',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'blue_skies:charoite_boots',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            tags: ['miniboss/possessed_enderman']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
