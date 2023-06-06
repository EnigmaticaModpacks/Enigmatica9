ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'weald_walker',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_helmet',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_chestplate',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_leggings',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_boots',
                        nbt: Object.assign(reactive.earth_snare, enchant_glint.blank, enchantments.reactive_4)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            tags: ['miniboss/weald_walker']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
