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
        },
        {
            inputs: [Ingredient.of(['thermal:peanut', 'blue_skies:solnut'])],
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 180 }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            inputs: [Ingredient.of(['thermal:corn', 'blue_skies:fiery_beans'])],
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 120 }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_medium_yield`
        },
        {
            inputs: [Ingredient.of(['thermal:sadiroot', 'supplementaries:flax_seeds', 'immersiveengineering:seed'])],
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 60 }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_low_yield`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
