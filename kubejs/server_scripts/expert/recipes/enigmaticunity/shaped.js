ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/enigmaticunity/shaped/';
    const recipes = [
        {
            output: 'enigmaticunity:dim_source_producer',
            pattern: ['AAA', 'ABA'],
            key: {
                A: 'blue_skies:crystal_glass_pane',
                B: `enigmaticunity:dim_source_generator`
            },
            id: `enigmaticunity:dim_source_producer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
