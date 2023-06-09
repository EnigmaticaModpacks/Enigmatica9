ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/createaddition/rolling/';
    const recipes = [
        {
            output: 'createaddition:straw',
            input: 'pneumaticcraft:plastic',
            id: `${id_prefix}straw_from_plastic`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
