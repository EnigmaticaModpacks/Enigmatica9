ServerEvents.genericLootTables((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/immersive_engineering/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('immersiveengineering:balloon', 1, 16);
            pool.addItem('immersiveengineering:lantern', 1, 16);
            pool.addItem('immersiveengineering:electric_lantern', 1, 8);
            pool.addItem('immersiveengineering:component_iron', 1, 4);
            pool.addItem('immersiveengineering:treated_wood_horizontal', 1, 16);
            pool.addItem('immersiveengineering:hemp_fabric', 1, [16, 32]);
            pool.addItem('immersiveengineering:light_engineering', 1, 2);
            pool.addItem('immersiveengineering:wirecoil_electrum_ins', 1, 8);
            pool.addItem('immersiveengineering:connector_mv_relay', 1, 16);
            pool.addItem('immersiveengineering:connector_mv', 1, 8);
            pool.addItem('immersiveengineering:wirecoil_redstone', 1, 16);
            pool.addItem('immersiveengineering:connector_redstone', 1, 8);
            pool.addItem('immersiveengineering:fluid_pipe', 1, 8);
            pool.addItem('immersiveengineering:conveyor_basic', 1, 8);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem('immersiveengineering:casull', 1, [56, 64]);
            pool.addItem('immersiveengineering:armor_piercing', 1, [56, 64]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/immersive_engineering/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('immersiveengineering:component_steel', 1, 2);
            pool.addItem('immersiveengineering:heavy_engineering', 1, 2);
            pool.addItem('immersiveengineering:wirecoil_steel', 1, 8);
            pool.addItem('immersiveengineering:connector_hv_relay', 1, 16);
            pool.addItem('immersiveengineering:connector_hv', 1, 8);
            pool.addItem('immersiveengineering:plate_duroplast', 1, [8, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem('immersiveengineering:wolfpack', 1, [56, 64]);
            pool.addItem('immersiveengineering:homing', 1, [56, 64]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/immersive_engineering/rare' });
        });
    });
});
