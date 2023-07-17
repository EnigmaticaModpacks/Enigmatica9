ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addEntity('minecraft:wither', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('kubejs:withered_soul', 1);
        });
    });
});
