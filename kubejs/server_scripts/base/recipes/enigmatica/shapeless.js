ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shapeless/';

    const recipes = [];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
