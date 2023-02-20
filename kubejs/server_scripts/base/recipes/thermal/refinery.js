ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/refinery/';

    const recipes = [
        {
            ingredient: { fluid: 'industrialforegoing:latex', amount: 900 },
            result: [
                { fluid: 'minecraft:water', amount: 100 },
                { item: 'thermal:rubber', chance: 1.0 }
            ],
            energy: 6000,
            id: `${id_prefix}rubber`
        },
        {
            ingredient: { fluid: 'pneumaticcraft:oil', amount: 100 },
            result: [
                { fluid: 'pneumaticcraft:diesel', amount: 50 },
                { fluid: 'pneumaticcraft:gasoline', amount: 30 }
            ],
            energy: 7000,
            id: `${id_prefix}oil_to_diesel_and_lpg`
        },
        {
            ingredient: { fluid: 'pneumaticcraft:diesel', amount: 100 },
            result: [{ fluid: 'pneumaticcraft:kerosene', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}diesel_to_kerosene`
        },
        {
            ingredient: { fluid: 'pneumaticcraft:kerosene', amount: 100 },
            result: [{ fluid: 'pneumaticcraft:gasoline', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}kerosene_to_gasoline`
        },
        {
            ingredient: { fluid: 'pneumaticcraft:gasoline', amount: 100 },
            result: [{ fluid: 'pneumaticcraft:lpg', amount: 80 }],
            energy: 7000,
            id: `${id_prefix}gasoline_to_lpg`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
