ServerEvents.genericLootTables((event) => {
    event.addGeneric('occultism:entities/wild_hunt_wither_skeleton', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:coal', 100, [-1, 1]).addFunction({
                function: 'looting_enchant',
                count: { min: 0, max: 1 }
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:bone', 100, [0, 2]).addFunction({
                function: 'looting_enchant',
                count: { min: 0, max: 1 }
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:wither_skeleton_skull', 100, 1).addCondition({ condition: 'killed_by_player' });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = [0, 1];
            pool.addCondition({ condition: 'killed_by_player' });
            pool.addItem('minecraft:book', 5, 1).addFunction({
                function: 'enchant_with_levels',
                levels: { min: 20, max: 50 },
                treasure: true
            });
            pool.addEntry({ type: 'loot_table', weight: 95, name: 'minecraft:chests/nether_bridge' });
        });

        table.addPool((pool) => {
            pool.rolls = 3.0;
            pool.addCondition({ condition: 'random_chance_with_looting', chance: 0.3, looting_multiplier: 0.05 });
            pool.addItem('thermal:gold_coin', 100, [16, 64]);
            pool.addItem('thermal:silver_coin', 200, [16, 64]);
            pool.addItem('thermal:copper_coin', 400, [16, 64]);
            pool.addItem('minecraft:emerald', 100, [4, 16]);
        });
    });
});
