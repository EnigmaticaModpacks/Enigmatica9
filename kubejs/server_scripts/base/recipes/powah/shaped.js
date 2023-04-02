ServerEvents.recipes((event) => {
    const id_prefix = 'powah:base/shaped/';
    const recipes = [];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
