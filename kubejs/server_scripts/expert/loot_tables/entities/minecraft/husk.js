ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Husk Loot Table
    event.addEntity('minecraft:husk', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:rotten_flesh', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({ condition: 'minecraft:killed_by_player' });
            pool.addCondition({
                condition: 'minecraft:random_chance_with_looting',
                chance: 0.025,
                looting_multiplier: 0.01
            });

            pool.addItem('supplementaries:flax', 1);
            pool.addItem('minecraft:cactus', 1);
            pool.addItem('byg:joshua_fruit', 1).addFunction({
                function: 'minecraft:furnace_smelt',
                conditions: [
                    {
                        condition: 'minecraft:entity_properties',
                        entity: 'this',
                        predicate: { flags: { is_on_fire: true } }
                    }
                ]
            });
        });
    });
});
