ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'iron_golem',
            weight: 75,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_helmet',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_chestplate',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_leggings',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_boots',
                        nbt: Object.assign(reactive.earth_snare, enchant_glint.blank, enchantments.reactive_4)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            tags: ['miniboss/iron_golem']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
