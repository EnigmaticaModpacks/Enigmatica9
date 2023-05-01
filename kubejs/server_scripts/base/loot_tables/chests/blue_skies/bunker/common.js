ServerEvents.chestLootTables((event) => {
    event.modify(`blue_skies:bunker/common`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [2, 4];

            pool.addItem('thermal:frost_melon_seeds', 75, [1, 3]);
            pool.addItem('thermal:ice_charge', 75, [3, 6]);
            pool.addItem('minecraft:packed_ice', 25, [1, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];

            pool.addItem('farmersdelight:honey_glazed_ham', 1, [2, 4]);
            pool.addItem('farmersdelight:stuffed_pumpkin', 1, [2, 4]);
            pool.addItem('farmersdelight:shepherds_pie', 1, [2, 4]);
            pool.addItem('farmersdelight:hot_cocoa', 1, [2, 4]);
            pool.addItem('farmersdelight:apple_cider', 1, [2, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'minecraft:chests/simple_dungeon' });
        });
    });
});
