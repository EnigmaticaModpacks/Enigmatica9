ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'piglin',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'minecraft:crossbow',
                        nbt: Object.assign(enchantments.multishot, enchant_glint.blank)
                    },
                    weight: 50,
                    drop_chance: 0.085
                },
                {
                    stack: {
                        item: 'twilightforest:gold_minotaur_axe',
                        nbt: default_nbt
                    },
                    weight: 50,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [],
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
            boots: [],
            tags: ['miniboss/piglin']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
