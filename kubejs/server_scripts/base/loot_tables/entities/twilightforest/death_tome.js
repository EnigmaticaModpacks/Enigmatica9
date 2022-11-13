ServerEvents.entityLootTables((event) => {
    // Add to Death Tome Loot Table
    event.modifyEntity('twilightforest:death_tome', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({ condition: 'minecraft:killed_by_player' });
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.05
            });

            pool.addItem('ars_nouveau:glyph_rune', 1);
            pool.addItem('ars_nouveau:glyph_redstone_signal', 1);
            pool.addItem('ars_nouveau:glyph_touch', 1);
            pool.addItem('ars_nouveau:glyph_evaporate', 1);
            pool.addItem('ars_nouveau:glyph_sensitive', 1);
            pool.addItem('ars_nouveau:glyph_break', 1);
            pool.addItem('ars_nouveau:glyph_dispel', 1);
            pool.addItem('ars_nouveau:glyph_self', 1);
            pool.addItem('ars_nouveau:glyph_leap', 1);
            pool.addItem('ars_nouveau:glyph_snare', 1);
            pool.addItem('ars_nouveau:glyph_summon_wolves', 1);
            pool.addItem('ars_nouveau:glyph_bounce', 1);
            pool.addItem('ars_nouveau:glyph_summon_steed', 1);
            pool.addItem('ars_nouveau:glyph_light', 1);
            pool.addItem('ars_nouveau:glyph_underfoot', 1);
            pool.addItem('ars_nouveau:glyph_freeze', 1);
            pool.addItem('ars_nouveau:glyph_amplify', 1);
            pool.addItem('ars_nouveau:glyph_cut', 1);
            pool.addItem('ars_nouveau:glyph_aquatic', 1);
            pool.addItem('ars_nouveau:glyph_harm', 1);
            pool.addItem('ars_nouveau:glyph_gust', 1);
            pool.addItem('ars_nouveau:glyph_projectile', 1);
            pool.addItem('ars_nouveau:glyph_delay', 1);
            pool.addItem('ars_nouveau:glyph_harvest', 1);
            pool.addItem('ars_nouveau:glyph_ignite', 1);
            pool.addItem('ars_nouveau:glyph_toss', 1);
            pool.addItem('ars_nouveau:glyph_phantom_block', 1);
            pool.addItem('ars_nouveau:glyph_launch', 1);
            pool.addItem('ars_nouveau:glyph_place_block', 1);
            pool.addItem('ars_nouveau:glyph_pull', 1);
            pool.addItem('ars_nouveau:glyph_craft', 1);
            pool.addItem('ars_nouveau:glyph_interact', 1);
            pool.addItem('ars_nouveau:glyph_pickup', 1);
            pool.addItem('ars_elemental:glyph_conjure_terrain', 1);
        });
    });
});
