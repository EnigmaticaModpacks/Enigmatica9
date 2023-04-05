ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/twilightforest/shaped/';

    const recipes = [
        {
            output: '8x twilightforest:fiery_blood',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'hexerei:blood_bottle',
                B: '#forge:essences/fire'
            },
            id: `${id_prefix}fiery_blood`
        },
        {
            output: 'twilightforest:moon_dial',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:nuggets/gold',
                C: '#forge:gems/moonstone',
                D: '#forge:dusts/redstone'
            },
            id: `${id_prefix}moon_dial`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
