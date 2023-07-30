ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/byg/shaped/';

    const recipes = [
        {
            output: 'byg:therium_lamp',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:nuggets/iron',
                B: '#forge:storage_blocks/therium'
            },
            id: 'byg:therium_lamp'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
