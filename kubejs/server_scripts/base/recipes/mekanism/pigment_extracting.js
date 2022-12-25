ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/pigment_extracting/';

    const recipes = [
        {
            input: 'byg:oddity_cactus',
            output: { amount: 768, pigment: 'mekanism:white' },
            id: 'mekanism:compat/byg/pigment_extracting/white'
        },
        {
            input: 'byg:warped_cactus',
            output: { amount: 768, pigment: 'mekanism:cyan' },
            id: 'mekanism:compat/byg/pigment_extracting/cyan'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:pigment_extracting';
        recipe.input = { ingredient: Ingredient.of(recipe.input).toJson() };
        event.custom(recipe).id(recipe.id);
    });
});
