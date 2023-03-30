ServerEvents.tags('block', (event) => {
    event
        .get('minecraft:wither_immune')
        .add([
            'occultism:chalk_glyph_white',
            'occultism:chalk_glyph_gold',
            'occultism:chalk_glyph_purple',
            'occultism:chalk_glyph_red',
            '#minecraft:candles',
            'minecraft:skeleton_skull',
            'minecraft:wither_skeleton_skull',
            'occultism:spirit_attuned_crystal',
            'occultism:sacrificial_bowl',
            'occultism:golden_sacrificial_bowl',
            'decorative_blocks:soul_brazier',
            'naturesaura:gold_powder'
        ]);
});
