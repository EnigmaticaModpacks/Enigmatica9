ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'snow_queen',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: { item: 'minecraft:diamond_helmet', nbt: enchant_glint.blue },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:diamond_chestplate',
                        nbt: Object.assign(enchant_glint.blue, enchantments.chill_aura_5)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'minecraft:diamond_leggings', nbt: enchant_glint.blue },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'minecraft:diamond_boots', nbt: enchant_glint.blue },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/snow_queen']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
