ServerEvents.genericLootTables((event) => {
    event.addGeneric(`twilightforest:structures/hill_1`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 6];
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'twilightforest:structures/useless' });
            pool.addItem('emendatusenigmatica:raw_iron', 75, [1, 6]);
            pool.addItem('emendatusenigmatica:raw_gold', 75, [1, 5]);
            pool.addItem('emendatusenigmatica:raw_copper', 75, [1, 4]);
            pool.addItem('emendatusenigmatica:raw_silver', 75, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_tin', 75, [1, 2]);
            pool.addItem('minecraft:wheat', 75, [1, 4]);
            pool.addItem('minecraft:string', 75, [1, 4]);
            pool.addItem('minecraft:bucket', 75, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('minecraft:torch', 1, [1, 12]);
            pool.addItem('quark:torch_arrow', 1, [1, 12]);
            pool.addItem('minecraft:gunpowder', 1, [1, 4]);
            pool.addItem('minecraft:bread', 1, [1, 4]);
            pool.addItem('twilightforest:ore_magnet', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('twilightforest:liveroot', 75, [1, 3]);
            pool.addItem('twilightforest:steeleaf_pickaxe', 75, 1).enchantWithLevels(15, true);
            pool.addItem('naturesaura:infused_iron_pickaxe', 25, 1).enchantWithLevels(15, true);
            pool.addItem('twilightforest:transformation_powder', 25, [1, 12]);
            pool.addItem('twilightforest:steeleaf_ingot', 25, [3, 7]);
            pool.addItem('twilightforest:music_disc_findings', 25, 1);
        });
    });
});
