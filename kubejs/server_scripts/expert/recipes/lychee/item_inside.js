ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/item_inside/';
    const recipes = [
        // Preserving these for reference, may re-purpose to another block.
        // {
        //     input: 'blue_skies:pearl',
        //     block_in: {
        //         blocks: ['minecraft:water']
        //     },
        //     // Hide in JEI. Dummy recipe will show the necessary information in a cleaner recipe.
        //     hide_in_viewer: true,
        //     // Only check the conditions once, then end. Next check happens after 1 second
        //     max_repeats: 1,
        //     post: [
        //         // If around noon, convert to sunstone
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:sunstone_block',
        //             contextual: [{ type: 'time', value: { min: 4000, max: 8000 }, period: 24000 }]
        //         },
        //         // If around midnight, convert to moonstone
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:moonstone_block',
        //             contextual: [{ type: 'time', value: { min: 16000, max: 20000 }, period: 24000 }]
        //         },
        //         // Otherwise do nothing (prevents the item from being destroyed)
        //         {
        //             type: 'prevent_default',
        //             contextual: [
        //                 {
        //                     type: 'and',
        //                     contextual: [
        //                         {
        //                             type: 'not',
        //                             contextual: { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 }
        //                         },
        //                         {
        //                             type: 'not',
        //                             contextual: { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 }
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ],
        //     id: `${id_prefix}pearl_to_moonstone_sunstone_real`
        // },
        // {
        //     input: 'blue_skies:moonstone_block',
        //     block_in: {
        //         blocks: ['minecraft:water']
        //     },
        //     // Hide in JEI. Dummy recipe will show the necessary information in a cleaner recipe.
        //     hide_in_viewer: true,
        //     // Only check the conditions once, then end. Next check happens after 1 second
        //     max_repeats: 1,
        //     post: [
        //         // If not around midnight, revert back
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:pearl',
        //             contextual: [
        //                 {
        //                     type: 'not',
        //                     contextual: { type: 'time', value: { min: 16000, max: 20000 }, period: 24000 }
        //                 }
        //             ]
        //         },
        //         // Otherwise do nothing (prevents the item from being destroyed)
        //         {
        //             type: 'prevent_default',
        //             contextual: [{ type: 'time', value: { min: 16000, max: 20000 }, period: 24000 }]
        //         }
        //     ],
        //     id: `${id_prefix}moonstone_block_to_pearl`
        // },
        // {
        //     input: 'blue_skies:sunstone_block',
        //     block_in: {
        //         blocks: ['minecraft:water']
        //     },
        //     // Hide in JEI. Dummy recipe will show the necessary information in a cleaner recipe.
        //     hide_in_viewer: true,
        //     // Only check the conditions once, then end. Next check happens after 1 second
        //     max_repeats: 1,
        //     post: [
        //         // If not around noon, revert back
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:pearl',
        //             contextual: [
        //                 {
        //                     type: 'not',
        //                     contextual: { type: 'time', value: { min: 4000, max: 8000 }, period: 24000 }
        //                 }
        //             ]
        //         },
        //         // Otherwise do nothing (prevents the item from being destroyed)
        //         {
        //             type: 'prevent_default',
        //             contextual: [{ type: 'time', value: { min: 4000, max: 8000 }, period: 24000 }]
        //         }
        //     ],
        //     id: `${id_prefix}sunstone_block_to_pearl`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_inside';
        recipe.item_in = Item.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
