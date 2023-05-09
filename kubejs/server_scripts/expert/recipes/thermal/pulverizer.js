ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/pulverizer/';

    const recipes = [
        {
            input: 'naturesaura:calling_spirit',
            outputs: [
                { item: 'ars_nouveau:air_essence', chance: 1.2 },
                { item: 'ars_nouveau:fire_essence', chance: 1.2 },
                { item: 'ars_nouveau:water_essence', chance: 1.2 },
                { item: 'ars_nouveau:earth_essence', chance: 1.2 }
            ],
            energy: 4000,
            id: `${id_prefix}essence_renewal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
