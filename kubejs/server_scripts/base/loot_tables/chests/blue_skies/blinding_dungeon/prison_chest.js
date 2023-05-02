ServerEvents.chestLootTables((event) => {
    const loot_tables = [
        `blue_skies:blinding_dungeon/prison_chest_everbright`,
        `blue_skies:blinding_dungeon/prison_chest_everdawn`
    ];

    loot_tables.forEach((loot_table) => {
        event.modify(loot_table, (table) => {
            table.addPool((pool) => {
                pool.rolls = [1, 3];

                pool.addItem('minecraft:shears', 25, 1);
                pool.addItem('comforts:rope_and_nail', 25, [1, 2]);
                pool.addItem('farmersdelight:iron_knife', 25, 1);
                pool.addItem('farmersdelight:canvas', 25, [1, 4]);
                pool.addItem('farmersdelight:dog_food', 25, [1, 4]);
                pool.addItem('farmersdelight:onion', 25, [1, 4]);
                pool.addItem('minecraft:poisonous_potato', 25, [1, 4]);
                pool.addItem('minecraft:potato', 25, [1, 4]);

                pool.addItem(
                    Item.of('minecraft:leather', { display: { Lore: ['{"text":"Hrmm","color":"dark_green"}'] } }),
                    25,
                    [1, 4]
                ).name(Text.of('Supple Leather').darkRed());
            });
        });
    });
});
