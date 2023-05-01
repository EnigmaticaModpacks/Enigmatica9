ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:ancient_city`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.25);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:dragon_familiar"}'), 1, 1);
            pool.addItem('ars_nouveau:warp_scroll', 1, [3, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.25);
            pool.addItem('mekanism:upgrade_speed', 1, [1, 3]);
            pool.addItem('mekanism:upgrade_energy', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.3);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_knowledge"}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('apotheosis:vial_of_extraction', 1, 1);
            pool.addItem('apotheosis:vial_of_expulsion', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.randomChance(0.05);
            pool.addItem('mekanism:pellet_antimatter', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
        });
    });
});
