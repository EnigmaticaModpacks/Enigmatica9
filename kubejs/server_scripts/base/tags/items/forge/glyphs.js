ServerEvents.tags('item', (event) => {
    event.add('forge:glyphs', [
        /(ars_nouveau|ars_elemental|toomanyglyphs|starbunclemania|ars_scalaes):glyph/,
        'ars_nouveau:burst'
    ]);
});
