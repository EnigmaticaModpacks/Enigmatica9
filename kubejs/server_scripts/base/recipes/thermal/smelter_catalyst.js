ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/smelter_catalyst/';

    const recipes = [
        {
            ingredient: [{ item: 'ars_nouveau:fire_essence' }],
            primary_mod: 2.5,
            secondary_mod: 4.5,
            energy_mod: 3.5,
            min_chance: 0.75,
            use_chance: 0.75,
            id: `${id_prefix}fire_essence`
        },
        {
            ingredient: [{ item: 'ars_nouveau:air_essence' }],
            primary_mod: 6.0,
            secondary_mod: 0.001,
            energy_mod: 4.5,
            min_chance: 0.85,
            use_chance: 0.85,
            id: `${id_prefix}air_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter_catalyst';
        event.custom(recipe).id(recipe.id);
    });
});
