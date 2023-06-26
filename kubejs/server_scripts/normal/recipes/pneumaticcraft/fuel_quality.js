ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/fuel_quality/';
    const recipes = [];

    fuelProperties.normal.forEach((prop) => {
        recipes.push({
            fluid: { type: 'pneumaticcraft:fluid', amount: 1000, tag: prop.fuel },
            air_per_bucket: prop.energy,
            burn_rate: prop.rate,
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fuel_quality';
        event.custom(recipe).id(recipe.id);
    });
});
