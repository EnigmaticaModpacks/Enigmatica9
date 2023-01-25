ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/reaction/';
    const recipes = [
        // {
        //     duration: 100,
        //     fluidInput: { tag: 'minecraft:lava', amount: 1 },
        //     gasInput: { gas: 'mekanism:oxygen', amount: 1 },
        //     itemInput: { ingredient: { tag: 'forge:ingots/pig_iron' }, amount: 1 },
        //     itemOutput: { item: 'minecraft:iron_ingot' },
        //     energyRequired: 4000,
        //     id: `${id_prefix}iron_ingot`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
