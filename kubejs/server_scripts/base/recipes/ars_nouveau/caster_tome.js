// Color Codes as RGBINT: http://www.shodor.org/~efarrow/trunk/html/rgbint.html

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/caster_tome/';
    const recipes = [
        {
            name: "Bad Egg's Pocket Sand",
            flavour_text: 'Tactical Pocket Sand.',
            tome_type: 'ars_nouveau:caster_tome',
            spell: [
                'ars_nouveau:glyph_projectile',
                'ars_elemental:glyph_conjure_terrain',
                'ars_nouveau:glyph_aoe',
                'ars_nouveau:glyph_aoe',
                'ars_nouveau:glyph_aoe',
                'ars_nouveau:glyph_aoe',
                'ars_nouveau:glyph_crush'
            ],
            color: 88831,
            sound: { family: 'ars_nouveau:gaia_family', pitch: 1.0, volume: 1.0 },
            id: `${id_prefix}pocket_sand_tome`
        },
        {
            name: "Sarenor's Hippity Hoppity",
            flavour_text: 'Off My Property!',
            tome_type: 'ars_nouveau:caster_tome',
            spell: [
                'ars_nouveau:glyph_touch',
                'ars_nouveau:glyph_gust',
                'ars_nouveau:glyph_delay',
                'ars_nouveau:glyph_delay',
                'ars_nouveau:glyph_gravity',
                'ars_nouveau:glyph_snare',
                'ars_nouveau:glyph_extend_time',
                'ars_nouveau:glyph_extend_time',
                'ars_nouveau:glyph_extend_time'
            ],
            color: 3468261,
            sound: { family: 'ars_nouveau:fire_family', pitch: 1.0, volume: 1.0 },
            id: `${id_prefix}hippity_hoppity_tome`
        },
        {
            name: 'Splash!',
            flavour_text: 'Wash your worries away!',
            tome_type: 'ars_nouveau:caster_tome',
            spell: [
                'ars_nouveau:glyph_projectile',
                'ars_nouveau:glyph_conjure_water',
                'ars_nouveau:glyph_delay',
                'ars_nouveau:glyph_evaporate'
            ],
            color: 1966591,
            sound: { family: 'ars_nouveau:tempestry_family', pitch: 0.01, volume: 1.0 },
            id: `${id_prefix}splash_tome`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:caster_tome';
        event.custom(recipe).id(recipe.id);
    });
});
