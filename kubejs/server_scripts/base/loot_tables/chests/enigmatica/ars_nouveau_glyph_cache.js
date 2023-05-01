ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:ars_nouveau_glyph_cache/tier_1', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;

            pool.addItem('toomanyglyphs:glyph_filter_living_not_monster', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_block', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_animal', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_living_not_player', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_entity', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_player', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_living', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_monster', 1, 1);
            pool.addItem('toomanyglyphs:glyph_filter_item', 1, 1);
            pool.addItem('toomanyglyphs:glyph_reverse_direction', 1, 1);
            pool.addItem('ars_nouveau:glyph_dispel', 1, 1);
            pool.addItem('ars_nouveau:glyph_craft', 1, 1);
            pool.addItem('ars_nouveau:glyph_gust', 1, 1);
            pool.addItem('ars_nouveau:glyph_redstone_signal', 1, 1);
            pool.addItem('ars_nouveau:glyph_bounce', 1, 1);
            pool.addItem('ars_nouveau:glyph_harm', 1, 1);
            pool.addItem('ars_nouveau:glyph_launch', 1, 1);
            pool.addItem('ars_nouveau:glyph_evaporate', 1, 1);
            pool.addItem('ars_nouveau:glyph_crush', 1, 1);
            pool.addItem('ars_nouveau:glyph_toss', 1, 1);
            pool.addItem('ars_nouveau:glyph_light', 1, 1);
            pool.addItem('ars_nouveau:glyph_delay', 1, 1);
            pool.addItem('ars_nouveau:glyph_pull', 1, 1);
            pool.addItem('ars_nouveau:glyph_rune', 1, 1);
            pool.addItem('ars_nouveau:glyph_summon_steed', 1, 1);
            pool.addItem('ars_nouveau:glyph_freeze', 1, 1);
            pool.addItem('ars_nouveau:glyph_harvest', 1, 1);
            pool.addItem('ars_nouveau:glyph_place_block', 1, 1);
            pool.addItem('ars_nouveau:glyph_interact', 1, 1);
            pool.addItem('ars_nouveau:glyph_fell', 1, 1);
            pool.addItem('ars_nouveau:glyph_leap', 1, 1);
            pool.addItem('ars_nouveau:glyph_ignite', 1, 1);
            pool.addItem('ars_nouveau:glyph_rotate', 1, 1);
            pool.addItem('ars_nouveau:glyph_pickup', 1, 1);
            pool.addItem('ars_nouveau:glyph_snare', 1, 1);
            pool.addItem('ars_nouveau:glyph_summon_wolves', 1, 1);
            pool.addItem('ars_nouveau:glyph_cut', 1, 1);
            pool.addItem('ars_nouveau:glyph_phantom_block', 1, 1);
            pool.addItem('ars_elemental:glyph_summon_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_summon_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_fiery_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_aerial_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_aquatic_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_undead_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_fiery_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_undead_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_conjure_terrain', 1, 1);
            pool.addItem('ars_elemental:glyph_insect_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_aerial_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_insect_filter', 1, 1);
            pool.addItem('ars_elemental:glyph_not_aquatic_filter', 1, 1);
        });
    });

    event.addGeneric('enigmatica:ars_nouveau_glyph_cache/tier_2', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;

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

    event.addGeneric('enigmatica:ars_nouveau_glyph_cache/tier_3', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;

            pool.addItem('ars_scalaes:glyph_shrink', 1, 1);
            pool.addItem('ars_scalaes:glyph_expand', 1, 1);
            pool.addItem('ars_nouveau:glyph_linger', 1, 1);
            pool.addItem('ars_nouveau:glyph_summon_vex', 1, 1);
            pool.addItem('ars_nouveau:glyph_wall', 1, 1);
            pool.addItem('ars_nouveau:glyph_lightning', 1, 1);
            pool.addItem('ars_nouveau:glyph_wither', 1, 1);
            pool.addItem('ars_nouveau:glyph_hex', 1, 1);
            pool.addItem('ars_nouveau:glyph_summon_decoy', 1, 1);
            pool.addItem('ars_nouveau:glyph_summon_undead', 1, 1);
            pool.addItem('ars_nouveau:glyph_intangible', 1, 1);
            pool.addItem('ars_nouveau:glyph_fangs', 1, 1);
            pool.addItem('ars_nouveau:glyph_glide', 1, 1);
            pool.addItem('ars_nouveau:glyph_blink', 1, 1);
            pool.addItem('ars_elemental:glyph_life_link', 1, 1);
        });
    });
});
