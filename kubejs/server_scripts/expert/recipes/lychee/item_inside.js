ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/item_inside/';
    const recipes = [
        {
            item_in: [
                { tag: 'forge:dusts/subzero' },
                { tag: 'forge:dusts/fluix' },
                { tag: 'forge:dusts/fluix' },
                { tag: 'forge:dusts/fluix' },
                { tag: 'forge:dusts/fluix' }
            ],
            block_in: { blocks: ['minecraft:water'] },
            post: [{ type: 'drop_item', item: 'ae2:fluix_pearl' }],
            id: `${id_prefix}fluix_pearl`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_inside';
        event.custom(recipe).id(recipe.id);
    });
});
