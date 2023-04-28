ServerEvents.genericLootTables((event) => {
    event.modify(`twilightforest:structures/well`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.5);
            pool.addItem('twilightforest:charm_of_life_1', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.25);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [2, 5]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [2, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.15);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:fairy_familiar"}'), 1, 1);
            pool.addItem('hexerei:crow_ankh_amulet', 1, 1);
        });
    });
});
