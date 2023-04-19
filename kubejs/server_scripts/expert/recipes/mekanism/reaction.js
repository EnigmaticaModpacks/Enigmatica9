ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/reaction/';
    const recipes = [
        {
            gasOutput: { gas: 'mekanism:polonium', amount: 1000 },
            itemInput: { ingredient: { item: 'minecraft:echo_shard' }, amount: 4 },
            gasInput: { gas: 'mekanism:hydrofluoric_acid', amount: 100 },
            fluidInput: { tag: 'forge:magicite', amount: 250 },
            energyRequired: 10000,
            duration: 1200,
            id: `${id_prefix}polonium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
