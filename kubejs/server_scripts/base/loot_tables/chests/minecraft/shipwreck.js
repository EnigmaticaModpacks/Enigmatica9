ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:shipwreck_supply`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem(Item.of('immersiveengineering:seed'), 1, [5, 10]);
            pool.addItem(Item.of('occultism:datura_seeds'), 1, [5, 10]);
            pool.addItem(Item.of('hexerei:sage_seed'), 1, [5, 10]);
            pool.addItem(Item.of('hexerei:yellow_dock_bush'), 1, [5, 10]);
            pool.addItem(Item.of('hexerei:mugwort_bush'), 1, [5, 10]);
            pool.addItem(Item.of('hexerei:mandrake_flower'), 1, [5, 10]);
            pool.addItem(Item.of('hexerei:belladonna_flower'), 1, [5, 10]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.3);
            pool.addItem(
                Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:water_breathing"}'),
                1,
                [1, 3]
            );
        });
    });

    event.modify(`minecraft:shipwreck_treasure`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem(Item.of('thermal:diving_boots'), 1).enchantWithLevels(15, true);
            pool.addItem(Item.of('thermal:diving_leggings'), 1).enchantWithLevels(15, true);
            pool.addItem(Item.of('thermal:diving_chestplate'), 1).enchantWithLevels(15, true);
            pool.addItem(Item.of('thermal:diving_helmet'), 1).enchantWithLevels(15, true);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(Item.of('minecraft:heart_of_the_sea'), 1);
            pool.addItem(Item.of('minecraft:nautilus_shell'), 1, [5, 14]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.15);
            pool.addItem(Item.of('ars_elemental:siren_shards'), 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.05);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:cthulhu_familiar"}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.15);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [2, 4]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [2, 4]);
        });
    });
});
