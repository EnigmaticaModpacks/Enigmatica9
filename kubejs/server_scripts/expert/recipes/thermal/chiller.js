ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/chiller/';

    const recipes = [
        {
            result: [{ item: 'minecraft:nether_star', chance: 1.75 }],
            ingredients: [{ fluid: 'industrialforegoing:ether_gas', amount: 1000 }],
            energy: 32000,
            id: `${id_prefix}nether_star`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:chiller';
        event.custom(recipe).id(recipe.id);
    });
});
