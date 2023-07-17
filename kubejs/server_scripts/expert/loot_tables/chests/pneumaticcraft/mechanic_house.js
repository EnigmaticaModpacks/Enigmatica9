ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('pneumaticcraft:chests/mechanic_house', (table) => {
        table.addPool((pool) => {
            pool.rolls = 8.0;
            pool.addItem('pneumaticcraft:ingot_iron_compressed', 10, [4, 12]);
            pool.addItem('pneumaticcraft:amadron_tablet', 2, 1);
            pool.addItem('pneumaticcraft:air_canister', 10, [1, 5]);
            pool.addItem('pneumaticcraft:pneumatic_cylinder', 5, [2, 4]);
            pool.addItem('pneumaticcraft:logistics_core', 8, [4, 8]);
            pool.addItem('pneumaticcraft:turbine_rotor', 5, [2, 4]);
            pool.addItem('pneumaticcraft:compressed_iron_block', 2, [1, 2]);
            pool.addItem('pneumaticcraft:vortex_tube', 5, 1);
            pool.addItem('pneumaticcraft:pressure_tube', 10, [3, 8]);
            pool.addItem('pneumaticcraft:reinforced_pressure_tube', 10, [3, 8]);
            pool.addItem('pneumaticcraft:advanced_pressure_tube', 4, [3, 8]);
            pool.addItem('pneumaticcraft:heat_pipe', 8, [3, 8]);
            pool.addItem('pneumaticcraft:aphorism_tile', 5, [2, 3]);
            pool.addItem('pneumaticcraft:module_expansion_card', 5, [2, 3]);
        });
    });
});
