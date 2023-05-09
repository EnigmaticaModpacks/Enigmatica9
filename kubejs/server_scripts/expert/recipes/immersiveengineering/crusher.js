ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/immersiveengineering/crusher/';

    const recipes = [
        {
            input: 'naturesaura:calling_spirit',
            output: 'ars_nouveau:air_essence',
            secondaries: [
                { output: { item: 'ars_nouveau:fire_essence', count: 1 }, chance: 1.0 },
                { output: { item: 'ars_nouveau:water_essence', count: 1 }, chance: 1.0 },
                { output: { item: 'ars_nouveau:earth_essence', count: 1 }, chance: 1.0 }
            ],
            energy: 3000,
            id: `${id_prefix}essence_renewal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
