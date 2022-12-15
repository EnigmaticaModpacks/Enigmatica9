ServerEvents.genericLootTables((event) => {
    event.addGeneric('occultism:entities/wild_hunt_wither_skeleton', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:coal', 100, 1)
                .randomChance(0.3333)
                .addFunction({
                    function: 'looting_enchant',
                    count: { min: 0, max: 1 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:bone', 100, [1, 2])
                .randomChance(0.6666)
                .addFunction({
                    function: 'looting_enchant',
                    count: { min: 0, max: 1 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:wither_skeleton_skull', 100, 1).killedByPlayer();
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = [0, 1];
            pool.killedByPlayer();
            pool.addItem('minecraft:book', 5, 1).enchantWithLevels([20, 50], true);
            pool.addEntry({ type: 'loot_table', weight: 95, name: 'minecraft:chests/nether_bridge' });
        });

        table.addPool((pool) => {
            pool.rolls = 3.0;
            pool.randomChanceWithLooting(0.3, 0.05);
            pool.addItem('thermal:gold_coin', 100, [16, 64]);
            pool.addItem('thermal:silver_coin', 200, [16, 64]);
            pool.addItem('thermal:copper_coin', 400, [16, 64]);
            pool.addItem('minecraft:emerald', 100, [4, 16]);
        });
    });
});
