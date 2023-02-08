ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/sandpaper_polishing/';

    const recipes = [
        {
            ingredients: [{ item: 'minecraft:nether_bricks' }],
            results: [{ item: 'minecraft:red_nether_bricks' }],
            id: `${id_prefix}red_nether_bricks`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sandpaper_polishing';
        event.custom(recipe).id(recipe.id);
    });
});
