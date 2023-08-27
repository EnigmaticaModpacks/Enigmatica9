ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/item_burning/';

    const recipes = [
        {
            item_in: { item: 'occultism:datura' },
            post: [{ type: 'place', block: 'occultism:spirit_fire' }],
            id: `${id_prefix}spirit_fire`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_burning';
        event.custom(recipe).id(recipe.id);
    });
});
