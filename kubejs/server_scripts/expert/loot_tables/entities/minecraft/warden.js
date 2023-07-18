ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addEntity('minecraft:warden', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:sculk_catalyst', 1);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem('apotheosis:warden_tendril', 1);
        });
    });
});
