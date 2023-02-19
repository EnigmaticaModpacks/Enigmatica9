ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/twilightforest/shapeless/';

    const recipes = [
        {
            output: 'twilightforest:firefly_jar',
            inputs: ['thermal:jar', 'twilightforest:firefly'],
            id: 'twilightforest:firefly_jar'
        },
        {
            output: 'twilightforest:cicada_jar',
            inputs: ['thermal:jar', 'twilightforest:cicada'],
            id: 'twilightforest:cicada_jar'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
