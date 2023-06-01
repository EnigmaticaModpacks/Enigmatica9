ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/nucleosynthesizing/';
    const recipes = [
        {
            output: { item: 'emendatusenigmatica:brass_ingot' },
            gasInput: { gas: 'mekanism:antimatter', amount: 200 },
            itemInput: { ingredient: { tag: 'forge:ingots/copper' } },
            duration: 500,
            id: `${id_prefix}brass_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:brass_block' },
            gasInput: { gas: 'mekanism:antimatter', amount: 200 * 9 },
            itemInput: { ingredient: { tag: 'forge:storage_blocks/copper' } },
            duration: 500 * 8,
            id: `${id_prefix}brass_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
