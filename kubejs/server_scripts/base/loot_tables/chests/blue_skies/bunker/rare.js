ServerEvents.chestLootTables((event) => {
    event.addChest(`blue_skies:bunker/rare`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 9];

            pool.addItem('emendatusenigmatica:raw_falsite', 2, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_gold', 3, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_copper', 3, [1, 3]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [1, 3]);
            pool.addItem('emendatusenigmatica:aquite_gem', 1, [3, 6]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(
                Item.of('minecraft:tipped_arrow', '{Potion:"ars_nouveau:freezing_potion_strong"}'),
                1,
                [12, 18]
            );
            pool.addItem('thermal:ice_grenade', 1, [12, 18]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addItem('twilightforest:ice_bow', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('twilightforest:ice_sword', 1, 1).enchantWithLevels([10, 15], false);

            pool.addItem('blue_skies:pyrope_sword', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:pyrope_chestplate', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:pyrope_boots', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:pyrope_leggings', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:pyrope_helmet', 1, 1).enchantWithLevels([10, 15], false);

            pool.addItem('minecraft:book', 1, [1, 4]).enchantWithLevels([10, 15], false);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'minecraft:chests/simple_dungeon' });
        });
    });
});
