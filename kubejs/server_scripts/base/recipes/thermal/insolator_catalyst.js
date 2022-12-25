ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/insolator_catalyst/';

    const recipes = [
        {
            ingredient: [
                { item: 'industrialforegoing:fertilizer' },
                { item: 'immersiveengineering:fertilizer' },
                { item: 'thermal:compost' }
            ],
            primary_mod: 1.75,
            secondary_mod: 1.25,
            energy_mod: 0.6,
            min_chance: 0.2,
            use_chance: 0.25,
            id: 'thermal:machines/insolator/insolator_catalyst_compost'
        },
        {
            ingredient: [{ item: 'ars_nouveau:water_essence' }],
            primary_mod: 4.0,
            secondary_mod: 4.0,
            energy_mod: 0.5,
            min_chance: 0.25,
            use_chance: 0.25,
            id: `${id_prefix}water_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:insolator_catalyst';
        event.custom(recipe).id(recipe.id);
    });
});
