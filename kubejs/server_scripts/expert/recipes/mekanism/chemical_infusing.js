ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/chemical_infusing/';
    const recipes = [
        {
            output: { amount: 30, gas: 'mekanism:sulfur_trioxide' },
            leftInput: { amount: 10, gas: 'mekanism:oxygen' },
            rightInput: { amount: 20, gas: 'mekanism:sulfur_dioxide' },
            id: `mekanism:chemical_infusing/sulfur_trioxide`
        },
        {
            output: { amount: 20, gas: 'mekanism:sulfuric_acid' },
            leftInput: { amount: 10, gas: 'mekanism:sulfur_trioxide' },
            rightInput: { amount: 10, gas: 'mekanism:water_vapor' },
            id: `mekanism:chemical_infusing/sulfuric_acid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:chemical_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
