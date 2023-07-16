ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('immersiveengineering:chests/engineers_house', (table) => {
        table.addPool((pool) => {
            pool.rolls = 8.0;
            pool.addItem('immersiveengineering:stick_treated', 10, [2, 7]);
            pool.addItem('emendatusenigmatica:iron_rod', 10, [1, 4]);
            pool.addItem('emendatusenigmatica:electrum_rod', 10, [1, 4]);
            pool.addItem('emendatusenigmatica:bronze_rod', 10, [1, 4]);
            pool.addItem('emendatusenigmatica:osmium_rod', 10, [1, 4]);
            pool.addItem('emendatusenigmatica:steel_rod', 10, [1, 4]);
            pool.addItem('emendatusenigmatica:aluminum_rod', 10, [1, 4]);
            pool.addItem('immersiveengineering:hemp_fabric', 10, [5, 10]);
            pool.addItem('powah:crystal_blazing', 10, [3, 9]);

            pool.addItem('immersiveengineering:dragons_breath', 10, [5, 10]);
            pool.addItem('immersiveengineering:homing', 10, [5, 10]);
            pool.addItem('immersiveengineering:armor_piercing', 10, [5, 10]);

            pool.addItem('immersiveengineering:light_engineering', 5, [1, 2]);
            pool.addItem('immersiveengineering:component_electronic', 5, [3, 6]);
        });
    });
});
