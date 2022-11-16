ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Kobold Loot Table
    event.addEntity('twilightforest:kobold', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:wheat', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({ condition: 'minecraft:killed_by_player' });
            pool.addCondition({
                condition: 'minecraft:random_chance_with_looting',
                chance: 0.075,
                looting_multiplier: 0.02
            });

            pool.addItem('minecraft:prismarine_crystals', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });
    });
});
