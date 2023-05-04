ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'drowned',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'minecraft:trident',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_rate: 0.085
                }
            ],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(reactive.drown, leather_colors.sea_green, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/drowned']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
