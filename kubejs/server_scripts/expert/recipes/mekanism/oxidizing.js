ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/oxidizing/';
    const recipes = [
        {
            output: { gas: 'mekanism:oxygen', amount: 5000 },
            input: { ingredient: { tag: 'forge:essences/air' } },
            id: `${id_prefix}oxygen`
        },
        {
            output: { gas: 'mekanism:water_vapor', amount: 5000 },
            input: { ingredient: { tag: 'forge:essences/water' } },
            id: `${id_prefix}water_vapor`
        },
        {
            output: { gas: 'starbunclemania:source_gas', amount: 5000 },
            input: { ingredient: { tag: 'forge:gems/source' } },
            id: `${id_prefix}source_gas`
        },
        {
            output: { gas: 'mekanism:sulfur_dioxide', amount: 1000 },
            input: { ingredient: { tag: 'forge:dusts/sulfur' } },
            id: `mekanism:oxidizing/sulfur_dioxide`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:oxidizing';
        event.custom(recipe).id(recipe.id);
    });
});
