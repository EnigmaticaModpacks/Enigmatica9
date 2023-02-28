ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/spirit_fire/';
    const recipes = [
        {
            result: { item: 'occultism:otherstone' },
            ingredient: { item: 'blue_skies:lunar_stone' },
            id: 'occultism:spirit_fire/otherstone'
        },
        {
            result: { item: 'occultism:spirit_attuned_gem' },
            ingredient: { tag: 'forge:gems/moonstone' },
            id: 'occultism:spirit_fire/spirit_attuned_gem'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:spirit_fire';
        event.custom(recipe).id(recipe.id);
    });
});
