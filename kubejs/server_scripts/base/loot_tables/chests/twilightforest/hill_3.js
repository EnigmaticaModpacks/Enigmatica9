ServerEvents.genericLootTables((event) => {
    event.addGeneric(`twilightforest:structures/hill_3`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 6];
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'twilightforest:structures/useless' });
            pool.addItem('emendatusenigmatica:raw_iron', 75, [1, 6]);
            pool.addItem('emendatusenigmatica:raw_gold', 75, [1, 5]);
            pool.addItem('emendatusenigmatica:raw_copper', 75, [1, 4]);
            pool.addItem('emendatusenigmatica:raw_silver', 75, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_tin', 75, [1, 2]);
            pool.addItem('minecraft:potato', 75, [1, 4]);
            pool.addItem('minecraft:cod', 75, [1, 6]);
            pool.addItem('twilightforest:torchberries', 75, [1, 7]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('minecraft:gunpowder', 1, [1, 8]);
            pool.addItem('quark:torch_arrow', 1, [2, 24]);
            pool.addItem('minecraft:gunpowder', 1, [1, 4]);
            pool.addItem('twilightforest:ore_magnet', 1, 1);
            pool.addItem('minecraft:pumpkin_pie', 1, 1);
            pool.addItem('twilightforest:steeleaf_ingot', 1, [3, 7]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addItem('twilightforest:magic_map', 75, [1, 3]);
            pool.addItem('twilightforest:transformation_powder', 75, [1, 12]);
            pool.addItem('naturesaura:infused_iron_pickaxe', 75, 1).enchantWithLevels(25, true);
            pool.addItem('naturesaura:sky_pickaxe', 25, 1).enchantWithLevels(25, true);
            pool.addItem('minecraft:diamond', 25, [1, 2]);
            pool.addItem('minecraft:emerald', 25, [3, 6]);
            pool.addItem('twilightforest:moonworm_queen', 25, 1);
            pool.addItem('twilightforest:charm_of_life_1', 25, 1);
            pool.addItem('twilightforest:charm_of_keeping_1', 25, 1);
            pool.addItem('twilightforest:ironwood_block', 25, 1);
            pool.addItem('twilightforest:music_disc_maker', 25, 1);
        });
    });
});
