ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/chiller/';

    const recipes = [
        {
            result: [{ item: 'pneumaticcraft:plastic', chance: 2.15 }],
            ingredients: [{ fluid: 'pneumaticcraft:plastic', amount: 1000 }],
            energy: 8000,
            id: `${id_prefix}plastic`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:chiller';
        event.custom(recipe).id(recipe.id);
    });
});
