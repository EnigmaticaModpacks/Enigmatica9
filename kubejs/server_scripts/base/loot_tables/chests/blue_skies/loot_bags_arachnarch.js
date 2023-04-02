ServerEvents.genericLootTables((event) => {
    event.addGeneric('blue_skies:loot_bags/arachnarch/common', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:poison_arc', '{ArcLevel:0}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:venom_sac', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:different_sword', 1, 1);
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
            pool.addItem('minecraft:string', 1, [5, 10]);
            pool.addItem('blue_skies:spider_webbing', 1, [2, 5]);
            pool.addItem('minecraft:spore_blossom', 1, [2, 5]);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_poison"}'), 1, [2, 5]);
            pool.addItem('minecraft:spider_eye', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('blue_skies:venomous_encounter', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });

    event.addGeneric('blue_skies:loot_bags/arachnarch/uncommon', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:poison_arc', '{ArcLevel:1}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:venom_sac', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:different_sword', 1, 1);
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
            pool.addItem('minecraft:string', 1, [5, 10]);
            pool.addItem('blue_skies:spider_webbing', 1, [2, 5]);
            pool.addItem('minecraft:spore_blossom', 1, [2, 5]);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_poison"}'), 1, [2, 5]);
            pool.addItem('minecraft:spider_eye', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 5];
            pool.addItem('blue_skies:venomous_encounter', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });

    event.addGeneric('blue_skies:loot_bags/arachnarch/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:poison_arc', '{ArcLevel:2}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:venom_sac', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:different_sword', 1, 1);
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
            pool.addItem('minecraft:string', 1, [5, 10]);
            pool.addItem('blue_skies:spider_webbing', 1, [2, 5]);
            pool.addItem('minecraft:spore_blossom', 1, [2, 5]);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_poison"}'), 1, [2, 5]);
            pool.addItem('minecraft:spider_eye', 1, [2, 5]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
            pool.addItem('blue_skies:diopside_gem', 1, [2, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 7];
            pool.addItem('blue_skies:venomous_encounter', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([20, 28], false);
        });
    });
});
