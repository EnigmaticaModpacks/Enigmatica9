ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/shapeless/';

    const recipes = [
        {
            output: '12x ars_nouveau:magebloom_fiber',
            inputs: ['ars_nouveau:magebloom', 'ars_nouveau:magebloom', 'ars_nouveau:magebloom'],
            id: 'ars_nouveau:magebloom_fiber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
