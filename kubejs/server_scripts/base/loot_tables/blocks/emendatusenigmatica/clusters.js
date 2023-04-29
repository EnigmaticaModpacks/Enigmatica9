ServerEvents.blockLootTables((event) => {
    const crystal_types = ['fluorite', 'sulfur', 'dimensional'];

    // Clusters
    crystal_types.forEach((crystal_type) => {
        event.addBlock(`emendatusenigmatica:${crystal_type}_cluster`, (table) => {
            table.addPool((pool) => {
                pool.addEntry({
                    type: 'minecraft:alternatives',
                    children: [
                        {
                            type: 'minecraft:item',
                            name: `emendatusenigmatica:${crystal_type}_cluster`,
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
                            name: AlmostUnified.getPreferredItemForTag(`forge:gems/${crystal_type}`).getId(),
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
    });

    // Buds
    const bud_sizes = ['small', 'medium', 'large'];

    crystal_types.forEach((crystal_type) => {
        bud_sizes.forEach((size) => {
            event.addBlock(`emendatusenigmatica:${size}_${crystal_type}_bud`, (table) => {
                table.addPool((pool) => {
                    pool.addEntry({
                        type: 'minecraft:alternatives',
                        children: [
                            {
                                type: 'minecraft:item',
                                name: `emendatusenigmatica:${size}_${crystal_type}_bud`,
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
                                name: `emendatusenigmatica:${crystal_type}_dust`,
                                conditions: [{ condition: 'minecraft:survives_explosion' }]
                            }
                        ]
                    });
                });
            });
        });
    });
});
