ServerEvents.genericLootTables((event) => {
    event.modify(`twilightforest:structures/darktower_cache`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.5);
            pool.addItem('twilightforest:charm_of_life_1', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addItem('emendatusenigmatica:raw_copper', 2, [1, 2]);
            pool.addItem('emendatusenigmatica:raw_gold', 2, [1, 2]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [1, 2]);
            pool.addItem('emendatusenigmatica:carminite_gem', 1, [2, 5]);
        });
    });
});
