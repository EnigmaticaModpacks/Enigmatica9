ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/snow_queen', (table) => {
        table.addPool((pool) => {
            pool.rolls = [20, 35];
            pool.addItem(Item.of('blue_skies:moonstone'), 1);
        });

        table.addPool((pool) => {
            pool.rolls = [4, 4];
            pool.addItem(Item.of('ars_nouveau:stable_warp_scroll'), 1);
        });
    });
});
