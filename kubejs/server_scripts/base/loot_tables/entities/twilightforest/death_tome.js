ServerEvents.entityLootTables((event) => {
    const tables = [
        {
            rolls: [1, 3],
            loot_conditions: [
                { condition: 'minecraft:killed_by_player' },
                {
                    chance: 0.25,
                    condition: 'minecraft:random_chance_with_looting',
                    looting_multiplier: 0.05
                }
            ],
            loot_items: [
                { item: 'ars_nouveau:glyph_rune', weight: 1 },
                { item: 'ars_nouveau:glyph_redstone_signal', weight: 1 },
                { item: 'ars_nouveau:glyph_touch', weight: 1 },
                { item: 'ars_nouveau:glyph_evaporate', weight: 1 },
                { item: 'ars_nouveau:glyph_sensitive', weight: 1 },
                { item: 'ars_nouveau:glyph_break', weight: 1 },
                { item: 'ars_nouveau:glyph_dispel', weight: 1 },
                { item: 'ars_nouveau:glyph_self', weight: 1 },
                { item: 'ars_nouveau:glyph_leap', weight: 1 },
                { item: 'ars_nouveau:glyph_snare', weight: 1 },
                { item: 'ars_nouveau:glyph_summon_wolves', weight: 1 },
                { item: 'ars_nouveau:glyph_bounce', weight: 1 },
                { item: 'ars_nouveau:glyph_summon_steed', weight: 1 },
                { item: 'ars_nouveau:glyph_light', weight: 1 },
                { item: 'ars_nouveau:glyph_underfoot', weight: 1 },
                { item: 'ars_nouveau:glyph_freeze', weight: 1 },
                { item: 'ars_nouveau:glyph_amplify', weight: 1 },
                { item: 'ars_nouveau:glyph_cut', weight: 1 },
                { item: 'ars_nouveau:glyph_aquatic', weight: 1 },
                { item: 'ars_nouveau:glyph_harm', weight: 1 },
                { item: 'ars_nouveau:glyph_gust', weight: 1 },
                { item: 'ars_nouveau:glyph_projectile', weight: 1 },
                { item: 'ars_nouveau:glyph_delay', weight: 1 },
                { item: 'ars_nouveau:glyph_harvest', weight: 1 },
                { item: 'ars_nouveau:glyph_ignite', weight: 1 },
                { item: 'ars_nouveau:glyph_toss', weight: 1 },
                { item: 'ars_nouveau:glyph_phantom_block', weight: 1 },
                { item: 'ars_nouveau:glyph_launch', weight: 1 },
                { item: 'ars_nouveau:glyph_place_block', weight: 1 },
                { item: 'ars_nouveau:glyph_pull', weight: 1 },
                { item: 'ars_nouveau:glyph_craft', weight: 1 },
                { item: 'ars_nouveau:glyph_interact', weight: 1 },
                { item: 'ars_nouveau:glyph_pickup', weight: 1 },
                { item: 'ars_elemental:glyph_conjure_terrain', weight: 1 }
            ]
        }
    ];

    tables.forEach((table) => {
        modifyEntityLootTable(event, 'twilightforest:death_tome', table);
    });
});
