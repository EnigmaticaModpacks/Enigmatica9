ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:cauldron',
            pattern: ['A A', 'A A', 'AAA'],
            key: {
                A: '#forge:plates/copper'
            },
            id: `minecraft:cauldron`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
