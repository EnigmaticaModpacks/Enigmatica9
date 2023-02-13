ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/crush/';

    const recipes = [
        {
            input: { item: 'naturesaura:infused_stone' },
            output: [{ chance: 1.0, count: 1, item: 'pneumaticcraft:compressed_stone' }],
            id: `${id_prefix}compressed_stone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
