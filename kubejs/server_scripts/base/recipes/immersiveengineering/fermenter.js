ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/fermenter/';

    const recipes = [
        {
            fluid: { amount: 250, fluid: 'pneumaticcraft:ethanol' },
            result: { item: 'minecraft:glass_bottle' },
            input: { item: 'minecraft:honey_bottle' },
            energy: 6400,
            id: `${id_prefix}ethanol_from_honey`
        },
        {
            fluid: { amount: 120, fluid: 'pneumaticcraft:ethanol' },
            input: [{ item: 'minecraft:glow_berries' }, { item: 'minecraft:melon' }],
            energy: 6400,
            id: `${id_prefix}ethanol_high_yield`
        },
        {
            fluid: { amount: 60, fluid: 'pneumaticcraft:ethanol' },
            input: [
                { item: 'minecraft:apple' },
                { item: 'minecraft:sugar_cane' },
                { item: 'minecraft:sweet_berries' },
                { item: 'blue_skies:brewberry' },
                { item: 'blue_skies:pink_brewberry' },
                { item: 'blue_skies:black_brewberry' }
            ],
            energy: 6400,
            id: `${id_prefix}ethanol_medium_yield`
        },
        {
            fluid: { amount: 40, fluid: 'pneumaticcraft:ethanol' },
            input: [
                { item: 'minecraft:beetroot' },
                { item: 'minecraft:potato' },
                { item: 'thermal:strawberry' },
                { item: 'byg:blueberries' },
                { item: 'byg:nightshade_berries' },
                { item: 'byg:crimson_berries' }
            ],
            energy: 6400,
            id: `${id_prefix}ethanol_low_yield`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:fermenter';

        event.custom(recipe).id(recipe.id);
    });
});
