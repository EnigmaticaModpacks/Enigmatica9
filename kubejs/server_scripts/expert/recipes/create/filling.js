ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/filling/';

    const recipes = [
        {
            results: [{ item: 'hexerei:blood_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                {
                    amount: 250,
                    fluid: 'hexerei:blood_fluid'
                }
            ],
            id: `${id_prefix}blood_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
