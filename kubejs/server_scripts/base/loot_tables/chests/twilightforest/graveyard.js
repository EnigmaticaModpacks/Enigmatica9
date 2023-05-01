ServerEvents.genericLootTables((event) => {
    event.addGeneric(`twilightforest:structures/graveyard`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 4];
            pool.addItem('twilightforest:torchberries', 1, [1, 16]);
            pool.addItem('minecraft:pumpkin_pie', 1, [1, 6]);
            pool.addItem('minecraft:pumpkin_seeds', 1, [1, 32]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 2];
            pool.addItem('twilightforest:moon_dial', 1, 1);
            pool.addItem('minecraft:diamond', 1, [1, 6]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem('twilightforest:transformation_powder', 1, [1, 12]);
            pool.addItem('minecraft:golden_apple', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.15);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:headless_familiar"}'), 1, 1);
            pool.addItem('hexerei:crow_ankh_amulet', 1, 1);
        });
    });
});
