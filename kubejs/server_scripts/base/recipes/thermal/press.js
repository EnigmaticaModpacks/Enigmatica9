ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';

    const recipes = [
        {
            inputs: ['minecraft:dandelion'],
            outputs: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            energy: 400,
            id: 'thermal:machines/press/press_dandelion_to_latex'
        },
        {
            inputs: ['minecraft:vine'],
            outputs: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            energy: 400,
            id: 'thermal:machines/press/press_vine_to_latex'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
