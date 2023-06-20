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
        },
        {
            fluid: { amount: 250, fluid: 'hexerei:blood_fluid' },
            input: { base_ingredient: [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }], count: 4 },
            result: { item: 'kubejs:mystery_mash', count: 2 },
            energy: 1280,
            id: `${id_prefix}blood_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:squeezer';

        event.custom(recipe).id(recipe.id);
    });
});
