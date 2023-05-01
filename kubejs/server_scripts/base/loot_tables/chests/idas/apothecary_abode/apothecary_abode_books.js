ServerEvents.chestLootTables((event) => {
    event.modify(`idas:apothecary_abode/apothecary_abode_books`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.5);
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_1' });
        });
    });
});
