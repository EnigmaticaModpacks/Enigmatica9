ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Match blocks by Blockstate: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher/
    // A: {
    //     type: 'modonomicon:blockstate',
    //     display: 'minecraft:chest[facing=east]',
    //     block: 'minecraft:chest[facing=west]'
    // }
    // Match blocks by Tag: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/tag-matcher/
    // A: {
    //     type: 'modonomicon:tag',
    //     tag: 'minecraft:planks'
    // }

    let pentacles = [
        {
            name: 'summon_familiar',
            x_placement: -9,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                F: { type: 'modonomicon:block', block: 'twilightforest:firefly_jar' },
                H: { type: 'modonomicon:block', block: 'twilightforest:naga_trophy' }
            },
            pattern: [
                [
                    'F___P_P___F',
                    '_PP_____PP_',
                    '_PWP_H_PWP_',
                    '__PP___PP__',
                    'P_________P',
                    '_____0_____',
                    'P_________P',
                    '__PP___PP__',
                    '_PWP___PWP_',
                    '_PP_____PP_',
                    'F___P_P___F'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'summon_evil',
            x_placement: -5,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                F: { type: 'modonomicon:block', block: 'decorative_blocks:soul_brazier' },
                S: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' }
            },
            pattern: [
                [
                    'F___PSP___F',
                    '__PW___WP__',
                    '_P_______P_',
                    '_W_W___W_W_',
                    'P___W_W___P',
                    'S____0____S',
                    'P___W_W___P',
                    '_W_W___W_W_',
                    '_P_______P_',
                    '__PW___WP__',
                    'F___PSP___F'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/summon_familiar',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        }
    ];

    pentacles.forEach((pentacle) => {
        pentacle.type = 'modonomicon:dense';

        // Set background display. Same size as pentacle, every block is otherstone.
        // 9 is used as the key in following Occultism's convention.
        pentacle.pattern.push(pentacle.pattern[0].map((pattern) => pattern.replace(/./g, '9')));
        pentacle.mapping['9'] = { type: 'modonomicon:display', display: 'occultism:otherstone' };

        event.addJson(`occultism:modonomicon_multiblocks/${pentacle.name}.json`, pentacle);

        // Remember to set lang entries for all new pentacles in en_us.json
        // x and y placement refer to the entry location within the modonomicon
        event.addJson(
            `occultism:modonomicons/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`,
            generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
        );
    });
});
