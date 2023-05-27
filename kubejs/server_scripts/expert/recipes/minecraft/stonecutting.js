ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/stonecutting/';

    const recipes = [
        {
            output: '2x create:brass_ladder',
            input: '#forge:plates/gold',
            id: `${id_prefix}brass_ladder`
        }
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
