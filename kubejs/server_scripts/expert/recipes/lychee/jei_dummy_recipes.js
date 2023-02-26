ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/jei_dummy_recipe/';
    const recipes = [
        // Preserving these for reference, may re-purpose to another block.
        // // Dummy Recipe for:
        // // item_inside/pearl_to_moonstone_sunstone_real
        // // item_inside/moonstone_block_to_pearl
        // // item_inside/sunstone_block_to_pearl
        // {
        //     type: 'lychee:item_inside',
        //     item_in: { item: 'blue_skies:pearl' },
        //     block_in: { blocks: ['minecraft:water'] },
        //     ghost: true,
        //     post: [
        //         // If around noon, convert to sunstone
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:sunstone_block',
        //             contextual: [
        //                 {
        //                     type: 'time',
        //                     value: { min: 4000, max: 8000 },
        //                     period: 24000,
        //                     description: 'recipes.lychee.item_inside.sunstone.condition.description'
        //                 }
        //             ]
        //         },
        //         // If around midnight, convert to moonstone
        //         {
        //             type: 'drop_item',
        //             item: 'blue_skies:moonstone_block',
        //             contextual: [
        //                 {
        //                     type: 'time',
        //                     value: { min: 16000, max: 20000 },
        //                     period: 24000,
        //                     description: 'recipes.lychee.item_inside.moonstone.condition.description'
        //                 }
        //             ]
        //         }
        //     ],
        //     id: `${id_prefix}pearl_to_moonstone_sunstone`
        // },
        // Dummy Recipe for:
        // random_block_ticking/filter_filling
        {
            type: 'lychee:item_inside',
            item_in: { item: 'thermal:white_rockwool' },
            block_in: { blocks: ['minecraft:water'] },
            ghost: true,
            post: [
                // If around noon, convert to sunstone
                {
                    type: 'drop_item',
                    item: 'thermal:lime_rockwool',
                    contextual: [
                        {
                            type: 'location',
                            predicate: { 'lychee:biome_tag': 'is_ocean' },
                            description: 'recipes.lychee.item_inside.filter_filling.condition.description'
                        }
                    ]
                }
            ],
            id: `${id_prefix}filter_filling`
        },
        // Dummy recipe for block_interacting/mixing_cauldron
        {
            type: 'lychee:block_interacting',
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            ghost: true,
            post: [{ type: 'place', block: { blocks: ['hexerei:mixing_cauldron'], state: { gui_render: 'true' } } }],
            id: `${id_prefix}mixing_cauldron`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
