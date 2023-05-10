ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:structures/darktower_boss', (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(Item.of('kubejs:dream_stone'), 1, 1);
        });
    });
});
