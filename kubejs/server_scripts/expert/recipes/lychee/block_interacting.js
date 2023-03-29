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
                { type: 'place', block: 'naturesaura:wood_stand' },
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
                }
            ],
            id: `${id_prefix}wood_stand`
        },
        {
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            hide_in_viewer: true,
            post: [
                { type: 'place', block: 'hexerei:mixing_cauldron' },
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
                }
            ],
            id: `${id_prefix}mixing_cauldron`
        },
        {
            item_in: { tag: 'forge:plates/bronze' },
            block_in: 'ars_nouveau:green_archwood_wood',
            post: [
                { type: 'place', block: 'ars_nouveau:imbuement_chamber' },
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
                }
            ],
            id: `${id_prefix}imbuement_chamber`
        },
        {
            item_in: { item: 'naturesaura:gold_leaf' },
            block_in: 'twilightforest:ironwood_block',
            post: [
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
            item_in: { item: 'kubejs:dream_stone' },
            block_in: 'naturesaura:gold_brick',
            post: [
                {
                    type: 'place',
                    block: { blocks: ['kubejs:gloaming_catalyst'] },
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes an incredible amount of Aura.' }
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
                { type: 'is_sneaking', description: 'Must be sneaking. Consumes an incredible amount of Aura.' }
            ],
            id: `${id_prefix}gloaming_catalyst`
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
            item_in: Ingredient.of(conversion.item).toJson(),
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
