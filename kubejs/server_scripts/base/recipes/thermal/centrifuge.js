ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/centrifuge/';

    const recipes = [
        {
            ingredient: { item: 'thermal:oil_red_sand' },
            result: [
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
            ingredient: { item: 'thermal:oil_sand' },
            result: [
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
            ingredient: { tag: 'forge:bitumen' },
            result: [
                { item: 'thermal:tar', chance: 0.5 },
                { fluid: 'pneumaticcraft:oil', amount: 50 }
            ],
            energy: 20000,
            id: `${id_prefix}oil_from_bitumen`
        },
        {
            ingredient: { tag: 'forge:fuels/bio' },
            result: [
                { item: 'thermal:compost', chance: 0.5 },
                { fluid: 'mekanismgenerators:bioethanol', amount: 200 }
            ],
            energy: 1600,
            id: `${id_prefix}bioethanol`
        },
        {
            ingredient: { tag: 'forge:dusts/redstone' },
            result: [
                { item: 'emendatusenigmatica:cinnabar_dust', chance: 1 },
                { fluid: 'thermal:redstone', amount: 50 }
            ],
            energy: 1600,
            id: `${id_prefix}cinnabar_dust`
        },
        {
            ingredient: { item: 'minecraft:honey_bottle' },
            result: [{ item: 'minecraft:glass_bottle' }, { fluid: 'the_bumblezone:honey_fluid_still', amount: 250 }],
            energy: 400,
            id: `thermal:machines/centrifuge/centrifuge_honey_bottle`
        },
        {
            ingredient: { item: 'minecraft:honeycomb' },
            result: [{ fluid: 'the_bumblezone:honey_fluid_still', amount: 100 }],
            energy: 1000,
            id: `thermal:machines/centrifuge/centrifuge_honeycomb`
        },
        {
            ingredient: { item: 'minecraft:honeycomb_block' },
            result: [{ fluid: 'the_bumblezone:honey_fluid_still', amount: 400 }],
            energy: 4000,
            id: `${id_prefix}honey_from_honeycomb_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
