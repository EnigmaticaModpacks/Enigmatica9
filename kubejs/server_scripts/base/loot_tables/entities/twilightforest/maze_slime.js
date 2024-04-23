ServerEvents.entityLootTables((event) => {
    // Override Maze Slime Loot Table
    event.addEntity('twilightforest:maze_slime', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:slime_ball', 1, [0, 1]).addFunction({
                function: 'minecraft:looting_enchant',
                count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
            });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;

            pool.addItem('twilightforest:maze_wafer', 1, [1, 3]);
            pool.addCondition({
                chance: 0.015,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.005
            });
        });
    });
});
