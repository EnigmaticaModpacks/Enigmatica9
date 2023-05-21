ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'enderman',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(reactive.come_here, leather_colors.void_purple, enchantments.reactive_3)
                    },
                    weight: 50,
                    drop_chance: 1.0
                },
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(reactive.vanish, leather_colors.void_purple, enchantments.reactive_3)
                    },
                    weight: 50,
                    drop_chance: 1.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/enderman']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
