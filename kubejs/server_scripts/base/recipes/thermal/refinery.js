ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/refinery/';

    const recipes = [
        {
            input: { fluid: 'industrialforegoing:latex', amount: 900 },
            outputs: [
                { fluid: 'minecraft:water', amount: 100 },
                { item: 'thermal:rubber', chance: 1.0 }
            ],
            energy: 6000,
            id: `${id_prefix}rubber`
        },
        {
            input: { fluid: 'pneumaticcraft:oil', amount: 100 },
            outputs: [
                { fluid: 'pneumaticcraft:diesel', amount: 50 },
                { fluid: 'pneumaticcraft:gasoline', amount: 30 }
            ],
            energy: 7000,
            id: `${id_prefix}oil_to_diesel_and_lpg`
        },
        {
            input: { fluid: 'pneumaticcraft:diesel', amount: 100 },
            outputs: [{ fluid: 'pneumaticcraft:kerosene', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}diesel_to_kerosene`
        },
        {
            input: { fluid: 'pneumaticcraft:kerosene', amount: 100 },
            outputs: [{ fluid: 'pneumaticcraft:gasoline', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}kerosene_to_gasoline`
        },
        {
            input: { fluid: 'pneumaticcraft:gasoline', amount: 100 },
            outputs: [{ fluid: 'pneumaticcraft:lpg', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}gasoline_to_lpg`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:refinery';
        recipe.ingredient = recipe.input;
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
