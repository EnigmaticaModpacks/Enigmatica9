ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/fuel_quality/';
    const recipes = [];

    fuelProperties.expert.forEach((prop) => {
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
