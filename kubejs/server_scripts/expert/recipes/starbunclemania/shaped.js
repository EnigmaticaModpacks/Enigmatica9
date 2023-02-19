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
                A: 'ars_nouveau:water_essence',
                B: 'ars_nouveau:mob_jar',
                C: 'ars_nouveau:blue_archwood_wood'
            },
            id: 'starbunclemania:fluid_jar'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
