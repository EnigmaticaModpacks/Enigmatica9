ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/rftools/shaped/';
    const recipes = [
        {
            output: 'rftoolsbase:filter_module',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:dyes/lime',
                B: '#forge:rods/wooden',
                C: '#forge:fabrics/woven'
            },
            id: `${id_prefix}filter_module`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
