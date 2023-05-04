ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'lich',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:golden_chestplate',
                        nbt: Object.assign(reactive.life_link, enchant_glint.blank, enchantments.reactive_4)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/lich']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
