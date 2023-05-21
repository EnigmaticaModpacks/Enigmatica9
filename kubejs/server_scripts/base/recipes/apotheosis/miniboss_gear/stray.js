ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'stray_hoarfrost_knight',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'minecraft:bow',
                        nbt: Object.assign(enchantments.punch_3, enchant_glint.blue)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'twilightforest:yeti_helmet',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.blue)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:yeti_chestplate',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.blue)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'twilightforest:yeti_leggings',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.blue)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:yeti_boots',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.blue)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/stray_hoarfrost_knight']
        },
        {
            name: 'stray',
            weight: 25,
            quality: 2.5,
            mainhands: [{ stack: { item: 'minecraft:bow', nbt: default_nbt }, weight: 100, drop_chance: 0.085 }],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [],
            tags: ['miniboss/stray']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
