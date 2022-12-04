ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/mekanism/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem(
                Item.of(
                    'mekanism:advanced_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:128000L,infuseTypeName:"mekanism:bio"}}]}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'mekanism:advanced_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:128000L,infuseTypeName:"mekanism:fungi"}}]}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'mekanism:advanced_chemical_tank',
                    '{mekData:{GasTanks:[{Tank:0b,stored:{amount:16000L,gasName:"mekanism:ethene"}}]}}'
                ),
                1,
                1
            );
            pool.addItem('mekanism:upgrade_speed', 1, [1, 3]);
            pool.addItem('mekanism:upgrade_energy', 1, [1, 3]);
            pool.addItem('mekanism:dynamic_tank', 1, 28);
            pool.addItem('mekanism:basic_pressurized_tube', 1, 16);
            pool.addItem('mekanism:basic_universal_cable', 1, 16);
            pool.addItem('mekanism:basic_mechanical_pipe', 1, 16);
            pool.addItem('mekanism:elite_tier_installer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/mekanism/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem(
                Item.of(
                    'mekanism:advanced_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:8000L,infuseTypeName:"mekanism:carbon"}}]}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'mekanism:advanced_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:8000L,infuseTypeName:"mekanism:redstone"}}]}}'
                ),
                1,
                1
            );
            pool.addItem('mekanism:upgrade_speed', 1, [2, 5]);
            pool.addItem('mekanism:upgrade_energy', 1, [2, 5]);
            pool.addItem('mekanism:advanced_pressurized_tube', 1, 16);
            pool.addItem('mekanism:advanced_universal_cable', 1, 16);
            pool.addItem('mekanism:advanced_mechanical_pipe', 1, 16);
            pool.addItem('mekanism:ultimate_tier_installer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/mekanism/rare' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/mekanism/legendary', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('mekanism:reprocessed_fissile_fragment', 1, [12, 36]);
            pool.addItem('mekanism:quantum_entangloporter', 1, 1);
            pool.addItem('mekanism:upgrade_speed', 1, [6, 9]);
            pool.addItem('mekanism:upgrade_energy', 1, [6, 9]);
            pool.addItem('mekanism:ultimate_induction_cell', 1, 1);
            pool.addItem('mekanism:pellet_polonium', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/mekanism/epic' });
        });
    });
});
