ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/hydra', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_nouveau:fire_essence'), 1, [10, 16]);
        });
    });
});
