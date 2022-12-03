ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/centrifuge/';

    const recipes = [
        {
            input: Ingredient.of('thermal:oil_red_sand'),
            outputs: [
                {
                    item: 'minecraft:red_sand',
                    chance: 0.75,
                    locked: true
                },
                { item: 'thermal:bitumen', chance: 1.5 },
                { item: 'thermal:tar', chance: 1.0 },
                { fluid: 'pneumaticcraft:oil', amount: 100 }
            ],
            energy: 20000,
            id: 'thermal:machines/centrifuge/centrifuge_oil_red_sand'
        },
        {
            input: Ingredient.of('thermal:oil_sand'),
            outputs: [
                {
                    item: 'minecraft:sand',
                    chance: 0.75,
                    locked: true
                },
                { item: 'thermal:bitumen', chance: 1.5 },
                { item: 'thermal:tar', chance: 1.0 },
                { fluid: 'pneumaticcraft:oil', amount: 100 }
            ],
            energy: 20000,
            id: 'thermal:machines/centrifuge/centrifuge_oil_sand'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        recipe.ingredient = recipe.input.toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
