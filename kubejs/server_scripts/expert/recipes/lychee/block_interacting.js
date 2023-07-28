ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/block_interacting/';

    const recipes = [
        {
            item_in: { item: 'naturesaura:gold_leaf' },
            block_in: { tag: 'minecraft:logs' },
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'naturesaura:wood_stand',
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 5000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}wood_stand`
        },
        {
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            hide_in_viewer: true,
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'hexerei:mixing_cauldron',
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 5000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}mixing_cauldron`
        },
        {
            item_in: { item: 'quark:ancient_fruit' },
            block_in: 'emendatusenigmatica:bronze_block',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'ars_nouveau:imbuement_chamber',
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 5000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}imbuement_chamber`
        },
        {
            item_in: { item: 'naturesaura:gold_leaf' },
            block_in: 'twilightforest:ironwood_block',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:nature_altar'] },
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.respawn_anchor.set_spawn block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 5000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}nature_altar_from_sunlight`
        },
        {
            item_in: { tag: 'forge:essences/fire' },
            block_in: 'naturesaura:gold_brick',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:conversion_catalyst'] },
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a large amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.respawn_anchor.set_spawn block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 500000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a large amount of Aura.' }],
            id: `${id_prefix}conversion_catalyst`
        },
        {
            item_in: { tag: 'forge:essences/water' },
            block_in: 'naturesaura:gold_brick',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:crushing_catalyst'] },
                    description: 'Must be sneaking. Consumes a moderate amount of Aura.',
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a moderate amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.respawn_anchor.set_spawn block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 100000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a moderate amount of Aura.' }],
            id: `${id_prefix}crushing_catalyst`
        },
        {
            item_in: { item: 'the_bumblezone:essence_of_the_bees' },
            block_in: 'naturesaura:gold_brick',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['kubejs:gloaming_catalyst'] },
                    contextual: [
                        {
                            type: 'is_sneaking',
                            description: 'Must be sneaking. Consumes an incredible amount of Aura.'
                        }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.respawn_anchor.set_spawn block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 2000000',
                    hide: true
                }
            ],
            contextual: [
                {
                    type: 'is_sneaking',
                    description: 'Must be sneaking. Consumes an incredible amount of Aura.'
                }
            ],
            id: `${id_prefix}gloaming_catalyst`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: { tag: 'minecraft:leaves' },
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: {
                        blocks: ['naturesaura:golden_leaves'],
                        state: { stage: '3' }
                    }
                },
                { type: 'damage_item', damage: 15 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/golden_leaves`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: 'minecraft:cactus',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:aura_cactus'] }
                },
                { type: 'damage_item', damage: 5 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/aura_cactus`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: 'minecraft:oxeye_daisy',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:aura_bloom'] }
                },
                { type: 'damage_item', damage: 5 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/aura_bloom`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: 'minecraft:red_mushroom',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:aura_mushroom'] }
                },
                { type: 'damage_item', damage: 5 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/aura_mushroom`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: 'minecraft:warped_fungus',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:warped_aura_mushroom'] }
                },
                { type: 'damage_item', damage: 5 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/warped_aura_mushroom`
        },
        {
            item_in: { item: 'minecraft:shears' },
            block_in: 'minecraft:crimson_fungus',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:crimson_aura_mushroom'] }
                },
                { type: 'damage_item', damage: 5 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}shears_conversions/crimson_aura_mushroom`
        }
    ];

    const ae2_conversions = [
        { item: `ars_nouveau:wixie_charm`, block: `ae2:crafting_accelerator` },
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
            item_in: conversion.item.startsWith('#') ? { tag: conversion.item.slice(1) } : { item: conversion.item },
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
