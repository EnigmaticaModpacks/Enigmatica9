ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/liquid_burning/';

    const recipes = [];

    fuelProperties.forEach((prop) => {
        recipes.push({
            input:
                prop.fuel.charAt(0) == '#'
                    ? { fluidTag: prop.fuel.slice(1), amount: 1000 }
                    : { fluid: prop.fuel, amount: 1000 },
            energy: prop.energy,
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:liquid_burning';
        recipe.burnTime = Math.floor(recipe.energy / 720);
        event.custom(recipe).id(recipe.id);
    });
});
