ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/nomadictents/shaped/';

    const recipes = [
        {
            output: 'nomadictents:tent_canvas',
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#forge:fabric_hemp'
            },
            id: 'nomadictents:tent_canvas'
        },
        {
            output: 'nomadictents:mallet',
            pattern: [' AB', ' CA', 'B  '],
            key: {
                A: '#forge:ingots/lead',
                B: '#forge:rods/wooden',
                C: 'nomadictents:tent_canvas'
            },
            id: 'nomadictents:mallet'
        },
        {
            output: 'nomadictents:indlu_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: 'farmersdelight:straw_bale',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:indlu_section'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
