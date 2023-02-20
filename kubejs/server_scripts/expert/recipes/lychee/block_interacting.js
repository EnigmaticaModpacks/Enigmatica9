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
            item_in: {
                type: 'forge:nbt',
                item: 'naturesaura:aura_bottle',
                nbt: '{stored_type:"naturesaura:overworld"}'
            },
            block_in: 'twilightforest:ironwood_block',
            post: [
                {
                    type: 'place',
                    block: { blocks: ['naturesaura:nature_altar'], state: { nether: 'false' } }
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
                }
            ],
            contextual: [
                {
                    type: 'or',
                    contextual: [
                        { type: 'location', predicate: { dimension: 'minecraft:overworld' } },
                        { type: 'location', predicate: { dimension: 'blue_skies:everdawn' } },
                        { type: 'location', predicate: { dimension: 'twilightforest:twilight_forest' } }
                    ]
                }
            ],
            id: `${id_prefix}nature_altar_from_sunlight`
        },
        {
            item_in: { item: 'ars_nouveau:fire_essence' },
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
            item_in: { item: 'ars_nouveau:water_essence' },
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
