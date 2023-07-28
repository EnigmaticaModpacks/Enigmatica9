ServerEvents.chestLootTables((event) => {
    event.addChest(`minecraft:nether_bridge`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem('minecraft:diamond', 5, [1, 3]);
            pool.addItem('minecraft:raw_iron', 5, [1, 3]);
            pool.addItem('minecraft:raw_gold', 5, [1, 3]);
            pool.addItem('minecraft:raw_copper', 5, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_silver', 5, [1, 3]);
            pool.addItem('minecraft:golden_sword', 5, 1);
            pool.addItem('minecraft:golden_helmet', 5, 1);
            pool.addItem('minecraft:golden_chestplate', 5, 1);
            pool.addItem('minecraft:golden_leggings', 5, 1);
            pool.addItem('minecraft:golden_boots', 5, 1);
            pool.addItem('minecraft:flint_and_steel', 5, 1);
            pool.addItem('minecraft:nether_wart', 5, [3, 7]);
            pool.addItem('minecraft:saddle', 10, 1);
            pool.addItem('minecraft:golden_horse_armor', 8, 1);
            pool.addItem('minecraft:iron_horse_armor', 5, 1);
            pool.addItem('minecraft:diamond_horse_armor', 3, 1);
            pool.addItem('minecraft:obsidian', 2, [2, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:ars_nouveau_glyph_cache/tier_2' });
        });
    });
});
