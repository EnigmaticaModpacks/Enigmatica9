ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/energy_conversion/';
    const recipes = [
        {
            input: { ingredient: { tag: 'forge:storage_blocks/source' } },
            output: 90000,
            id: `${id_prefix}source_block`
        },
        {
            input: { ingredient: { tag: 'forge:gems/source' } },
            output: 10000,
            id: `${id_prefix}source`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:energy_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
