ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/lich', (table) => {
        table.addPool((pool) => {
            pool.rolls = [5, 15];
            pool.addItem(Item.of('twilightforest:naga_scale'), 1);
        });
    });
});
