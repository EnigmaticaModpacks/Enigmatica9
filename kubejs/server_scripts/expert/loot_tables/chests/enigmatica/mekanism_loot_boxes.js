ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/mekanism/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem(
                Item.of(
                    'mekanism:basic_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:128000L,infuseTypeName:"mekanism:bio"}}]}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'mekanism:basic_chemical_tank',
                    '{mekData:{InfusionTanks:[{Tank:0,stored:{amount:128000L,infuseTypeName:"mekanism:fungi"}}]}}'
                ),
                1,
                1
            );

            pool.addItem('mekanism:upgrade_speed', 1, [1, 2]);
            pool.addItem('mekanism:upgrade_energy', 1, [1, 2]);
            pool.addItem('mekanism:dynamic_tank', 1, 28);
            pool.addItem('mekanism:basic_tier_installer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/mekanism/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;

            pool.addItem('mekanism:upgrade_speed', 1, [1, 2]);
            pool.addItem('mekanism:upgrade_energy', 1, [1, 2]);
            pool.addItem('mekanism:advanced_tier_installer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/mekanism/rare' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/mekanism/legendary', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('mekanism:upgrade_speed', 1, [2, 3]);
            pool.addItem('mekanism:upgrade_energy', 1, [2, 3]);
            pool.addItem('mekanism:elite_tier_installer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/mekanism/epic' });
        });
    });
});
