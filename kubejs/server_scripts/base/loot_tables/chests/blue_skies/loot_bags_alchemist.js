ServerEvents.genericLootTables((event) => {
    event.addGeneric('blue_skies:loot_bags/alchemist/common', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:dusk_arc', '{ArcLevel:0}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:spike_shield', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:alchemy_table', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 6];
            pool.addItem('minecraft:emerald', 1, [5, 7]);
            pool.addItem('blue_skies:ventium_ingot', 1, [1, 2]);
            pool.addItem('blue_skies:horizonite_ingot', 1, [1, 4]);
            pool.addItem('blue_skies:moonstone_shard', 1, [2, 4]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:blinding_rage', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([15, 20], false);
        });
    });

    event.addGeneric('blue_skies:loot_bags/alchemist/uncommon', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:dusk_arc', '{ArcLevel:1}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:spike_shield', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:alchemy_table', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [5, 8];
            pool.addItem('minecraft:emerald', 1, [5, 7]);
            pool.addItem('blue_skies:ventium_ingot', 1, [1, 2]);
            pool.addItem('blue_skies:horizonite_ingot', 1, [1, 4]);
            pool.addItem('blue_skies:moonstone_shard', 1, [2, 4]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 5];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:blinding_rage', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([15, 20], false);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.randomChance(0.5);
            pool.addItem('blue_skies:alchemy_scroll', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantRandomly([
                'minecraft:smite',
                'minecraft:sharpness',
                'minecraft:bane_of_arthropods'
            ]);
        });
    });

    event.addGeneric('blue_skies:loot_bags/alchemist/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('blue_skies:dusk_arc', '{ArcLevel:2}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:spike_shield', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:alchemy_table', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [7, 10];
            pool.addItem('minecraft:emerald', 1, [5, 7]);
            pool.addItem('blue_skies:ventium_ingot', 1, [1, 2]);
            pool.addItem('blue_skies:horizonite_ingot', 1, [1, 4]);
            pool.addItem('blue_skies:moonstone_shard', 1, [2, 4]);
            pool.addItem('blue_skies:aquite', 1, [1, 2]);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 7];
            pool.addItem('blue_skies:star_flare', 1, [1, 2]);
            pool.addItem('blue_skies:blinding_rage', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantWithLevels([15, 20], false);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('blue_skies:alchemy_scroll', 1, 1);
            pool.addItem('minecraft:book', 1, 1).enchantRandomly([
                'minecraft:smite',
                'minecraft:sharpness',
                'minecraft:bane_of_arthropods'
            ]);
        });
    });
});
