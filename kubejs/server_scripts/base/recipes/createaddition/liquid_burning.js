ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/liquid_burning/';

    const fe_conversion = 960; // get from createaddition-common.toml
    const generator_efficiency = 0.75; // get from createaddition-common.toml

    const energy_modifier = fe_conversion * generator_efficiency;

    const recipes = [];

    fuelProperties.forEach((prop) => {
        recipes.push({
            input: { fluidTag: prop.fuel, amount: 1000 },
            burnTime: Math.floor(prop.energy / energy_modifier),
            superheated: prop.superheated ? prop.superheated : false,
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:liquid_burning';
        event.custom(recipe).id(recipe.id);
    });
});
