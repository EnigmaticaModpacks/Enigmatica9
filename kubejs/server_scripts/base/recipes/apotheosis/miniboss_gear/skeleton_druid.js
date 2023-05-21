ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'skeleton_druid_archdruid',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'minecraft:bow', nbt: default_nbt },
                    weight: 50,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.wither_strong, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_helmet',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.green)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_chestplate',
                        nbt: Object.assign(reactive.bounce_poison, enchant_glint.green, enchantments.reactive_3)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_leggings',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.green)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_boots',
                        nbt: Object.assign({ Damage: 0 }, enchant_glint.green)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_druid_archdruid']
        },
        {
            name: 'skeleton_druid_ironwood',
            weight: 50,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:ironwood_hoe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: { item: 'twilightforest:ironwood_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'twilightforest:ironwood_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'twilightforest:ironwood_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'twilightforest:ironwood_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_druid']
        },
        {
            name: 'skeleton_druid_steeleaf',
            weight: 40,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:steeleaf_hoe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_helmet',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_chestplate',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_leggings',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:steeleaf_boots',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/skeleton_druid']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
