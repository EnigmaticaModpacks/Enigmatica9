ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';

    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';

        // "ingredients": [{ "tag": "forge:ingots/copper" }, { "item": "thermal:press_coin_die" }]
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        recipe.result = recipe.outputs.map((output) => output.toJson());

        event.custom(recipe).id(recipe.id);

        // event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
