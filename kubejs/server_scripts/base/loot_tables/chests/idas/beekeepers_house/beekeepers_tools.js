ServerEvents.chestLootTables((event) => {
    event.addChest(`idas:beekeepers_house/beekeepers_tools`, (table) => {
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('thermal:beekeeper_boots', 10, 1);
            pool.addItem('thermal:beekeeper_boots', 5, 1).enchantWithLevels(15, false);
        });
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('thermal:beekeeper_leggings', 10, 1);
            pool.addItem('thermal:beekeeper_leggings', 5, 1).enchantWithLevels(15, false);
        });
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('thermal:beekeeper_chestplate', 10, 1);
            pool.addItem('thermal:beekeeper_chestplate', 5, 1).enchantWithLevels(15, false);
        });
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('thermal:beekeeper_helmet', 10, 1);
            pool.addItem('thermal:beekeeper_helmet', 5, 1).enchantWithLevels(15, false);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];

            pool.addItem('thermal:device_hive_extractor', 1, 1);
            pool.addItem('the_bumblezone:honey_compass', 1, 1);
            pool.addItem('minecraft:beehive', 1, 1);
            pool.addItem('minecraft:flint_and_steel', 1, 1);
            pool.addItem('minecraft:shears', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];

            pool.addItem('the_bumblezone:super_candle', 1, [2, 4]);
            pool.addItem('minecraft:honeycomb', 1, [4, 16]);
            pool.addItem('the_bumblezone:pollen_puff', 1, [2, 4]);
            pool.addItem('the_bumblezone:honey_crystal_shards', 1, [2, 4]);
        });
    });
});
