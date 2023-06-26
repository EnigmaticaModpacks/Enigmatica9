ServerEvents.blockLootTables((event) => {
    const dense_types = [
        'warped_stem',
        'crimson_stem',
        'mangrove_log',
        'dark_oak_log',
        'acacia_log',
        'jungle_log',
        'birch_log',
        'spruce_log',
        'oak_log'
    ];
    dense_types.forEach((type) => {
        event.addBlock(`densetrees:dense_${type}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = 16.0;
                pool.bonusRolls = 0.0;
                pool.addEntry({ type: 'minecraft:item', name: `minecraft:${type}` });
                pool.addCondition({ condition: 'minecraft:survives_explosion' });
            });
        });
    });
});
