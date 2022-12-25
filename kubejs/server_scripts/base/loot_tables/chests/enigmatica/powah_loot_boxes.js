ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/powah/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('powah:dielectric_paste', 300, 32);
            pool.addItem('powah:uraninite', 250, 8);
            pool.addItem('minecraft:ice', 250, 32);
            pool.addItem('minecraft:blue_ice', 250, 8);
            pool.addItem('powah:dry_ice', 100, 8);
            pool.addItem('powah:dielectric_casing', 250, 4);
            pool.addItem('powah:energy_cell_basic', 250, 1);
            pool.addItem('powah:charged_snowball', 100, 32);

            pool.addItem('powah:energy_hopper_blazing', 100, 1);
            pool.addItem('powah:energy_discharger_blazing', 100, 1);
            pool.addItem('powah:energizing_rod_blazing', 75, 1);
            pool.addItem('powah:energy_cell_blazing', 50, 1);
            pool.addItem('powah:ender_gate_blazing', 40, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });
});
