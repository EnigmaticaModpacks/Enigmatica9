ServerEvents.recipes((event) => {
    const recipes = [
        { fluid: 'minecraft:water', temp: 1 }
        // Negative temps aren't currently working correctly.
        // { fluid: 'thermal:tree_oil', temp: -10 },
        // { fluid: 'thermal:ender', temp: -20 },
        // { fluid: 'industrialforegoing:ether_gas', temp: -30 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerCoolant(recipe.fluid, recipe.temp);
    });
});
