ServerEvents.chestLootTables((event) => {
    event.modify(`blue_skies:nature_dungeon/chest`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
        });

        table.addPool((pool) => {
            pool.rolls = [3, 4];
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_regeneration"}'), 1, 1);
            pool.addItem('thermal:slime_grenade', 1, [2, 4]);
            pool.addItem('thermal:phyto_grenade', 1, [2, 4]);
            pool.addItem('thermal:xp_stew', 1, 1);
            pool.addItem('thermal:spring_salad', 1, [2, 4]);
            pool.addItem('thermal:hearty_stew', 1, [2, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('naturesaura:infused_stone', 1, [4, 8]);
            pool.addItem('naturesaura:ancient_stick', 1, [12, 16]);
            pool.addItem('naturesaura:ancient_log', 1, [4, 8]);
            pool.addItem('naturesaura:ancient_sapling', 1, [1, 2]);
        });
    });
});
