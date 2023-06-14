ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/twilightforest/shapeless/';

    const recipes = [
        {
            output: '32x twilightforest:fluffy_cloud',
            inputs: ['#forge:wool/white', '#forge:essences/air', '#forge:essences/manipulation'],
            id: `${id_prefix}fluffy_cloud`
        },
        {
            output: '32x twilightforest:wispy_cloud',
            inputs: ['twilightforest:fluffy_cloud', '#forge:essences/air'],
            id: `${id_prefix}wispy_cloud`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
