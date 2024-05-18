ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:expert/ars_scalaes/shaped/';

    const recipes = [
        {
            output: '6x ars_scalaes:smooth_sourcestone_wall',
            pattern: ['AAA', 'AAA'],
            key: {
                A: 'ars_nouveau:smooth_sourcestone'
            },
            id: `${id_prefix}smooth_sourcestone_wall`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
