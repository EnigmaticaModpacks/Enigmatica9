ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/enigmaticunity/shaped/';
    const recipes = [
        {
            output: 'enigmaticunity:dim_source_producer',
            pattern: ['A', 'B'],
            key: {
                A: 'ae2:quartz_glass',
                B: `enigmaticunity:dim_source_generator`
            },
            id: `${id_prefix}dim_source_producer`
        },
        {
            output: 'enigmaticunity:bright_source_producer',
            pattern: ['A', 'B'],
            key: {
                A: 'ae2:quartz_glass',
                B: `enigmaticunity:bright_source_generator`
            },
            id: `${id_prefix}bright_source_producer`
        },
        {
            output: 'enigmaticunity:iridescent_source_producer',
            pattern: ['A', 'B'],
            key: {
                A: 'ae2:quartz_glass',
                B: `enigmaticunity:iridescent_source_generator`
            },
            id: `${id_prefix}iridescent_source_producer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
