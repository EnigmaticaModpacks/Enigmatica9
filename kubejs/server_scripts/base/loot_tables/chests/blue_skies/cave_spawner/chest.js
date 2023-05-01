ServerEvents.chestLootTables((event) => {
    const loot_tables = [`blue_skies:cave_spawner/chest_everbright`, `blue_skies:cave_spawner/chest_everdawn`];

    loot_tables.forEach((loot_table) => {
        event.modify(loot_table, (table) => {
            table.addPool((pool) => {
                pool.rolls = [1, 2];
                pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
            });

            table.addPool((pool) => {
                pool.rolls = 1.0;
                pool.addEntry({ type: 'loot_table', weight: 1, name: 'minecraft:chests/simple_dungeon' });
            });
        });
    });
});
