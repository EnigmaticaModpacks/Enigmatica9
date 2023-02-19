ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/twilightforest/shaped/';

    const recipes = [
        {
            output: 'twilightforest:carminite_reactor',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'twilightforest:encased_towerwood',
                B: '#forge:gems/carminite',
                C: '#forge:storage_blocks/source'
            },
            id: 'twilightforest:carminite_reactor'
        },
        {
            output: '8x twilightforest:fiery_blood',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'hexerei:blood_bottle',
                B: 'ars_nouveau:fire_essence'
            },
            id: `${id_prefix}fiery_blood`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
