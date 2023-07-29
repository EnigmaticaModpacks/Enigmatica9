ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/refinery/';

    const recipes = [
        {
            ingredient: { fluid: 'industrialforegoing:latex', amount: 1000, count: 2.0 },
            result: [
                { fluid: 'minecraft:water', amount: 100 },
                { item: 'thermal:rubber', chance: 1.0 }
            ],
            energy: 6000,
            id: `${id_prefix}rubber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
