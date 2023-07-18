ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/createaddition/rolling/';
    const recipes = [
        {
            output: 'createaddition:straw',
            input: 'industrialforegoing:plastic',
            id: `${id_prefix}straw_from_plastic_1`
        },
        {
            output: 'createaddition:straw',
            input: 'pneumaticcraft:plastic',
            id: `${id_prefix}straw_from_plastic_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
