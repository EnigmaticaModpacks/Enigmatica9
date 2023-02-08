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
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
