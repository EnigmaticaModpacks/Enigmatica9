ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/powah/energizing/';
    const recipes = [
        // {
        //     inputs: [
        //         '#forge:dusts/fluorite',
        //         '#forge:yellow_cake_uranium',
        //         '#forge:dusts/fluorite',
        //         '#forge:yellow_cake_uranium',
        //         '#forge:dusts/fluorite',
        //         '#forge:yellow_cake_uranium'
        //     ],
        //     energy: '60000000',
        //     output: Item.of('powah:uraninite', 6),
        //     id: `${id_prefix}uraninite`
        // },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
