ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/powah/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('powah:dielectric_paste', 300, 32);
            pool.addItem('powah:uraninite', 250, 32);
            pool.addItem('minecraft:ice', 250, 32);
            pool.addItem('minecraft:blue_ice', 250, 8);
            pool.addItem('powah:dielectric_casing', 250, 4);
            pool.addItem('powah:energy_cell_basic', 250, 1);
            pool.addItem('mekanism:basic_universal_cable', 150, 8);
            pool.addItem('powah:furnator_hardened', 150, 1);
            pool.addItem('powah:dry_ice', 100, 8);
            pool.addItem('powah:energy_hopper_hardened', 100, 1);
            pool.addItem('powah:charged_snowball', 100, 32);
            pool.addItem('powah:energy_discharger_blazing', 100, 1);
            pool.addItem('powah:niotic_crystal_block', 75, 1);
            pool.addItem('powah:energizing_rod_nitro', 75, 1);
            pool.addItem('powah:energy_cell_blazing', 50, 1);
            pool.addItem('powah:crystal_spirited', 50, 6);
            pool.addItem('powah:ender_gate_blazing', 40, 1);
            pool.addItem('powah:crystal_nitro', 25, [4, 8]);
            pool.addItem('powah:nitro_crystal_block', 10, [1, 8]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });
});
