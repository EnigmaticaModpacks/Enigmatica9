ServerEvents.blockLootTables((event) => {
    event.addBlock(`minecraft:oak_leaves`, (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = 0.0;
            pool.addEntry({
                type: 'minecraft:alternatives',
                children: [
                    {
                        type: 'minecraft:item',
                        conditions: [
                            {
                                condition: 'minecraft:alternative',
                                terms: [
                                    {
                                        condition: 'minecraft:match_tool',
                                        predicate: { items: ['minecraft:shears'] }
                                    },
                                    {
                                        condition: 'minecraft:match_tool',
                                        predicate: {
                                            enchantments: [
                                                {
                                                    enchantment: 'minecraft:silk_touch',
                                                    levels: { min: 1 }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ],
                        name: 'minecraft:oak_leaves'
                    },
                    {
                        type: 'minecraft:item',
                        conditions: [
                            { condition: 'minecraft:survives_explosion' },
                            {
                                chances: [0.05, 0.0625, 0.083333336, 0.1],
                                condition: 'minecraft:table_bonus',
                                enchantment: 'minecraft:fortune'
                            }
                        ],
                        name: 'minecraft:oak_sapling'
                    }
                ]
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = 0.0;
            pool.addEntry({
                type: 'minecraft:item',
                conditions: [
                    {
                        chances: [0.02, 0.022222223, 0.025, 0.033333335, 0.1],
                        condition: 'minecraft:table_bonus',
                        enchantment: 'minecraft:fortune'
                    }
                ],
                functions: [
                    {
                        add: false,
                        count: { type: 'minecraft:uniform', max: 2.0, min: 1.0 },
                        function: 'minecraft:set_count'
                    },
                    { function: 'minecraft:explosion_decay' }
                ],
                name: 'minecraft:stick'
            });
            pool.addCondition({
                condition: 'minecraft:inverted',
                term: {
                    condition: 'minecraft:alternative',
                    terms: [
                        {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                items: ['minecraft:shears']
                            }
                        },
                        {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                enchantments: [
                                    {
                                        enchantment: 'minecraft:silk_touch',
                                        levels: {
                                            min: 1
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            });
        });

        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.bonusRolls = 0.0;
            pool.addEntry({
                type: 'minecraft:item',
                conditions: [
                    {
                        condition: 'minecraft:survives_explosion'
                    },
                    {
                        chances: [0.04, 0.044444446, 0.05, 0.066666667, 0.2],
                        condition: 'minecraft:table_bonus',
                        enchantment: 'minecraft:fortune'
                    }
                ],
                name: 'minecraft:apple'
            });
            pool.addCondition({
                condition: 'minecraft:inverted',
                term: {
                    condition: 'minecraft:alternative',
                    terms: [
                        {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                items: ['minecraft:shears']
                            }
                        },
                        {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                enchantments: [
                                    {
                                        enchantment: 'minecraft:silk_touch',
                                        levels: {
                                            min: 1
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            });
        });
    });
});
