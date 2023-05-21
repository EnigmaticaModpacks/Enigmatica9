ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'piglin_brute',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'twilightforest:gold_minotaur_axe',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: { item: 'minecraft:golden_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'minecraft:golden_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'minecraft:golden_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'minecraft:golden_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/piglin_brute']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
