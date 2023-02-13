ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/shapeless/';

    const recipes = [
        {
            output: 'supplementaries:jar',
            inputs: ['thermal:jar'],
            id: `${id_prefix}jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
