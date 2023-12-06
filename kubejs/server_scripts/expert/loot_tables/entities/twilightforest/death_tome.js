ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Add to Death Tome Loot Table
    event.modifyEntity('twilightforest:death_tome', (table) => {
        table.addPool((pool) => {
            pool.rolls = [2, 3];
            pool.addCondition({ condition: 'minecraft:killed_by_player' });

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
            pool.addItem('ars_elemental:glyph_summon_filter', 1);
            pool.addItem('ars_elemental:glyph_not_summon_filter', 1);

            pool.addItem('ars_nouveau:glyph_amplify', 2);
            pool.addItem('ars_nouveau:glyph_self', 2);
            pool.addItem('ars_nouveau:glyph_bounce', 2);
            pool.addItem('ars_nouveau:glyph_craft', 2);
            pool.addItem('ars_nouveau:glyph_cut', 2);
            pool.addItem('ars_nouveau:glyph_delay', 2);
            pool.addItem('ars_nouveau:glyph_dispel', 2);
            pool.addItem('ars_nouveau:glyph_evaporate', 2);
            pool.addItem('ars_nouveau:glyph_fell', 2);
            pool.addItem('ars_nouveau:glyph_freeze', 2);
            pool.addItem('ars_nouveau:glyph_grow', 2);
            pool.addItem('ars_nouveau:glyph_gust', 2);
            pool.addItem('ars_nouveau:glyph_harvest', 2);
            pool.addItem('ars_nouveau:glyph_ignite', 2);
            pool.addItem('ars_nouveau:glyph_interact', 2);
            pool.addItem('ars_nouveau:glyph_launch', 2);
            pool.addItem('ars_nouveau:glyph_leap', 2);
            pool.addItem('ars_nouveau:glyph_light', 2);
            pool.addItem('ars_nouveau:glyph_phantom_block', 2);
            pool.addItem('ars_nouveau:glyph_pickup', 2);
            pool.addItem('ars_nouveau:glyph_place_block', 2);
            pool.addItem('ars_nouveau:glyph_pull', 2);
            pool.addItem('ars_nouveau:glyph_redstone_signal', 2);
            pool.addItem('ars_nouveau:glyph_rotate', 2);
            pool.addItem('ars_nouveau:glyph_rune', 2);
            pool.addItem('ars_nouveau:glyph_sensitive', 4);
            pool.addItem('ars_nouveau:glyph_snare', 2);
            pool.addItem('ars_nouveau:glyph_summon_steed', 2);
            pool.addItem('ars_nouveau:glyph_summon_wolves', 2);
            pool.addItem('ars_nouveau:glyph_toss', 2);
            pool.addItem('ars_nouveau:glyph_underfoot', 2);
            pool.addItem('ars_nouveau:glyph_crush', 2);
            pool.addItem('ars_nouveau:glyph_aoe', 2);
            pool.addItem('ars_nouveau:glyph_randomize', 2);

            pool.addItem('toomanyglyphs:glyph_filter_animal', 1);
            pool.addItem('toomanyglyphs:glyph_filter_block', 1);
            pool.addItem('toomanyglyphs:glyph_filter_entity', 1);
            pool.addItem('toomanyglyphs:glyph_filter_item', 1);
            pool.addItem('toomanyglyphs:glyph_filter_living', 1);
            pool.addItem('toomanyglyphs:glyph_filter_living_not_monster', 1);
            pool.addItem('toomanyglyphs:glyph_filter_living_not_player', 1);
            pool.addItem('toomanyglyphs:glyph_filter_monster', 1);
            pool.addItem('toomanyglyphs:glyph_filter_player', 1);
            pool.addItem('toomanyglyphs:glyph_lay_on_hands', 2);
            pool.addItem('toomanyglyphs:glyph_ray', 2);
            pool.addItem('toomanyglyphs:glyph_reverse_direction', 2);

            pool.addItem('ars_scalaes:glyph_shrink', 2);
            pool.addItem('ars_scalaes:glyph_expand', 2);
            pool.addItem('ars_scalaes:glyph_resize', 2);
        });
    });
});
