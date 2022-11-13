ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Carminite Golem Loot Table
    event.addEntity('twilightforest:carminite_golem', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('twilightforest:towerwood', 1).addFunction({
                function: 'minecraft:set_count',
                count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                add: false
            });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('quark:rusty_iron_plate', 3).addFunction({
                function: 'minecraft:set_count',
                count: { type: 'minecraft:uniform', max: 4.0, min: 2.0 },
                add: false
            });
            pool.addItem('quark:iron_plate', 1).addFunction({
                function: 'minecraft:set_count',
                count: { type: 'minecraft:uniform', max: 4.0, min: 2.0 },
                add: false
            });
        });
    });
});
