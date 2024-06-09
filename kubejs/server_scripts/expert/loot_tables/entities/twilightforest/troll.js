ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Cave Troll Loot Table
    event.addEntity('twilightforest:troll', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('twilightforest:trollsteinn', 1, [1, 2]);
            pool.addItem('twilightforest:torchberries', 1, 1);
            pool.addCondition({
                chance: 0.05,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });
    });
});
