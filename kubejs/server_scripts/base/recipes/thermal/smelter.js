ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/smelter/';

    const recipes = [
        {
            ingredients: [{ tag: 'forge:glass', count: 2 }, { tag: 'forge:dusts/iron' }],
            result: [{ item: 'immersiveengineering:insulating_glass', count: 2 }],
            energy: 3200,
            id: `${id_prefix}insulating_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
