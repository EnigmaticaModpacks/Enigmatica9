ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Predicate builder: https://misode.github.io/predicate/

    const id_prefix = 'enigmatica:expert/lychee/random_block_ticking/';
    const recipes = [
        // // Sample recipe for uranium filtering. Adjust chance to speed up or slow down.
        // {
        //     block_in: { blocks: ['thermal:white_rockwool'] },
        //     post: [
        //         {
        //             type: 'place',
        //             block: 'thermal:lime_rockwool'
        //         },
        //         {
        //             type: 'execute',
        //             command: 'playsound minecraft:block.water.ambient ambient @p ~ ~ ~',
        //             hide: true
        //         },
        //         {
        //             type: 'execute',
        //             command: 'playsound minecraft:block.wool.place block @p ~ ~ ~ 0.3 0.1',
        //             hide: true
        //         }
        //     ],
        //     contextual: [
        //         {
        //             type: 'and',
        //             contextual: [
        //                 { type: 'location', predicate: { 'lychee:biome_tag': 'is_ocean' } },
        //                 { type: 'location', predicate: { position: { y: { min: 0, max: 63 } } } },
        //                 { type: 'chance', chance: 0.1 },
        //                 {
        //                     type: 'location',
        //                     offsetX: -1,
        //                     predicate: { block: { blocks: ['minecraft:water'] } }
        //                 },
        //                 {
        //                     type: 'location',
        //                     offsetX: 1,
        //                     predicate: { block: { blocks: ['minecraft:water'] } }
        //                 },
        //                 {
        //                     type: 'location',
        //                     offsetZ: -1,
        //                     predicate: { block: { blocks: ['minecraft:water'] } }
        //                 },
        //                 {
        //                     type: 'location',
        //                     offsetZ: 1,
        //                     predicate: { block: { blocks: ['minecraft:water'] } }
        //                 }
        //             ]
        //         }
        //     ],
        //     id: `${id_prefix}filter_filling`
        // },
        {
            block_in: { blocks: ['twilightforest:liveroot_block'] },
            post: [
                // Release Aura once per day around noon
                {
                    type: 'execute',
                    command: `summon item ~ ~2 ~ {Item:{id:"kubejs:aura_leaf",Count:1b,tag:{aura_amount:40000,aura_max:1000000}}}`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_1'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `summon item ~ ~2 ~ {Item:{id:"kubejs:aura_leaf",Count:1b,tag:{aura_amount:80000,aura_max:1500000}}}`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_2'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `summon item ~ ~2 ~ {Item:{id:"kubejs:aura_leaf",Count:1b,tag:{aura_amount:120000,aura_max:2000000}}}`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_3'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `summon item ~ ~2 ~ {Item:{id:"kubejs:aura_leaf",Count:1b,tag:{aura_amount:500000,aura_max:2500000}}}`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_4'] } }
                            }
                        ]
                    }
                },
                // Disable by changing to inactive heartwood
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_1_inactive`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_1'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_2_inactive`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_2'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_3_inactive`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_3'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_4_inactive`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_4'] } }
                            }
                        ]
                    }
                },
                // Recharge around midnight
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_1`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_1_inactive'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_2`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_2_inactive'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_3`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_3_inactive'] } }
                            }
                        ]
                    }
                },
                {
                    type: 'execute',
                    command: `setblock ~ ~1 ~ kubejs:heartwood_stage_4`,
                    contextual: {
                        type: 'and',
                        contextual: [
                            { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 },
                            {
                                type: 'location',
                                offsetY: 1,
                                predicate: { block: { blocks: ['kubejs:heartwood_stage_4_inactive'] } }
                            }
                        ]
                    }
                }
            ],
            id: `${id_prefix}generate_aura_at_tree_of_life`
        },
        // Remove a small amount of Aura randomly while a Dimensional Mineshaft is running.
        {
            block_in: { blocks: ['occultism:dimensional_mineshaft'] },
            post: subtractAura(10000),
            contextual: {
                type: 'location',
                predicate: {
                    block: { blocks: ['occultism:dimensional_mineshaft'], nbt: '{inputHandler:{Items:[{Slot:0}]}}' }
                }
            },
            id: `${id_prefix}dimensional_mineshaft_aura_drain`
        }
    ];

    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            recipes.push({
                block_in: { blocks: ['pneumaticcraft:air_compressor'] },
                post: subtractAura(10000),
                contextual: {
                    type: 'location',
                    predicate: { block: { blocks: ['pneumaticcraft:air_compressor'], state: { on: true } } }
                },
                id: `${id_prefix}air_compressor_aura_drain`
            });
        } else {
            recipes.push({
                block_in: { blocks: ['pneumaticcraft:air_compressor'] },
                post: subtractAura(10000 * i),
                contextual: {
                    type: 'location',
                    predicate: {
                        block: {
                            blocks: ['pneumaticcraft:air_compressor'],
                            state: { on: true },
                            nbt: `{UpgradeInventory:{Items:[{id:"pneumaticcraft:speed_upgrade", Count:${i}b}]}}`
                        }
                    }
                },
                id: `${id_prefix}air_compressor_aura_drain_speed_${i}`
            });
        }
    }

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:random_block_ticking';
        event.custom(recipe).id(recipe.id);
    });
});

function subtractAura(amount) {
    let post = [
        {
            type: 'execute',
            command: `particle minecraft:soul_fire_flame ~ ~ ~ 0.1 0.1 0.1 0.1 5`,
            hide: true
        },
        {
            type: 'execute',
            command: `naaura remove ${amount}`,
            hide: true
        },
        {
            type: 'execute',
            command: `playsound minecraft:block.amethyst_cluster.break block @p ~ ~ ~`,
            hide: true
        }
    ];
    return post;
}
