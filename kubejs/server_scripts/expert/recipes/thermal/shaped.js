ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/shaped/';

    const recipes = [
        {
            output: '8x thermal:jar',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: '#forge:glass/colorless'
            },
            id: `${id_prefix}jar`
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'ae2:quartz_glass',
                C: 'thermal:cured_rubber'
            },
            id: `${id_prefix}jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
