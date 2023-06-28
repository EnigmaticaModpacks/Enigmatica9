ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/generator_fuel/';
    const dieselGen_output = 16384; // get from immersiveengineering-server.toml
    const recipes = [];

    fuelProperties.normal.forEach((prop) => {
        recipes.push({
            fluidTag: prop.fuel,
            burnTime: Math.floor(prop.energy / dieselGen_output),
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:generator_fuel';

        event.custom(recipe).id(recipe.id);
    });
});
