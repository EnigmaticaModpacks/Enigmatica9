ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/stonework_generate/';
    const recipes = [
        {
            output: { item: 'naturesaura:infused_stone', count: 1 },
            lavaNeed: 1000,
            waterNeed: 1000,
            lavaConsume: 0,
            waterConsume: 0,
            id: `${id_prefix}infused_stone`
        },
        {
            output: { item: 'ars_nouveau:sourcestone', count: 1 },
            lavaNeed: 1000,
            waterNeed: 1000,
            lavaConsume: 0,
            waterConsume: 0,
            id: `${id_prefix}sourcestone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:stonework_generate';

        event.custom(recipe).id(recipe.id);
    });
});
