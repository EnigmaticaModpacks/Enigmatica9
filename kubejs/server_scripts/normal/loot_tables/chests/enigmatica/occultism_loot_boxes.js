ServerEvents.genericLootTables((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/occultism/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('occultism:spirit_attuned_gem', 1, 4);
            pool.addItem('occultism:otherworld_log', 1, [8, 32]);
            pool.addItem('occultism:soul_gem', 1, 1);
            pool.addItem('minecraft:candle', 1, [4, 8]);
            pool.addItem('occultism:book_of_binding_foliot', 1, [1, 2]);
            pool.addItem('occultism:book_of_binding_djinni', 1, [1, 2]);
            pool.addItem('occultism:storage_stabilizer_tier1', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/occultism/legendary', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('occultism:stable_wormhole', 1, 1);
            pool.addItem('minecraft:skeleton_skull', 1, [4, 8]);
            pool.addItem('occultism:book_of_binding_afrit', 1, [1, 2]);
            pool.addItem('occultism:book_of_binding_marid', 1, [1, 2]);
            pool.addItem('occultism:storage_stabilizer_tier2', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/occultism/epic' });
        });
    });
});
