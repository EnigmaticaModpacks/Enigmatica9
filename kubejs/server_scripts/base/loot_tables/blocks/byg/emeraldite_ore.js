ServerEvents.blockLootTables((event) => {
    event.addBlock(`byg:emeraldite_ore`, (table) => {
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
                                condition: 'minecraft:match_tool',
                                predicate: {
                                    enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
                                }
                            }
                        ],
                        name: 'byg:emeraldite_ore'
                    },
                    {
                        type: 'minecraft:item',
                        functions: [
                            {
                                enchantment: 'minecraft:fortune',
                                formula: 'minecraft:ore_drops',
                                function: 'minecraft:apply_bonus'
                            },
                            { function: 'minecraft:explosion_decay' }
                        ],
                        name: 'minecraft:emerald'
                    }
                ]
            });
        });
    });
});
