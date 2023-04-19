ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/infuse_type_from_item/';

    const recipes = [
        // {
        //     input: '#forge:dusts/glowstone',
        //     output: {
        //         amount: 10,
        //         infuse_type: "emendatusenigmatica:glowstone"
        //     },
        //     id: `${id_prefix}glowstone_infuse_type`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:infusion_conversion';
        recipe.input = { ingredient: Ingredient.of(recipe.input).toJson() };
        event.custom(recipe).id(recipe.id);
    });
});
