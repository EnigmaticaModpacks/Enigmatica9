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
                ingredient: { item: 'ae2:quartz_glass' },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['ABA', 'B&B', 'ABA']
                    ],
                    keys: {
                        A: { block: 'powah:energized_steel_block' },
                        B: { block: '#forge:storage_blocks/source' },
                        C: { block: 'minecraft:wither_skeleton_skull' }
                    }
                }
            },
            duration: 10,
            destroysStructure: false,
            id: `spirit:soul_engulfing/soul_glass`
        },
        {
            outputItem: 'occultism:spirit_attuned_gem',
            outputAmount: 4,
            input: {
                ingredient: { item: 'ae2:fluix_pearl' },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['ABA', 'B&B', 'ABA']
                    ],
                    keys: {
                        A: { block: 'powah:energized_steel_block' },
                        B: { block: '#forge:storage_blocks/source' },
                        C: { block: 'minecraft:wither_skeleton_skull' }
                    }
                }
            },
            duration: 10,
            destroysStructure: false,
            id: `${id_prefix}spirit_attuned_gem`
        },
        {
            outputItem: 'spirit:crude_soul_crystal',
            input: {
                ingredient: { item: 'spirit:soul_crystal_shard' },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['ABA', 'B&B', 'ABA']
                    ],
                    keys: {
                        A: { block: 'pneumaticcraft:compressed_brick_tile' },
                        B: { block: '#forge:storage_blocks/source' },
                        C: { block: 'minecraft:skeleton_skull' }
                    }
                }
            },
            duration: 10,
            destroysStructure: false,
            id: `spirit:soul_engulfing/crude_soul_crystal`
        },
        {
            outputItem: 'spirit:soul_cage',
            input: {
                ingredient: { item: 'spirit:broken_spawner' },
                multiblock: {
                    pattern: [
                        ['C C', ' @ ', 'C C'],
                        ['ABA', 'B&B', 'ABA']
                    ],
                    keys: {
                        A: { block: 'pneumaticcraft:compressed_brick_tile' },
                        B: { block: '#forge:storage_blocks/source' },
                        C: { block: 'minecraft:skeleton_skull' }
                    }
                }
            },
            duration: 10,
            destroysStructure: false,
            id: `spirit:soul_engulfing/soul_cage`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'spirit:soul_engulfing';
        event.custom(recipe).id(recipe.id);
    });
});
