ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/toolbelt/shaped/';

    const recipes = [
        {
            output: 'toolbelt:belt',
            pattern: ['ABA', 'B B', 'BCB'],
            key: {
                A: '#forge:string',
                B: '#forge:leather',
                C: '#forge:nuggets/bronze'
            },
            id: 'toolbelt:belt'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
