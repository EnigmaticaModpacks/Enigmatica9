ServerEvents.genericLootTables((event) => {
    event.addGeneric('cnb:entities/cactem', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:cactus', 1, [1, 3]);
            pool.addItem('byg:barrel_cactus', 1, [1, 3]);
            pool.addItem('byg:flowering_barrel_cactus', 1, [1, 3]);
            pool.addItem('byg:golden_spined_cactus', 1, [1, 3]);
            pool.addItem('byg:mini_cactus', 1, [1, 3]);
            pool.addItem('byg:prickly_pear_cactus', 1, [1, 3]);
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });
    });
});
