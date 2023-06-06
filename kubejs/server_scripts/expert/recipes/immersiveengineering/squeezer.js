ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/squeezer/';

    const recipes = [
        {
            fluid: { amount: 125, fluid: 'kubejs:mendosteen_mash' },
            input: [{ item: 'ars_nouveau:mendosteen_pod' }],
            energy: 6400,
            id: `${id_prefix}mendosteen_mash`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:squeezer';

        event.custom(recipe).id(recipe.id);
    });
});
