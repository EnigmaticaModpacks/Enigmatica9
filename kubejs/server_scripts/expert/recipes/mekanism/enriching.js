ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/enriching/';
    const recipes = [];

    const essences = ['air', 'earth', 'water', 'fire'];

    essences.forEach((essence) => {
        recipes.push({
            output: { item: `emendatusenigmatica:enriched_${essence}_essence` },
            input: { ingredient: { tag: `forge:essences/${essence}` }, amount: 1 },
            id: `${id_prefix}enriched_${essence}_essence`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        event.custom(recipe).id(recipe.id);
    });
});
