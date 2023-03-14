ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/lightning_channeling/';
    const recipes = [
        {
            item_in: [{ tag: 'mekanism:dirty_dusts/iron' }],
            post: [{ type: 'drop_item', item: 'mekanism:shard_iron', count: 6 }],
            id: `${id_prefix}shard_iron`
        },
        {
            item_in: [{ item: 'ae2:certus_quartz_crystal' }],
            post: [
                {
                    type: 'drop_item',
                    item: 'ae2:charged_certus_quartz_crystal',
                    count: 1,
                    contextual: { type: 'chance', chance: 0.5 }
                }
            ],
            id: `${id_prefix}charged_certus_quartz_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:lightning_channeling';
        event.custom(recipe).id(recipe.id);
    });
});
