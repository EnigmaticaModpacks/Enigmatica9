ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:desert_pyramid`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.15);
            pool.addItem(Item.of('immersiveengineering:seed'), 1, [2, 5]);
            pool.addItem(Item.of('occultism:datura_seeds'), 1, [2, 5]);
            pool.addItem(Item.of('hexerei:sage_seed'), 1, [2, 5]);
            pool.addItem(Item.of('hexerei:yellow_dock_bush'), 1, [2, 5]);
            pool.addItem(Item.of('hexerei:mugwort_bush'), 1, [2, 5]);
            pool.addItem(Item.of('hexerei:mandrake_flower'), 1, [2, 5]);
            pool.addItem(Item.of('hexerei:belladonna_flower'), 1, [2, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.25);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [6, 10]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [6, 10]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.15);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:mummy_familiar"}'), 1, 1);
            pool.addItem('hexerei:crow_ankh_amulet', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.3);
            pool.addItem(
                Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:recovery_potion_strong"}'),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.15);
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
        });
    });
});
