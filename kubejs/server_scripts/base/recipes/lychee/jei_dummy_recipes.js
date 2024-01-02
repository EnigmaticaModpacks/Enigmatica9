ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/jei_dummy_recipe/';
    const recipes = [
        // Dummy Recipe for: block_interacting/carved_pumpkin
        {
            ghost: true,
            type: 'lychee:block_interacting',
            item_in: { tag: 'forge:tools/knives' },
            block_in: 'minecraft:pumpkin',
            post: [
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'] }
                },
                {
                    type: 'drop_item',
                    item: 'minecraft:pumpkin_seeds',
                    count: 4
                }
            ],
            id: `${id_prefix}carved_pumpkin`
        },
        {
            type: 'lychee:dripstone_dripping',
            ghost: true,
            source_block: 'minecraft:mud',
            target_block: 'minecraft:air',
            post: [
                {
                    type: 'place',
                    block: { blocks: ['minecraft:clay'] }
                }
            ],
            id: `${id_prefix}clay`
        },
        {
            type: 'lychee:dripstone_dripping',
            ghost: true,
            source_block: 'minecraft:lava',
            target_block: 'minecraft:cauldron',
            post: [
                {
                    type: 'place',
                    block: { blocks: ['minecraft:lava'] }
                }
            ],
            id: `${id_prefix}lava`
        },
        {
            ghost: true,
            item_in: { tag: 'farmersdelight:straw_harvesters' },
            type: 'lychee:block_clicking',
            block_in: { blocks: ['minecraft:grass', 'minecraft:tall_grass'] },
            post: [
                {
                    type: 'drop_item',
                    contextual: [{ type: 'chance', chance: 0.2 }],
                    item: 'farmersdelight:straw'
                }
            ],
            id: `${id_prefix}straw_from_grass`
        },
        {
            ghost: true,
            item_in: { tag: 'farmersdelight:straw_harvesters' },
            type: 'lychee:block_clicking',
            block_in: { blocks: ['farmersdelight:sandy_shrub'] },
            post: [
                {
                    type: 'drop_item',
                    contextual: [{ type: 'chance', chance: 0.3 }],
                    item: 'farmersdelight:straw'
                }
            ],
            id: `${id_prefix}straw_from_sandy_shrub`
        },
        {
            ghost: true,
            item_in: { tag: 'farmersdelight:straw_harvesters' },
            type: 'lychee:block_clicking',
            block_in: { blocks: ['minecraft:wheat'], state: { age: '7' } },
            post: [
                {
                    type: 'drop_item',
                    item: 'farmersdelight:straw'
                }
            ],
            id: `${id_prefix}straw_from_wheat`
        },
        {
            ghost: true,
            item_in: { tag: 'farmersdelight:straw_harvesters' },
            type: 'lychee:block_clicking',
            block_in: { blocks: ['farmersdelight:rice_panicles'], state: { age: '3' } },
            post: [
                {
                    type: 'drop_item',
                    item: 'farmersdelight:straw'
                }
            ],
            id: `${id_prefix}straw_from_rice_panicles`
        },
        {
            ghost: true,
            type: 'lychee:block_interacting',
            item_in: { item: 'ars_nouveau:drygmy_charm' },
            block_in: 'minecraft:mossy_cobblestone',
            post: [
                {
                    type: 'place',
                    block: {
                        blocks: ['ars_nouveau:drygmy_stone'],
                        state: { converted: 'true' }
                    }
                }
            ],
            id: `${id_prefix}drygmy_stone`
        },
        {
            ghost: true,
            type: 'lychee:block_interacting',
            item_in: { item: 'ars_nouveau:whirlisprig_charm' },
            block_in: { tag: 'minecraft:flowers' },
            post: [
                {
                    type: 'place',
                    block: {
                        blocks: ['ars_nouveau:whirlisprig_flower'],
                        state: { converted: 'true' }
                    }
                }
            ],
            id: `${id_prefix}whirlisprig_flower`
        },
        {
            ghost: true,
            type: 'lychee:block_interacting',
            item_in: { item: 'ars_elemental:siren_charm' },
            block_in: 'minecraft:prismarine',
            post: [
                {
                    type: 'place',
                    block: {
                        blocks: ['ars_elemental:mermaid_rock'],
                        state: { converted: 'true' }
                    }
                }
            ],
            id: `${id_prefix}siren_stone`
        },
        {
            ghost: true,
            type: 'lychee:block_interacting',
            item_in: { item: 'ars_nouveau:wixie_charm' },
            block_in: 'minecraft:cauldron',
            post: [
                {
                    type: 'place',
                    block: {
                        blocks: ['ars_nouveau:wixie_cauldron'],
                        state: { converted: 'true' }
                    }
                }
            ],
            id: `${id_prefix}wixie_cauldron`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
