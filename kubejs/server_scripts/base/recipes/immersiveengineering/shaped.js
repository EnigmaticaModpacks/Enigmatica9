ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/shaped/';

    const recipes = [
        {
            output: '4x immersiveengineering:stick_treated',
            pattern: ['A', 'A'],
            key: {
                A: '#forge:treated_wood'
            },
            id: `${id_prefix}stick_treated`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
