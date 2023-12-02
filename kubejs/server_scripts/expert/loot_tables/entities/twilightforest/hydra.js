ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/hydra', (table) => {
        table.addPool((pool) => {
            pool.rolls = [10, 16];
            pool.addItem(Item.of('ars_nouveau:fire_essence'), 1, 1);
        });
    });
});
