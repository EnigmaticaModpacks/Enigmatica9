ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/fuel/compression/';
    const recipes = [];

    fuelProperties.normal.forEach((prop) => {
        recipes.push({
            ingredient: { fluid_tag: prop.fuel, amount: 1000 },
            energy: prop.energy,
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:compression_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
