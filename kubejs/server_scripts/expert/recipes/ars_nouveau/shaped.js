ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shaped/';

    const recipes = [
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:nuggets/bronze',
                B: '#forge:gems/source',
                C: '#forge:ingots/electrum',
                D: 'ars_nouveau:potion_jar'
            },
            id: `ars_nouveau:alchemical_sourcelink`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
