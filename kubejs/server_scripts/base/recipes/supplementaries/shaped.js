ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/supplementaries/shaped/';

    const recipes = [
        {
            output: '2x supplementaries:timber_frame',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#forge:rods/wooden'
            },
            id: 'supplementaries:timber_frame'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
