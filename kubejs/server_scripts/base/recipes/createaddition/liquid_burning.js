ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/liquid_burning/';
    const recipes = [
        {
            input: { fluidTag: 'forge:biodiesel', amount: 1000 },
            burnTime: 1200,
            id: `${id_prefix}biodiesel`
        },
        {
            input: { fluidTag: 'forge:diesel', amount: 1000 },
            burnTime: 1200,
            id: `${id_prefix}diesel`
        },
        {
            input: { fluidTag: 'forge:gasoline', amount: 1000 },
            burnTime: 1800,
            id: `${id_prefix}gasoline`
        },
        {
            input: { fluidTag: 'forge:bioethanol', amount: 1000 },
            burnTime: 480,
            id: `${id_prefix}bioethanol`
        },
        {
            input: { fluid: 'thermal:tree_oil', amount: 1000 },
            burnTime: 120,
            id: `${id_prefix}tree_oil`
        },
        {
            input: { fluidTag: 'forge:biofuel', amount: 1000 },
            burnTime: 80,
            id: `${id_prefix}biofuel`
        },
        {
            input: { fluidTag: 'forge:lpg', amount: 1000 },
            burnTime: 2100,
            id: `${id_prefix}lpg`
        },
        {
            input: { fluidTag: 'forge:creosote', amount: 1000 },
            burnTime: 24,
            id: `${id_prefix}creosote`
        },
        {
            input: { fluidTag: 'forge:kerosene', amount: 1000 },
            burnTime: 1300,
            id: `${id_prefix}kerosene`
        },
        {
            input: { fluidTag: 'forge:ethene', amount: 1000 },
            burnTime: 2100,
            id: `${id_prefix}ethene`
        },
        {
            input: { fluidTag: 'forge:ethanol', amount: 1000 },
            burnTime: 480,
            id: `${id_prefix}ethanol`
        },
        {
            input: { fluid: 'thermal:refined_fuel', amount: 1000 },
            burnTime: 1800,
            id: `${id_prefix}refined_fuel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:liquid_burning';
        event.custom(recipe).id(recipe.id);
    });
});
