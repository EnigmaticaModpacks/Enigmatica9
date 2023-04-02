ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/kubejs/shaped/';
    const recipes = [
        {
            output: 'kubejs:magebloom_filter',
            pattern: ['ABA', 'BBB', 'ABA'],
            key: {
                A: '#forge:rods/treated_wood',
                B: 'ars_nouveau:magebloom_fiber'
            },
            id: `${id_prefix}magebloom_filter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
