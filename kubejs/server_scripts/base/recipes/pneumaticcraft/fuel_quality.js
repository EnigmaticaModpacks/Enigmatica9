ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/fuel_quality/';

    const recipes = [];

    fuelProperties.forEach((prop) => {
        recipes.push({
            fluid:
                prop.fuel.charAt(0) == '#'
                    ? { type: 'pneumaticcraft:fluid', amount: 1000, tag: prop.fuel.slice(1) }
                    : { type: 'pneumaticcraft:fluid', amount: 1000, fluid: prop.fuel },
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
