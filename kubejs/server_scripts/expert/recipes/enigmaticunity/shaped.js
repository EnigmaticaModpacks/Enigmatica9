ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/enigmaticunity/shaped/';
    const recipes = [
        {
            output: 'enigmaticunity:dim_source_generator',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:gems/fluix',
                B: 'naturesaura:infused_iron',
                C: 'ars_nouveau:blue_archwood_log',
                D: 'powah:capacitor_basic_large'
            },
            id: `enigmaticunity:dim_source_generator`
        },
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
