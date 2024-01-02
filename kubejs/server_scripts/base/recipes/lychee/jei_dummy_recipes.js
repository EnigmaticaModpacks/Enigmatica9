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
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
