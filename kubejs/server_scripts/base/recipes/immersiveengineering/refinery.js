ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/refinery/';

    const recipes = [
        {
            result: { fluid: 'pneumaticcraft:biodiesel', amount: 50 },
            inputs: [
                { tag: 'forge:plantoil', amount: 25 },
                { tag: 'forge:ethanol', amount: 25 }
            ],
            catalyst: '#forge:dusts/niter',
            energy: 80,
            id: `${id_prefix}biodiesel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:refinery';
        recipe.input0 = recipe.inputs[0];
        recipe.input1 = recipe.inputs[1];
        recipe.catalyst = Ingredient.of(recipe.catalyst).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
