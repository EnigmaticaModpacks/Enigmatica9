ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/constructionwand/shaped/';

    const recipes = [
        {
            output: 'constructionwand:infinity_wand',
            pattern: ['  B', ' A ', 'A  '],
            key: {
                A: 'naturesaura:ancient_stick',
                B: '#forge:gems/fluix'
            },
            id: 'constructionwand:infinity_wand'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
