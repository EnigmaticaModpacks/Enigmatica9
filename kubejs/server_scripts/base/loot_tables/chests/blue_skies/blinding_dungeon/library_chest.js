ServerEvents.chestLootTables((event) => {
    event.modify(`blue_skies:blinding_dungeon/library_chest`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [2, 4];

            pool.addItem('farmersdelight:hot_cocoa', 75, [1, 3]);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'), 75, 1);

            pool.addItem('blue_skies:pyrope_sword', 75, 1).enchantWithLevels(15, true);
            pool.addItem('naturesaura:sky_sword', 25, 1).enchantWithLevels(15, true);
            pool.addItem('minecraft:bow', 25, 1).enchantWithLevels(30, true);
            pool.addItem('minecraft:crossbow', 25, 1).enchantWithLevels(30, true);
            pool.addItem('minecraft:experience_bottle', 25, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];

            pool.addItem('ars_nouveau:glyph_infuse', 1, 1);
            pool.addItem('starbunclemania:glyph_pickup_fluid', 1, 1);
            pool.addItem('starbunclemania:glyph_place_fluid', 1, 1);
            pool.addItem('ars_scalaes:glyph_resize', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_is_mature', 1, 1);
            pool.addItem('toomanyglyphs:glyph_chaining', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_is_baby', 1, 1);
            pool.addItem('ars_nouveau:glyph_sense_magic', 1, 1);
            pool.addItem('ars_nouveau:glyph_explosion', 1, 1);
            pool.addItem('ars_nouveau:glyph_flare', 1, 1);
            pool.addItem('ars_nouveau:glyph_break', 1, 1);
            pool.addItem('ars_nouveau:glyph_wind_shear', 1, 1);
            pool.addItem('ars_nouveau:glyph_slowfall', 1, 1);
            pool.addItem('ars_nouveau:glyph_cold_snap', 1, 1);
            pool.addItem('ars_nouveau:glyph_grow', 1, 1);
            pool.addItem('ars_nouveau:glyph_firework', 1, 1);
            pool.addItem('ars_nouveau:glyph_animate_block', 1, 1);
            pool.addItem('ars_nouveau:glyph_heal', 1, 1);
            pool.addItem('ars_nouveau:glyph_ender_inventory', 1, 1);
            pool.addItem('ars_nouveau:glyph_fell', 1, 1);
            pool.addItem('ars_nouveau:glyph_exchange', 1, 1);
            pool.addItem('ars_nouveau:glyph_smelt', 1, 1);
            pool.addItem('ars_nouveau:glyph_conjure_water', 1, 1);
            pool.addItem('ars_nouveau:glyph_gravity', 1, 1);
            pool.addItem('ars_nouveau:glyph_name', 1, 1);
            pool.addItem('ars_nouveau:glyph_invisibility', 1, 1);
            pool.addItem('ars_elemental:glyph_bubble_shield', 1, 1);
            pool.addItem('ars_elemental:glyph_phantom_grasp', 1, 1);
            pool.addItem('ars_elemental:glyph_watery_grave', 1, 1);
            pool.addItem('ars_elemental:glyph_discharge', 1, 1);
            pool.addItem('ars_elemental:glyph_charm', 1, 1);
            pool.addItem('ars_elemental:glyph_poison_spores', 1, 1);
        });
    });
});
