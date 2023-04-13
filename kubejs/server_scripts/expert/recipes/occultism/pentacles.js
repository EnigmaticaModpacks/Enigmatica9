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
            name: 'lesser_binding',
            x_placement: -7,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                C: { type: 'modonomicon:tag', display: 'occultism:candle_white', tag: '#minecraft:candles' }
            },
            pattern: [
                [
                    '___C_WGC___',
                    '__P_WG__P__',
                    '_P_WG____P_',
                    '___WG_WWW__',
                    'G__WPWPGGW_',
                    'WG__W0W__GW',
                    '_WGGPWPW__G',
                    '__WWW_GW___',
                    '_P____GW_P_',
                    '__P__GW_P__',
                    '___CGW_C___'
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
        },
        {
            name: 'summon_lesser_evil',
            x_placement: -5,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                C: { type: 'modonomicon:tag', display: 'occultism:candle_white', tag: '#minecraft:candles' }
            },
            pattern: [
                [
                    '______C______',
                    '_____P_P_____',
                    '__CPW___WPC__',
                    '__P_______P__',
                    '__W_W___W_W__',
                    '_P___W_W___P_',
                    'C_____0_____C',
                    '_P___W_W___P_',
                    '__W_W___W_W__',
                    '__P_______P__',
                    '__CPW___WPC__',
                    '_____P_P_____',
                    '______C______'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/lesser_binding',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'summon_greater_evil',
            x_placement: -3,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                R: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_red' },
                B: { type: 'modonomicon:block', block: 'decorative_blocks:soul_brazier' },
                H: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' }
            },
            pattern: [
                [
                    '__PPP_______PPP__',
                    '_P___P__B__P___P_',
                    'P_W_W_RRRRP_W_W_P',
                    'P__BHRPW_WPRHB__P',
                    'P_WHR_PW_WP_RHW_P',
                    '_P_R_P__W__P_R_P_',
                    '__PPP__W_W__PPR__',
                    '__RWW_W___W_WWR__',
                    '_BR__W__0__W__RB_',
                    '__RWW_W___W_WWR__',
                    '__RPP__W_W__PPP__',
                    '_P_R_P__W__P_R_P_',
                    'P_WHR_PW_WP_RHW_P',
                    'P__BHRPW_WPRHB__P',
                    'P_W_W_PRRRR_W_W_P',
                    '_P___P__B__P___P_',
                    '__PPP_______PPP__'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/summon_lesser_evil',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'tree_of_life_stage_1',
            x_placement: -9,
            y_placement: 9,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                O: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                S: { type: 'modonomicon:block', block: 'supplementaries:pedestal' },
                B: { type: 'modonomicon:block', block: 'occultism:sacrificial_bowl' },
                A: { type: 'modonomicon:tag', tag: 'enigmatica:heartwoods/stage_1' }
            },
            pattern: [
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '____A____',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '__B___B__',
                    '_B_____B_',
                    'B_______B',
                    '_________',
                    '_________',
                    '_________',
                    'B_______B',
                    '_B_____B_',
                    '__B___B__'
                ],
                [
                    '__SOGOS__',
                    '_SOW_WOS_',
                    'SOP_W_POS',
                    'OW__W__WO',
                    'G_WW0WW_G',
                    'OW__W__WO',
                    'SOP_W_POS',
                    '_SOW_WOS_',
                    '__SOGOS__'
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
        },
        {
            name: 'tree_of_life_stage_2',
            x_placement: -7,
            y_placement: 9,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                O: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                S: { type: 'modonomicon:block', block: 'supplementaries:pedestal' },
                B: { type: 'modonomicon:block', block: 'occultism:sacrificial_bowl' },
                A: { type: 'modonomicon:tag', tag: 'enigmatica:heartwoods/stage_2' }
            },
            pattern: [
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '____A____',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '__B___B__',
                    '_B_____B_',
                    'B_______B',
                    '_________',
                    '_________',
                    '_________',
                    'B_______B',
                    '_B_____B_',
                    '__B___B__'
                ],
                [
                    '__SOGOS__',
                    '_SOW_WOS_',
                    'SOP_W_POS',
                    'OW__W__WO',
                    'G_WW0WW_G',
                    'OW__W__WO',
                    'SOP_W_POS',
                    '_SOW_WOS_',
                    '__SOGOS__'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/tree_of_life_stage_1',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'tree_of_life_stage_3',
            x_placement: -5,
            y_placement: 9,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                O: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                S: { type: 'modonomicon:block', block: 'supplementaries:pedestal' },
                B: { type: 'modonomicon:block', block: 'occultism:sacrificial_bowl' },
                A: { type: 'modonomicon:tag', tag: 'enigmatica:heartwoods/stage_3' }
            },
            pattern: [
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '____A____',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '__B___B__',
                    '_B_____B_',
                    'B_______B',
                    '_________',
                    '_________',
                    '_________',
                    'B_______B',
                    '_B_____B_',
                    '__B___B__'
                ],
                [
                    '__SOGOS__',
                    '_SOW_WOS_',
                    'SOP_W_POS',
                    'OW__W__WO',
                    'G_WW0WW_G',
                    'OW__W__WO',
                    'SOP_W_POS',
                    '_SOW_WOS_',
                    '__SOGOS__'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/tree_of_life_stage_2',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'tree_of_life_stage_4',
            x_placement: -3,
            y_placement: 9,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                O: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                S: { type: 'modonomicon:block', block: 'supplementaries:pedestal' },
                B: { type: 'modonomicon:block', block: 'occultism:sacrificial_bowl' },
                A: { type: 'modonomicon:tag', tag: 'enigmatica:heartwoods/stage_4' }
            },
            pattern: [
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '____A____',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________',
                    '_________'
                ],
                [
                    '__B___B__',
                    '_B_____B_',
                    'B_______B',
                    '_________',
                    '_________',
                    '_________',
                    'B_______B',
                    '_B_____B_',
                    '__B___B__'
                ],
                [
                    '__SOGOS__',
                    '_SOW_WOS_',
                    'SOP_W_POS',
                    'OW__W__WO',
                    'G_WW0WW_G',
                    'OW__W__WO',
                    'SOP_W_POS',
                    '_SOW_WOS_',
                    '__SOGOS__'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/tree_of_life_stage_3',
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

        event.addJson(`occultism:modonomicon/multiblocks/${pentacle.name}.json`, pentacle);

        // Remember to set lang entries for all new pentacles in en_us.json
        // x and y placement refer to the entry location within the modonomicon
        event.addJson(
            `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`,
            generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
        );
    });
});
