ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Zombified Piglin Loot Table
    event.addEntity('minecraft:zombified_piglin', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:rotten_flesh', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 },
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
                chance: 0.015,
                looting_multiplier: 0.01
            });
            pool.addItem('minecraft:golden_apple', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });
    });
});
