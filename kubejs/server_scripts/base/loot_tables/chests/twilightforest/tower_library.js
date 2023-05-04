ServerEvents.genericLootTables((event) => {
    event.addGeneric(`twilightforest:structures/tower_library`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 6];
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'twilightforest:structures/useless' });
            pool.addItem('minecraft:glass_bottle', 75, [1, 6]);
            pool.addItem('minecraft:ladder', 75, [1, 6]);
            pool.addItem('minecraft:paper', 75, [1, 8]);
            pool.addItem('minecraft:bone', 75, [1, 4]);
            pool.addItem('minecraft:clay_ball', 75, [1, 12]);
            pool.addItem('minecraft:stick', 75, [1, 6]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem(
                Item.of('ars_nouveau:novice_hood', '{an_stack_perks:{color:"magenta",perks:[],tier:0}}'),
                1,
                [1, 6]
            )
                .enchantWithLevels(10, true)
                .name(Text.of(`Floppy Nightcap`));
            pool.addItem(
                Item.of('ars_nouveau:novice_robes', '{an_stack_perks:{color:"magenta",perks:[],tier:0}}'),
                1,
                [1, 6]
            )
                .enchantWithLevels(10, true)
                .name(Text.of(`Comfy Nightgown`));
            pool.addItem(
                Item.of('ars_nouveau:novice_leggings', '{an_stack_perks:{color:"magenta",perks:[],tier:0}}'),
                1,
                [1, 6]
            )
                .enchantWithLevels(10, true)
                .name(Text.of(`Knit Leg Warmers`));
            pool.addItem(
                Item.of('ars_nouveau:novice_boots', '{an_stack_perks:{color:"magenta",perks:[],tier:0}}'),
                1,
                [1, 6]
            )
                .enchantWithLevels(10, true)
                .name(Text.of(`Fuzzy Slippers`));
            pool.addItem('minecraft:book', 75, [1, 6]);
            pool.addItem('farmersdelight:hot_cocoa', 75, [1, 3]);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'), 75, 1);

            pool.addItem('twilightforest:ironwood_sword', 75, 1).enchantWithLevels(15, true);
            pool.addItem('naturesaura:infused_iron_sword', 25, 1).enchantWithLevels(15, true);
            pool.addItem('minecraft:bow', 25, 1).enchantWithLevels(30, true);
            pool.addItem('minecraft:crossbow', 25, 1).enchantWithLevels(30, true);
            pool.addItem('minecraft:experience_bottle', 25, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_1' });
        });
    });
});
