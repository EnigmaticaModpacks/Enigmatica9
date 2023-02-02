ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/campfire_cooking/';

    const recipes = [
        // {
        //     cookingtime: 600,
        //     experience: 0.35,
        //     ingredient: { item: 'minecraft:clay_ball' },
        //     result: 'minecraft:brick',
        //     id: `${id_prefix}brick`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'minecraft:campfire_cooking';
        event.custom(recipe).id(recipe.id);
    });
});
