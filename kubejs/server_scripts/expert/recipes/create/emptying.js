ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/emptying/';

    const recipes = [
        {
            results: [{ item: 'minecraft:glass_bottle' }, { amount: 250, fluid: 'hexerei:blood_fluid' }],
            ingredients: [{ item: 'hexerei:blood_bottle' }],
            id: `${id_prefix}blood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:emptying';
        event.custom(recipe).id(recipe.id);
    });
});
