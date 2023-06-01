ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/jei_dummy_recipe/';
    const recipes = [
        // Dummy recipe for block_interacting/mixing_cauldron
        {
            type: 'lychee:block_interacting',
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            ghost: true,
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['hexerei:mixing_cauldron'], state: { gui_render: 'true' } },
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}mixing_cauldron`
        },
        // Dummy recipe for item_exploding/soul_crystal_shard
        {
            type: 'lychee:item_exploding',
            item_in: { item: 'occultism:soul_gem' },
            ghost: true,
            post: [
                {
                    type: 'drop_item',
                    item: 'spirit:soul_crystal_shard',
                    count: 3
                }
            ],
            id: `${id_prefix}soul_crystal_shard`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
