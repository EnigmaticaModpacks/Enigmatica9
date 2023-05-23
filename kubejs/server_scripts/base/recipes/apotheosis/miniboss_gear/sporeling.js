ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'sporeling_restoration',
            weight: 75,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(reactive.restoration, enchant_glint.blank, enchantments.reactive_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/sporeling']
        },
        {
            name: 'sporeling_hexing',
            weight: 25,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: Object.assign(reactive.hex_zone, enchant_glint.blank, enchantments.reactive_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: Object.assign(reactive.poison_touch, enchant_glint.blank, enchantments.reactive_4)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/sporeling']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
