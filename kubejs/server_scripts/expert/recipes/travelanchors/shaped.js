ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/travelanchors/shaped/';

    const recipes = [
        {
            output: '4x travelanchors:travel_anchor',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/lead',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'travelanchors:travel_anchor'
        },
        {
            output: 'travelanchors:travel_staff',
            pattern: [' BC', ' A ', 'A  '],
            key: {
                A: '#forge:rods/aluminum',
                B: 'ars_nouveau:ritual_warping',
                C: '#forge:gems/emerald'
            },
            id: 'travelanchors:travel_staff'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
