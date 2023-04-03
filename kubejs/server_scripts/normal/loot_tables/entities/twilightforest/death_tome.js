ServerEvents.entityLootTables((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    // Add to Death Tome Loot Table
    event.modifyEntity('twilightforest:death_tome', (table) => {
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addCondition({ condition: 'minecraft:killed_by_player' });
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.05
            });

            pool.addItem('ars_elemental:glyph_aerial_filter', 1);
            pool.addItem('ars_elemental:glyph_aquatic_filter', 1);
            pool.addItem('ars_elemental:glyph_conjure_terrain', 1);
            pool.addItem('ars_elemental:glyph_fiery_filter', 1);
            pool.addItem('ars_elemental:glyph_insect_filter', 1);
            pool.addItem('ars_elemental:glyph_not_aerial_filter', 1);
            pool.addItem('ars_elemental:glyph_not_aquatic_filter', 1);
            pool.addItem('ars_elemental:glyph_not_fiery_filter', 1);
            pool.addItem('ars_elemental:glyph_not_insect_filter', 1);
            pool.addItem('ars_elemental:glyph_not_undead_filter', 1);
            pool.addItem('ars_elemental:glyph_undead_filter', 1);
            pool.addItem('ars_nouveau:glyph_amplify', 1);
            pool.addItem('ars_nouveau:glyph_bounce', 1);
            pool.addItem('ars_nouveau:glyph_craft', 1);
            pool.addItem('ars_nouveau:glyph_cut', 1);
            pool.addItem('ars_nouveau:glyph_delay', 1);
            pool.addItem('ars_nouveau:glyph_dispel', 1);
            pool.addItem('ars_nouveau:glyph_evaporate', 1);
            pool.addItem('ars_nouveau:glyph_freeze', 1);
            pool.addItem('ars_nouveau:glyph_gust', 1);
            pool.addItem('ars_nouveau:glyph_harvest', 1);
            pool.addItem('ars_nouveau:glyph_ignite', 1);
            pool.addItem('ars_nouveau:glyph_interact', 1);
            pool.addItem('ars_nouveau:glyph_launch', 1);
            pool.addItem('ars_nouveau:glyph_leap', 1);
            pool.addItem('ars_nouveau:glyph_phantom_block', 1);
            pool.addItem('ars_nouveau:glyph_pickup', 1);
            pool.addItem('ars_nouveau:glyph_place_block', 1);
            pool.addItem('ars_nouveau:glyph_pull', 1);
            pool.addItem('ars_nouveau:glyph_redstone_signal', 1);
            pool.addItem('ars_nouveau:glyph_rotate', 1);
            pool.addItem('ars_nouveau:glyph_rune', 1);
            pool.addItem('ars_nouveau:glyph_sensitive', 1);
            pool.addItem('ars_nouveau:glyph_snare', 1);
            pool.addItem('ars_nouveau:glyph_summon_steed', 1);
            pool.addItem('ars_nouveau:glyph_summon_wolves', 1);
            pool.addItem('ars_nouveau:glyph_toss', 1);
            pool.addItem('ars_nouveau:glyph_underfoot', 1);
        });
    });
});
