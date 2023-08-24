ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'minotaur',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:gold_minotaur_axe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [
                {
                    stack: {
                        item: 'minecraft:leather_boots',
                        nbt: Object.assign(reactive.earth_snare, enchant_glint.blank, enchantments.reactive_4)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            tags: ['miniboss/minotaur']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
