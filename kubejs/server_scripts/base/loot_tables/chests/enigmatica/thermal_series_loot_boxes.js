ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/thermal_series/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('thermal:machine_frame', 1, 2);
            pool.addItem('thermal:obsidian_glass', 1, 4);
            pool.addItem('thermal:upgrade_augment_2', 1, 1);
            pool.addItem('thermal:fluid_cell', 1, 1);
            pool.addItem('thermal:device_soil_infuser', 1, 1);
            pool.addItem('thermal:phytosoil', 1, 16);
            pool.addItem('thermal:aquachow', 1, 16);
            pool.addItem('thermal:deep_aquachow', 1, 16);
        });

        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('thermal:earth_grenade', 1, [8, 16]);
            pool.addItem('thermal:phyto_grenade', 1, [8, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/thermal_series/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('thermal:rf_coil_xfer_augment', 1, 1);
            pool.addItem('thermal:machine_speed_augment', 1, 1);
            pool.addItem('thermal:machine_output_augment', 1, 1);
            pool.addItem('thermal:dynamo_output_augment', 1, 1);
            pool.addItem('thermal:dynamo_fuel_augment', 1, 1);
            pool.addItem('thermal:upgrade_augment_3', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('thermal:lightning_grenade', 1, [8, 16]);
            pool.addItem('thermal:glacial_grenade', 1, [8, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/thermal_series/rare' });
        });
    });
});
