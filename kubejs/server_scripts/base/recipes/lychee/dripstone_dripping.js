ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/block_interacting/';

    const recipes = [
        {
            source_block: 'minecraft:water',
            target_block: 'minecraft:dirt',
            post: [
                {
                    type: 'place',
                    block: 'minecraft:mud'
                }
            ],
            id: `${id_prefix}mud`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:dripstone_dripping';
        event.custom(recipe).id(recipe.id);
    });
});
