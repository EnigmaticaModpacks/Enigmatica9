ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/starbunclemania/shapeless/';

    const recipes = [
        {
            output: 'starbunclemania:star_bucket',
            inputs: ['hexerei:small_satchel', 'starbunclemania:fluid_jar'],
            id: `${id_prefix}star_bucket`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
