ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/spirit/soul_engulfing/';

    // @ is for Soul Fire
    // & is for Soul Fire compatible blocks like Soul Sand
    const recipes = [
        {
            outputItem: 'spirit:soul_glass',
            input: {
                ingredient: {
                    item: 'ae2:quartz_glass'
                },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['SGS', 'G&G', 'SGS']
                    ],
                    keys: {
                        S: { block: 'powah:energized_steel_block' },
                        G: { block: 'ars_nouveau:source_gem_block' },
                        C: { block: 'occultism:spirit_attuned_crystal' }
                    }
                }
            },
            duration: 40,
            destroysStructure: false,
            id: `spirit:soul_engulfing/soul_glass`
        },
        {
            outputItem: 'occultism:spirit_attuned_gem',
            outputAmount: 4,
            input: {
                ingredient: {
                    item: 'ae2:fluix_pearl'
                },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['SGS', 'G&G', 'SGS']
                    ],
                    keys: {
                        S: { block: 'powah:energized_steel_block' },
                        G: { block: 'ars_nouveau:source_gem_block' },
                        C: { block: 'occultism:spirit_attuned_crystal' }
                    }
                }
            },
            duration: 10,
            destroysStructure: false,
            id: `${id_prefix}spirit_attuned_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'spirit:soul_engulfing';
        event.custom(recipe).id(recipe.id);
    });
});
