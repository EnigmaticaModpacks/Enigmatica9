ServerEvents.genericLootTables((event) => {
    // Override Stoneling Carry Loot Table
    event.addGeneric('quark:entities/stoneling_carry', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('supplementaries:rope_arrow', 200);
            pool.addItem('minecraft:redstone', 300, [10, 15]);
            pool.addItem('minecraft:emerald', 200, [1, 3]);
            pool.addItem('minecraft:zombie_head', 250);
            pool.addItem('minecraft:creeper_head', 250);
            pool.addItem('minecraft:lapis_lazuli', 200, [4, 8]);
            pool.addItem('minecraft:golden_apple', 50);
            pool.addItem('minecraft:saddle', 50);
            pool.addItem('minecraft:iron_horse_armor', 50);
            pool.addItem('minecraft:golden_horse_armor', 40);
            pool.addItem('minecraft:diamond_horse_armor', 30);
            pool.addItem('minecraft:name_tag', 100);

            pool.addItem('quark:black_corundum', 100);
            pool.addItem('quark:white_corundum', 100);
            pool.addItem('quark:violet_corundum', 100);
            pool.addItem('quark:indigo_corundum', 100);
            pool.addItem('quark:blue_corundum', 100);
            pool.addItem('quark:green_corundum', 100);
            pool.addItem('quark:yellow_corundum', 100);
            pool.addItem('quark:orange_corundum', 100);
            pool.addItem('quark:red_corundum', 100);
        });
    });
});
