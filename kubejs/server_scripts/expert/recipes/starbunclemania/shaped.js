ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/starbunclemania/shaped/';

    const recipes = [
        {
            output: 'starbunclemania:fluid_jar',
            pattern: ['CBC', ' C '],
            key: {
                B: 'ars_nouveau:mob_jar',
                C: 'ars_nouveau:blue_archwood_wood'
            },
            id: `${id_prefix}fluid_jar`
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
            id: `${id_prefix}fluid_sourcelink`
        },
        {
            output: 'starbunclemania:star_bin',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:nuggets/tin',
                B: '#forge:plates/tin',
                C: '#forge:storage_blocks/knightmetal'
            },
            id: `${id_prefix}star_bin`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
