ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'vindicator',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:knightmetal_axe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: { item: 'minecraft:leather_helmet', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'minecraft:leather_chestplate', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'minecraft:leather_leggings', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'minecraft:leather_boots', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/vindicator']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
