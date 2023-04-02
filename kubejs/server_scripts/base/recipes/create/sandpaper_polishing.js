ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/sandpaper_polishing/';

    const recipes = [
        {
            ingredients: [{ item: 'minecraft:nether_brick' }],
            results: [{ item: 'kubejs:red_nether_brick' }],
            id: `${id_prefix}red_nether_brick`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sandpaper_polishing';
        event.custom(recipe).id(recipe.id);
    });
});
