ServerEvents.blockLootTables((event) => {
    // Clusters
    event.addBlock(`ae2:quartz_cluster`, (table) => {
        table.addPool((pool) => {
            pool.addEntry({
                type: 'minecraft:alternatives',
                children: [
                    {
                        type: 'minecraft:item',
                        name: `ae2:quartz_cluster`,
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
                        name: `ae2:certus_quartz_crystal`,
                        functions: [
                            { add: false, count: 4.0, function: 'minecraft:set_count' },
                            {
                                function: 'minecraft:apply_bonus',
                                enchantment: 'minecraft:fortune',
                                formula: 'minecraft:ore_drops'
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
        event.addBlock(`ae2:${size}_quartz_bud`, (table) => {
            table.addPool((pool) => {
                pool.addEntry({
                    type: 'minecraft:alternatives',
                    children: [
                        {
                            type: 'minecraft:item',
                            name: `ae2:${size}_quartz_bud`,
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
                            name: `ae2:certus_quartz_dust`,
                            conditions: [{ condition: 'minecraft:survives_explosion' }]
                        }
                    ]
                });
            });
        });
    });
});
