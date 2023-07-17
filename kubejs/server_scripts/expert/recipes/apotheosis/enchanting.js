ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/apotheosis/enchanting/';
    const recipes = [
        {
            result: { item: 'minecraft:sculk_catalyst', count: 1 },
            input: { item: 'industrialforegoing:mechanical_dirt' },
            requirements: { eterna: 40, quanta: 15, arcana: 60 },
            max_requirements: { eterna: -1, quanta: 25, arcana: -1 },
            id: `${id_prefix}sculk_catalyst`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:enchanting';
        event.custom(recipe).id(recipe.id);
    });
});
