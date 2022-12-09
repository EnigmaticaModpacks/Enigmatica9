ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/squeezer/';

    const recipes = [
        {
            result: Item.of('immersiveengineering:dust_hop_graphite').toJson(),
            input: { base_ingredient: { tag: 'forge:dusts/coal_coke' }, count: 8 },
            energy: 19200,
            id: `${id_prefix}hop_graphite`
        },
        {
            fluid: { amount: 180, fluid: 'pneumaticcraft:vegetable_oil' },
            input: [{ item: 'thermal:peanut' }, { item: 'blue_skies:solnut' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            fluid: { amount: 120, fluid: 'pneumaticcraft:vegetable_oil' },
            input: [{ item: 'thermal:corn' }, { item: 'blue_skies:fiery_beans' }],
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:squeezer';

        event.custom(recipe).id(recipe.id);
    });
});
