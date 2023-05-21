ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'redcap_sapper',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'twilightforest:ironwood_pickaxe',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: {
                        item: 'supplementaries:bomb',
                        nbt: default_nbt
                    },
                    weight: 60,
                    drop_chance: 1.0,
                    count: 10
                },
                {
                    stack: {
                        item: 'supplementaries:bomb_spiky',
                        nbt: default_nbt
                    },
                    weight: 30,
                    drop_chance: 1.0,
                    count: 10
                },
                {
                    stack: {
                        item: 'supplementaries:bomb_blue',
                        nbt: default_nbt
                    },
                    weight: 10,
                    drop_chance: 1.0,
                    count: 10
                }
            ],
            helmets: [
                {
                    stack: {
                        item: 'minecraft:leather_helmet',
                        nbt: leather_colors.sapper_red
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:leather_chestplate',
                        nbt: leather_colors.sapper_brown
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'minecraft:leather_leggings',
                        nbt: leather_colors.sapper_green
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:ironwood_boots',
                        nbt: default_nbt
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/redcap_sapper']
        },
        {
            name: 'redcap',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:ironwood_pickaxe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: {
                        item: 'supplementaries:bomb',
                        nbt: default_nbt
                    },
                    weight: 60,
                    drop_chance: 1.0,
                    count: 10
                },
                {
                    stack: {
                        item: 'supplementaries:bomb_spiky',
                        nbt: default_nbt
                    },
                    weight: 30,
                    drop_chance: 1.0,
                    count: 10
                },
                {
                    stack: {
                        item: 'supplementaries:bomb_blue',
                        nbt: default_nbt
                    },
                    weight: 10,
                    drop_chance: 1.0,
                    count: 10
                }
            ],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [
                {
                    stack: { item: 'twilightforest:ironwood_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/redcap']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
