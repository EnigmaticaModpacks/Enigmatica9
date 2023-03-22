ServerEvents.genericLootTables((event) => {
    event.addGeneric('blue_skies:loot_bags/starlit_crusher/common', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:nature_arc', '{ArcLevel:0}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:crushing_hammer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:cryo_root', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:diopside_helmet', 1, 1);
            pool.addItem('blue_skies:diopside_chestplate', 1, 1);
            pool.addItem('blue_skies:diopside_leggings', 1, 1);
            pool.addItem('blue_skies:diopside_boots', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 6];
            pool.addItem('blue_skies:starlit_log', 1, [5, 10]);
            pool.addItem('blue_skies:winter_leaves', 1, [2, 5]);
            pool.addItem('blue_skies:cherry_sapling', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:defying_starlight', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });

    event.addGeneric('blue_skies:loot_bags/starlit_crusher/uncommon', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:nature_arc', '{ArcLevel:1}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:crushing_hammer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:cryo_root', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:diopside_helmet', 1, 1);
            pool.addItem('blue_skies:diopside_chestplate', 1, 1);
            pool.addItem('blue_skies:diopside_leggings', 1, 1);
            pool.addItem('blue_skies:diopside_boots', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [5, 8];
            pool.addItem('blue_skies:starlit_log', 1, [5, 10]);
            pool.addItem('blue_skies:winter_leaves', 1, [2, 5]);
            pool.addItem('blue_skies:cherry_sapling', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 5];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:defying_starlight', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });

    event.addGeneric('blue_skies:loot_bags/starlit_crusher/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:nature_arc', '{ArcLevel:2}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:crushing_hammer', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:cryo_root', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:diopside_helmet', 1, 1);
            pool.addItem('blue_skies:diopside_chestplate', 1, 1);
            pool.addItem('blue_skies:diopside_leggings', 1, 1);
            pool.addItem('blue_skies:diopside_boots', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [7, 10];
            pool.addItem('blue_skies:starlit_log', 1, [5, 10]);
            pool.addItem('blue_skies:winter_leaves', 1, [2, 5]);
            pool.addItem('blue_skies:cherry_sapling', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 7];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:defying_starlight', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });
});
