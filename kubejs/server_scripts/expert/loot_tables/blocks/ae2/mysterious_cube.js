ServerEvents.blockLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addBlock('ae2:mysterious_cube', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('ae2:mysterious_cube'), 1, 1);
        });
    });
});
