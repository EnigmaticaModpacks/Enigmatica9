ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:apotheosis_gem_cache', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({
                type: 'apotheosis:random_gem',
                weight: 1,
                quality: 30
            });
        });
    });
});
