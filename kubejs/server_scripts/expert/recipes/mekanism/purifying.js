ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/purifying/';
    const recipes = [
        {
            itemInput: { ingredient: { tag: 'forge:ingots/pig_iron' } },
            chemicalInput: { gas: 'mekanism:oxygen', amount: 1 },
            output: { item: 'minecraft:iron_ingot', count: 1 },
            id: `${id_prefix}iron_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:purifying';
        event.custom(recipe).id(recipe.id);
    });
});
