ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/fuel/compression/';

    var multiplier = 10;
    var data = {
        recipes: [
            { input: { fluid_tag: 'forge:ethene', amount: 1000 }, energy: 1800000, id: `${id_prefix}ethene` },
            { input: { fluid_tag: 'forge:lpg', amount: 1000 }, energy: 1800000, id: `${id_prefix}lpg` },
            { input: { fluid_tag: 'forge:gasoline', amount: 1000 }, energy: 1500000, id: `${id_prefix}gasoline` },
            { input: { fluid_tag: 'forge:kerosene', amount: 1000 }, energy: 1100000, id: `${id_prefix}kerosene` },
            { input: { fluid_tag: 'forge:biodiesel', amount: 1000 }, energy: 1000000, id: `${id_prefix}biodiesel` },
            { input: { fluid_tag: 'forge:diesel', amount: 1000 }, energy: 1000000, id: `${id_prefix}diesel` },
            { input: { fluid_tag: 'forge:bioethanol', amount: 1000 }, energy: 400000, id: `${id_prefix}bioethanol` },
            { input: { fluid_tag: 'forge:ethanol', amount: 1000 }, energy: 400000, id: `${id_prefix}ethanol` },
            { input: { fluid_tag: 'forge:biofuel', amount: 1000 }, energy: 64000, id: `${id_prefix}biofuel` },
            { input: { fluid_tag: 'forge:creosote', amount: 1000 }, energy: 20000, id: `${id_prefix}creosote` },

            { input: { fluid: 'thermal:refined_fuel', amount: 1000 }, energy: 1500000, id: `${id_prefix}refined_fuel` },
            { input: { fluid: 'thermal:tree_oil', amount: 1000 }, energy: 100000, id: `${id_prefix}tree_oil` }
        ]
    };
    data.recipes.forEach((recipe) => {
        recipe.type = 'thermal:compression_fuel';
        recipe.ingredient = recipe.input;
        recipe.energy = recipe.energy * multiplier;
        event.custom(recipe).id(recipe.id);
    });
});
