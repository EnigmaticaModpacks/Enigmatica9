ServerEvents.chestLootTables((event) => {
    event.modify(`blue_skies:poison_dungeon/chest`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
        });

        table.addPool((pool) => {
            pool.rolls = [3, 4];
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:slow_falling"}'), 2, 1);
            pool.addItem('blue_skies:bug_guts', 2, [2, 4]);
            pool.addItem('minecraft:spore_blossom', 1, 1);
            pool.addItem('thermal:xp_stew', 2, 1);
            pool.addItem('ars_elemental:glyph_poison_spores', 1, 1).randomChance(0.5);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addItem('blue_skies:aquite_sword', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:aquite_chestplate', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:aquite_boots', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:aquite_leggings', 1, 1).enchantWithLevels([10, 15], false);
            pool.addItem('blue_skies:aquite_helmet', 1, 1).enchantWithLevels([10, 15], false);

            pool.addItem('minecraft:book', 1, [1, 4]).enchantWithLevels([10, 15], false);
        });
    });
});
