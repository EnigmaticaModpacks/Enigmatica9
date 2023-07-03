ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/dissolution/';
    const recipes = [
        {
            output: { chemicalType: 'gas', gas: 'mekanism:hydrofluoric_acid', amount: 1000 },
            gasInput: { gas: 'mekanism:sulfuric_acid', amount: 1 },
            itemInput: { ingredient: { tag: 'forge:gems/fluorite' } },
            id: `${id_prefix}hydrofluoric_acid`
        },
        {
            output: { chemicalType: 'gas', gas: 'mekanism:hydrofluoric_acid', amount: 9000 },
            gasInput: { gas: 'mekanism:sulfuric_acid', amount: 9 },
            itemInput: { ingredient: { tag: 'forge:storage_blocks/fluorite' } },
            id: `${id_prefix}hydrofluoric_acid_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:dissolution';
        event.custom(recipe).id(recipe.id);
    });
});
