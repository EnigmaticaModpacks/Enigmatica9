ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/oxidizing/';
    const recipes = [
        {
            input: { ingredient: { tag: 'forge:essences/air' } },
            output: { gas: 'mekanism:oxygen', amount: 5000 },
            id: `${id_prefix}oxygen`
        },
        {
            input: { ingredient: { tag: 'forge:essences/water' } },
            output: { gas: 'mekanism:water_vapor', amount: 5000 },
            id: `${id_prefix}water_vapor`
        },
        {
            input: { ingredient: { tag: 'forge:gems/source' } },
            output: { gas: 'starbunclemania:source_gas', amount: 5000 },
            id: `${id_prefix}source_gas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:oxidizing';
        event.custom(recipe).id(recipe.id);
    });
});
