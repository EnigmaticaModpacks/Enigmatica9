ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'witch',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'hexerei:witch_helmet',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                },
                {
                    stack: {
                        item: 'hexerei:mushroom_witch_hat',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'hexerei:witch_chestplate',
                        nbt: Object.assign(reactive.life_link, enchant_glint.blank, enchantments.reactive_3)
                    },
                    weight: 33,
                    drop_chance: 0.0
                },
                {
                    stack: {
                        item: 'hexerei:witch_chestplate',
                        nbt: Object.assign(reactive.bounce_lightning, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 33,
                    drop_chance: 0.0
                },
                {
                    stack: {
                        item: 'hexerei:witch_chestplate',
                        nbt: Object.assign(reactive.bounce_poison, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 33,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'minecraft:leather_leggings',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'hexerei:witch_boots',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/witch']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
