ServerEvents.genericLootTables((event) => {
    event.modify(`twilightforest:structures/basement`, (table) => {
        table.addPool((pool) => {
            pool.addItem('minecraft:amethyst_shard', 75, [4, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('minecraft:melon_slice', 1, [1, 6]);
            pool.addItem('minecraft:melon_seeds', 1, [1, 6]);
            pool.addItem('minecraft:pumpkin_seeds', 1, [1, 4]);
            pool.addItem('immersiveengineering:seed', 1, [2, 5]);
            pool.addItem('occultism:datura_seeds', 1, [2, 5]);
            pool.addItem('hexerei:sage_seed', 1, [2, 5]);
            pool.addItem('minecraft:arrow', 1, [1, 12]);
            pool.addItem('twilightforest:firefly', 1, [1, 12]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem('hexerei:crow_ankh_amulet', 1, 1);
        });
    });
});
