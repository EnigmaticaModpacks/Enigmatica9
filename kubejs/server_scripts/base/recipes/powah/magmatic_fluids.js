ServerEvents.recipes((event) => {
    const recipes = [
        { fluid: 'minecraft:lava', temp: 5000 },
        { fluid: 'thermal:glowstone', temp: 24000 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerMagmaticFluid(recipe.fluid, recipe.temp);
    });
});
