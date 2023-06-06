ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/refinery/';
    const recipes = [
        {
            result: { amount: 10, fluid: 'hexerei:quicksilver_fluid' },
            input0: { amount: 10, tag: 'forge:magicite' },
            catalyst: { tag: 'forge:dusts/moon_dust' },
            energy: 500,

            id: `${id_prefix}quicksilver_fluid`
        },
        {
            result: { amount: 10, fluid: 'kubejs:ambrosia' },
            input0: { amount: 9, tag: 'forge:mendosteen_mash' },
            input1: { amount: 1, tag: 'forge:honey' },
            energy: 500,

            id: `${id_prefix}ambrosia`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
