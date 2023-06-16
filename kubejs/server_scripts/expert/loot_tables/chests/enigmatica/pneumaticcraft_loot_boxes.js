ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/pneumaticcraft/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('pneumaticcraft:pressure_tube', 2, 16);
            pool.addItem('pneumaticcraft:logistics_core', 1, 8);
            pool.addItem('pneumaticcraft:crop_support', 1, 4);
            pool.addItem('pneumaticcraft:reinforced_brick_tile', 2, 16);
            pool.addItem('pneumaticcraft:omnidirectional_hopper', 1, 1);
            pool.addItem('pneumaticcraft:liquid_hopper', 1, 1);
            pool.addItem('pneumaticcraft:medium_tank', 2, 1);
            pool.addItem('pneumaticcraft:module_expansion_card', 2, 2);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/pneumaticcraft/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('pneumaticcraft:reinforced_pressure_tube', 2, 16);
            pool.addItem('pneumaticcraft:printed_circuit_board', 2, 8);
            pool.addItem('pneumaticcraft:speed_upgrade', 2, 2);
            pool.addItem('pneumaticcraft:volume_upgrade', 2, 4);
            pool.addItem('pneumaticcraft:compressed_iron_block', 1, [3, 6]);
            pool.addItem('pneumaticcraft:large_tank', 2, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/pneumaticcraft/rare' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/pneumaticcraft/legendary', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('pneumaticcraft:advanced_pressure_tube', 2, 16);
            pool.addItem('pneumaticcraft:programming_puzzle', 3, 16);
            pool.addItem('pneumaticcraft:printed_circuit_board', 3, [1, 3]);
            pool.addItem('pneumaticcraft:smart_chest', 1, 1);
            pool.addItem('pneumaticcraft:huge_tank', 1, 1);
            pool.addItem(Item.of('pneumaticcraft:drone', '{"pneumaticcraft:air": 120000}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/pneumaticcraft/epic' });
        });
    });
});
