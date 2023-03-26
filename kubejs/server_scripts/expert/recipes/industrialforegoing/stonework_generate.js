ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/stonework_generate/';
    const recipes = [
        {
            output: { item: 'ae2:sky_stone_block', count: 1 },
            lavaConsume: 0,
            lavaNeed: 1000,
            waterConsume: 1000,
            waterNeed: 1000,
            id: `${id_prefix}`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:stonework_generate';

        event.custom(recipe).id(recipe.id);
    });
});
