ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/blasting/';
    const recipes = [
        {
            output: 'occultism:burnt_otherstone',
            input: 'occultism:otherstone',
            xp: 0.5,
            energy: 4000,
            id: `${id_prefix}burnt_otherstone`
        }
    ];

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
