ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/occultism/shaped/';

    const recipes = [
        {
            output: 'occultism:sacrificial_bowl',
            pattern: ['A A', 'AAA'],
            key: {
                A: 'pneumaticcraft:compressed_stone'
            },
            id: `occultism:crafting/sacrificial_bowl`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
