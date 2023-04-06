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
                { item: 'emendatusenigmatica:bitumen_gem', chance: 1.5 },
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
                { item: 'emendatusenigmatica:bitumen_gem', chance: 1.5 },
                { item: 'thermal:tar', chance: 1.0 },
                { fluid: 'pneumaticcraft:oil', amount: 100 }
            ],
            energy: 20000,
            id: 'thermal:machines/centrifuge/centrifuge_oil_sand'
        },
        {
            input: Ingredient.of('#forge:bitumen'),
            outputs: [
                { item: 'thermal:tar', chance: 0.5 },
                { fluid: 'pneumaticcraft:oil', amount: 50 }
            ],
            energy: 20000,
            id: `${id_prefix}oil_from_bitumen`
        },
        {
            input: Ingredient.of('#forge:fuels/bio'),
            outputs: [
                { item: 'thermal:compost', chance: 0.5 },
                { fluid: 'mekanismgenerators:bioethanol', amount: 200 }
            ],
            energy: 1600,
            id: `${id_prefix}bioethanol`
        },
        {
            input: Ingredient.of('#forge:dusts/redstone'),
            outputs: [
                { item: 'emendatusenigmatica:cinnabar_dust', chance: 1 },
                { fluid: 'thermal:redstone', amount: 50 }
            ],
            energy: 1600,
            id: `${id_prefix}cinnabar_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        recipe.ingredient = recipe.input.toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
