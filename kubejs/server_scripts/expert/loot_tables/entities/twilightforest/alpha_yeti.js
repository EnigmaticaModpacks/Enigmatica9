ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/alpha_yeti', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_nouveau:water_essence'), 1, [10, 16]);
        });
    });
});
