ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/item_exploding/';
    const recipes = [
        // {
        //     item_in: { item: 'minecraft:andesite' },
        //     post: [
        //         {
        //             type: 'drop_item',
        //             item: 'pneumaticcraft:compressed_stone',
        //             count: 1,
        //             contextual: { type: 'chance', chance: 0.5 }
        //         }
        //     ],
        //     id: `${id_prefix}compressed_stone`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_exploding';
        event.custom(recipe).id(recipe.id);
    });
});
