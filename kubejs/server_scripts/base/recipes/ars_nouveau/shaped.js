ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:expert/ars_nouveau/shaped/';

    const recipes = [
        {
            output: '4x ars_nouveau:sourcestone_stairs',
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}sourcestone_stairs`
        },
        {
            output: '6x ars_nouveau:sourcestone_slab',
            pattern: ['AAA'],
            key: {
                A: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}sourcestone_slab`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
