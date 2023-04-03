ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/starbunclemania/shaped/';

    const recipes = [
        {
            output: 'starbunclemania:fluid_jar',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:essences/water',
                B: 'ars_nouveau:mob_jar',
                C: 'ars_nouveau:blue_archwood_wood'
            },
            id: 'starbunclemania:fluid_jar'
        },
        {
            output: 'starbunclemania:fluid_sourcelink',
            pattern: ['A A', 'CBC', ' D '],
            key: {
                A: '#forge:ingots/electrum',
                B: '#forge:gems/source',
                C: '#forge:nuggets/bronze',
                D: 'starbunclemania:fluid_jar'
            },
            id: 'starbunclemania:fluid_sourcelink'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
