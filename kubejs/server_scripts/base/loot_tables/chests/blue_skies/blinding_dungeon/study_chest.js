ServerEvents.chestLootTables((event) => {
    event.modify(`blue_skies:blinding_dungeon/study_chest`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:apotheosis_gem_cache' });
            pool.addItem('minecraft:experience_bottle', 75, [1, 4]);
            pool.addItem('ars_nouveau:warp_scroll', 75, [1, 2]);
            pool.addItem('ae2:sky_dust', 75, [1, 4]);
            pool.addItem('hexerei:dried_sage_bundle', 75, [1, 4]);

            pool.addItem('ars_nouveau:amulet_of_mana_boost', 25, 1);
            pool.addItem('supplementaries:hourglass', 25, 1);
            pool.addItem('supplementaries:globe', 25, 1);
            pool.addItem('supplementaries:antique_ink', 25, [1, 5]);
        });
    });
});
