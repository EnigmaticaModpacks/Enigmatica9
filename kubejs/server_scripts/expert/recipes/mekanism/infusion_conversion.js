ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/infusion_conversion/';
    const recipes = [];

    const essences = ['air', 'earth', 'water', 'fire'];

    essences.forEach((essence) => {
        recipes.push({
            input: { ingredient: { tag: `forge:essences/${essence}` } },
            output: { amount: 10, infuse_type: `emendatusenigmatica:${essence}_essence` },
            id: `${id_prefix}${essence}_essence`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:infusion_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
