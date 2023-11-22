ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/ur_ghast', (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(Item.of('kubejs:dream_stone'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [5, 16];
            pool.addItem(Item.of('minecraft:ancient_debris'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [10, 16];
            pool.addItem(Item.of('ars_nouveau:fire_essence'), 1, 1);
        });
    });
});
