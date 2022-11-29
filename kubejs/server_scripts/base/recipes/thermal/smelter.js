ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/smelter/';

    const recipes = [
        {
            inputs: [Ingredient.of('#forge:glass', 2), Ingredient.of('#forge:dusts/iron')],
            outputs: [Item.of('immersiveengineering:insulating_glass', 2)],
            energy: 3200,
            id: `${id_prefix}insulating_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';

        // "ingredients": [{ "tag": "forge:ingots/copper" }, { "item": "thermal:press_coin_die" }]
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        recipe.result = recipe.outputs.map((output) => output.toJson());

        event.custom(recipe).id(recipe.id);

        // event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
