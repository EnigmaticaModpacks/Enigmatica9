ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/lightning_channeling/';
    const recipes = [
        {
            item_in: [{ tag: 'mekanism:dirty_dusts/iron' }],
            post: [
                { type: 'drop_item', item: 'mekanism:shard_iron', count: 6 },
                { type: 'drop_xp', xp: 100 }
            ],
            id: `${id_prefix}shard_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:lightning_channeling';
        event.custom(recipe).id(recipe.id);
    });
});
