ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/comforts/shapeless/';

    const recipes = [
        {
            output: 'comforts:rope_and_nail',
            inputs: ['#forge:rope', '#forge:ingots/knightmetal'],
            id: 'comforts:rope_and_nail_shapeless'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
