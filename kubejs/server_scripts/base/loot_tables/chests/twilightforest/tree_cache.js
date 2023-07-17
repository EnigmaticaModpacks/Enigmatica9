ServerEvents.genericLootTables((event) => {
    event.modify(`twilightforest:structures/tree_cache`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.15);
            pool.addItem('immersiveengineering:seed', 1, [2, 5]);
            pool.addItem('occultism:datura_seeds', 1, [2, 5]);
            pool.addItem('hexerei:sage_seed', 1, [2, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.5);
            pool.addItem('thermal:upgrade_augment_1', 2, 1);
            pool.addItem('thermal:machine_speed_augment', 1, [1, 3]);
            pool.addItem('functionalstorage:copper_upgrade', 3, [1, 3]);
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_2', 3, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.5);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:otherworld_bird"}'), 1, 1);
            pool.addItem(Item.of('immersiveengineering:glider', '{Damage:0}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 2];
            pool.addItem('superiorshields:steeleaf_shield', 1, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:steeleaf_sword', 1, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:steeleaf_boots', 1, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:steeleaf_leggings', 1, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:steeleaf_chestplate', 1, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:steeleaf_helmet', 1, 1).enchantWithLevels(15, true);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.3);
            pool.addItem(Item.of('sophisticatedbackpacks:iron_backpack'), 1, 1);
        });
    });
});
