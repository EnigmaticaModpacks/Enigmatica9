ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/squeezer/';

    const recipes = [
        {
            result: Item.of('emendatusenigmatica:hop_graphite_dust').toJson(),
            input: { base_ingredient: { tag: 'forge:dusts/coal_coke' }, count: 8 },
            energy: 19200,
            id: `${id_prefix}hop_graphite`
        },
        {
            fluid: { amount: 180, fluid: 'pneumaticcraft:vegetable_oil' },
            input: [{ item: 'thermal:peanut' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            fluid: { amount: 120, fluid: 'pneumaticcraft:vegetable_oil' },
            input: [{ item: 'thermal:corn' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_medium_yield`
        },
        {
            fluid: { amount: 60, fluid: 'pneumaticcraft:vegetable_oil' },
            input: [
                { item: 'thermal:sadiroot' },
                { item: 'supplementaries:flax_seeds' },
                { item: 'immersiveengineering:seed' }
            ],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_low_yield`
        },
        {
            fluid: { amount: 100, fluid: 'the_bumblezone:honey_fluid_still' },
            input: [{ item: 'minecraft:honeycomb' }],
            energy: 1000,
            id: `${id_prefix}honey_from_honeycomb`
        },
        {
            fluid: { amount: 400, fluid: 'the_bumblezone:honey_fluid_still' },
            input: [{ item: 'minecraft:honeycomb_block' }],
            energy: 4000,
            id: `${id_prefix}honey_from_honeycomb_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:squeezer';

        event.custom(recipe).id(recipe.id);
    });
});
