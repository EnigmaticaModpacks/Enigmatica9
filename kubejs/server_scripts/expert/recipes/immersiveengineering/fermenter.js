ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/fermenter/';

    const recipes = [
        {
            fluid: { amount: 60, fluid: 'pneumaticcraft:ethanol' },
            input: [{ item: 'minecraft:nether_wart' }],
            energy: 64,
            id: `${id_prefix}ethanol_from_nether_wart`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:fermenter';

        event.custom(recipe).id(recipe.id);
    });
});
