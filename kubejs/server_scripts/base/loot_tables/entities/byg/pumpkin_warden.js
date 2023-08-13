ServerEvents.genericLootTables((event) => {
    event.addGeneric('byg:entities/pumpkin_warden', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:pumpkin', 1, [1, 3]);
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('twilightforest:liveroot', 1, [1, 3]);
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });
    });
});
