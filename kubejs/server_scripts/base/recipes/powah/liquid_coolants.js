ServerEvents.recipes((event) => {
    const recipes = [
        { fluid: 'minecraft:water', temp: 1 },
        { fluid: 'thermal:tree_oil', temp: 20 },
        { fluid: 'thermal:ender', temp: 30 },
        { fluid: 'industrialforegoing:ether_gas', temp: 50 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerCoolant(recipe.fluid, recipe.temp);
    });
});
