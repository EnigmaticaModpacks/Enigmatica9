ServerEvents.recipes((event) => {
    const recipes = [
        {
            replaceTarget: {},
            toReplace: 'industrialforegoing:dryrubber',
            replaceWith: 'thermal:rubber'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
