ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/special', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({
                type: 'apotheosis:random_gem',
                weight: 1,
                quality: 15
            }).randomChance(0.1);
        });
    });
});
