ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/refinery/';

    const recipes = [
        {
            result: { fluid: 'pneumaticcraft:biodiesel', amount: 16 },
            inputs: [
                { tag: 'forge:plantoil', amount: 8 },
                { tag: 'forge:ethanol', amount: 8 }
            ],
            catalyst: '#forge:dusts/saltpeter',
            energy: 80,
            id: 'immersiveengineering:refinery/biodiesel'
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
