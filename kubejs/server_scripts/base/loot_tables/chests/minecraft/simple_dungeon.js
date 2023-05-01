ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:simple_dungeon`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.25);
            pool.addItem(Item.of('immersiveengineering:seed'), 1, [1, 5]);
            pool.addItem(Item.of('occultism:datura_seeds'), 1, [1, 5]);
            pool.addItem(Item.of('hexerei:sage_seed'), 1, [1, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.15);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [2, 4]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [2, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.15);
            pool.addItem('thermal:upgrade_augment_1', 2, 1);
            pool.addItem('thermal:machine_speed_augment', 1, [1, 3]);
            pool.addItem('functionalstorage:copper_upgrade', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.05);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:greedy_familiar"}'), 1, 1);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:bat_familiar"}'), 1, 1);
        });
    });
});
