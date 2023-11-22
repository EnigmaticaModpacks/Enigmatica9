ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:structures/troll_vault', (table) => {
        table.addPool((pool) => {
            pool.rolls = [10, 16];
            pool.addItem(Item.of('ars_nouveau:earth_essence'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [16, 32];
            pool.addItem(Item.of('pneumaticcraft:compressed_stone'), 1, 1);
        });
    });
});
