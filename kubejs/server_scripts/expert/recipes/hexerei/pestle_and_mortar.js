ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/hexerei/pestle_and_mortar/';

    const recipes = [
        /*
        {
            inputs: [
                Item.of('hexerei:belladonna_flowers'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:belladonna_berries'),
                Item.of('hexerei:sage')
            ],
            output: Item.of('hexerei:mindful_trance_blend'),
            grindingTime: 300
        }
        */
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => input.toJson());
        recipe.output = recipe.output.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
