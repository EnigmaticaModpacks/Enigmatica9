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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
