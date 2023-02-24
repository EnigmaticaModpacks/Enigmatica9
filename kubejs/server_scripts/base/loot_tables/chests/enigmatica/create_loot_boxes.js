ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/create/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('create:super_glue', 1, 1);
            pool.addItem('create:powered_toggle_latch', 3, 1);
            pool.addItem('create:powered_latch', 3, 1);
            pool.addItem('create:shaft', 3, 8);
            pool.addItem('create:analog_lever', 3, 1);
            pool.addItem('create:andesite_casing', 3, 8);
            pool.addItem('create:belt_connector', 3, 4);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/create/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('create:builders_tea', 1, 8);
            pool.addItem('create:pulse_repeater', 1, 1);
            pool.addItem('create:redstone_contact', 1, 1);
            pool.addItem('create:pulse_extender', 1, 1);
            pool.addItem('create:redstone_link', 1, 1);
            pool.addItem('create:copper_casing', 1, 4);
            pool.addItem('create:brass_casing', 1, 4);
            pool.addItem('create:brown_toolbox', 1, 1);
            pool.addItem('create:crafting_blueprint', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/create/rare' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/create/legendary', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('create:electron_tube', 1, 4);
            pool.addItem('create:precision_mechanism', 1, 2);
            pool.addItem('create:blaze_burner', 1, 4);
            pool.addItem('create:mechanical_arm', 1, 1);
            pool.addItem('create:rotation_speed_controller', 1, 1);
            pool.addItem('create:blaze_cake', 1, 8);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/create/epic' });
        });
    });
});
