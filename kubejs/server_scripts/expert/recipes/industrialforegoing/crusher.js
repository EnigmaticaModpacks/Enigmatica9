ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/crusher/';
    const recipes = [
        {
            output: { item: 'ae2:sky_dust' },
            input: { item: 'ae2:sky_stone_block' },
            id: `${id_prefix}sky_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:crusher';
        event.custom(recipe).id(recipe.id);
    });
});
