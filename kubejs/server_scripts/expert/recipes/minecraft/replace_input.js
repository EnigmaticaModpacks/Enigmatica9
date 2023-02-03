ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { output: 'minecraft:hopper' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
