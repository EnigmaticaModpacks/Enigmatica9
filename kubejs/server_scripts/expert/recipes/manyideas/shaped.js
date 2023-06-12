ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/manyideas/shaped/';

    const recipes = [
        {
            output: 'manyideas_core:saw_iron',
            pattern: [' A ', 'AAA', ' A '],
            key: {
                A: '#forge:ingots/knightmetal'
            },
            id: `${id_prefix}saw_iron`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
