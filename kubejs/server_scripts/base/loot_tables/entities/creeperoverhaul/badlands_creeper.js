ServerEvents.entityLootTables((event) => {
    // Override Badlands Creeper Loot Table
    event.addEntity('creeperoverhaul:badlands_creeper', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:gunpowder', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', min: 0.0, max: 2.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', min: 0.0, max: 1.0 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:terracotta', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', min: 0.0, max: 1.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', min: 0.0, max: 1.0 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({
                condition: 'minecraft:entity_properties',
                predicate: { type: '#minecraft:skeletons' },
                entity: 'killer'
            });
            pool.addEntry({
                type: 'minecraft:tag',
                name: 'minecraft:creeper_drop_music_discs',
                expand: true
            });
        });
    });
});
