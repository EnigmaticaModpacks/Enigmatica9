ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/lychee/block_interacting/';

    const recipes = [];

    const ae2_conversions = [
        { item: `ae2:engineering_processor`, block: `ae2:crafting_accelerator` },
        { item: `ae2:storage_monitor`, block: `ae2:crafting_monitor` },
        { item: `ae2:cell_component_1k`, block: `ae2:1k_crafting_storage` },
        { item: `ae2:cell_component_4k`, block: `ae2:4k_crafting_storage` },
        { item: `ae2:cell_component_16k`, block: `ae2:16k_crafting_storage` },
        { item: `ae2:cell_component_64k`, block: `ae2:64k_crafting_storage` },
        { item: `ae2:cell_component_256k`, block: `ae2:256k_crafting_storage` }
    ];

    ae2_conversions.forEach((conversion) => {
        let blocks = ['ae2:crafting_unit'];
        let post = [
            {
                type: 'execute',
                command: 'playsound minecraft:block.amethyst_block.hit block @p ~ ~ ~ 1 0.6',
                hide: true
            }
        ];

        ae2_conversions.forEach((refund) => {
            if (refund.item !== conversion.item) {
                blocks.push(refund.block);

                post.push({
                    type: 'drop_item',
                    item: refund.item,
                    contextual: { type: 'location', predicate: { block: { blocks: [refund.block] } } }
                });
            }
        });
        if (conversion.block == 'ae2:crafting_monitor') {
            post.push(
                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"NORTH"}` },
                    contextual: { type: 'direction', direction: 'north' }
                },
                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"SOUTH"}` },
                    contextual: { type: 'direction', direction: 'south' }
                },
                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"EAST"}` },
                    contextual: { type: 'direction', direction: 'east' }
                },
                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"WEST"}` },
                    contextual: { type: 'direction', direction: 'west' }
                },
                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"UP"}` },
                    contextual: { type: 'direction', direction: 'up' }
                },

                {
                    type: 'place',
                    block: { blocks: [conversion.block], nbt: `{forward:"DOWN"}` },
                    contextual: { type: 'direction', direction: 'down' }
                }
            );
        } else {
            post.push({ type: 'place', block: { blocks: [conversion.block] } });
        }

        recipes.push({
            item_in: { item: conversion.item },
            block_in: { blocks: blocks },
            post: post,
            id: `${id_prefix}convert_to_${conversion.block.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
