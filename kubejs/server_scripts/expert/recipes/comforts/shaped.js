ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/comforts/shaped/';

    const recipes = [
        {
            output: '2x comforts:rope_and_nail',
            pattern: ['AA ', 'AB ', '  A'],
            key: {
                A: '#forge:string',
                B: '#forge:ingots/knightmetal'
            },
            id: 'comforts:rope_and_nail'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
