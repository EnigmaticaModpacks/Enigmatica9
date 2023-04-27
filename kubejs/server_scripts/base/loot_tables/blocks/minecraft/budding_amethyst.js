ServerEvents.blockLootTables((event) => {
    event.addBlock(`minecraft:amethyst_cluster`, (table) => {
        table.addPool((pool) => {
            pool.addEntry({
                type: 'minecraft:alternatives',
                children: [
                    {
                        type: 'minecraft:item',
                        name: `minecraft:amethyst_cluster`,
                        conditions: [
                            {
                                condition: 'minecraft:match_tool',
                                predicate: {
                                    enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
                                }
                            }
                        ]
                    },
                    {
                        type: 'minecraft:item',
                        name: 'minecraft:amethyst_shard',
                        functions: [
                            { add: false, count: 4.0, function: 'minecraft:set_count' },
                            {
                                function: 'minecraft:apply_bonus',
                                formula: 'minecraft:uniform_bonus_count',
                                enchantment: 'minecraft:fortune',
                                parameters: { bonusMultiplier: 1 }
                            },
                            { function: 'minecraft:explosion_decay' }
                        ]
                    }
                ]
            });
        });
    });

    // Buds
    const bud_sizes = ['small', 'medium', 'large'];

    bud_sizes.forEach((size) => {
        event.addBlock(`minecraft:${size}_amethyst_bud`, (table) => {
            table.addPool((pool) => {
                pool.addEntry({
                    type: 'minecraft:alternatives',
                    children: [
                        {
                            type: 'minecraft:item',
                            name: `minecraft:${size}_amethyst_bud`,
                            conditions: [
                                {
                                    condition: 'minecraft:match_tool',
                                    predicate: {
                                        enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
                                    }
                                }
                            ]
                        },
                        {
                            type: 'minecraft:item',
                            name: `kubejs:amethyst_dust`,
                            conditions: [{ condition: 'minecraft:survives_explosion' }]
                        }
                    ]
                });
            });
        });
    });
});
