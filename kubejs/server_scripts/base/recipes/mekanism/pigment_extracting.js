ServerEvents.recipes((event) => {
    const recipes = [
        {
            input: "byg:oddity_cactus",
            output: {
                count: 768,
                pigment: "mekanism:white"
            },
            id: "mekanism:compat/byg/pigment_extracting/white"
        },
        {
            input: "byg:warped_cactus",
            output: {
                count: 768,
                pigment: "mekanism:cyan"
            },
            id: "mekanism:compat/byg/pigment_extracting/cyan"
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(
            {
                type: "mekanism:pigment_extracting",
                input: { ingredient: Item.of(recipe.input).toJson() },
                output: {
                    amount: recipe.output.count,
                    pigment: recipe.output.pigment
                }
            }
        ).id(recipe.id);
    });
});
