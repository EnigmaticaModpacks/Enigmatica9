ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/immersive_engineering/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('immersiveengineering:balloon', 1, 16);
            pool.addItem('immersiveengineering:lantern', 1, 16);
            pool.addItem('immersiveengineering:treated_wood_horizontal', 1, 16);
            pool.addItem('immersiveengineering:hemp_fabric', 1, [16, 32]);
            pool.addItem('immersiveengineering:light_engineering', 1, 2);
            pool.addItem('immersiveengineering:wire_copper', 1, 16);
            pool.addItem('immersiveengineering:wire_electrum', 1, 16);
            pool.addItem('immersiveengineering:wirecoil_redstone', 1, 16);
            pool.addItem('immersiveengineering:connector_redstone', 1, 8);
            pool.addItem('immersiveengineering:fluid_pipe', 1, 8);
            pool.addItem('immersiveengineering:conveyor_basic', 1, 8);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('immersiveengineering:casull', 1, [16, 24]);
            pool.addItem('immersiveengineering:armor_piercing', 1, [16, 24]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/immersive_engineering/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('immersiveengineering:heavy_engineering', 1, 2);
            pool.addItem('immersiveengineering:wire_aluminum', 1, 16);
            pool.addItem('immersiveengineering:wire_steel', 1, 16);
            pool.addItem('immersiveengineering:plate_duroplast', 1, [8, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('immersiveengineering:wolfpack', 1, [16, 24]);
            pool.addItem('immersiveengineering:homing', 1, [16, 24]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/immersive_engineering/rare' });
        });
    });
});
