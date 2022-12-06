ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer_catalyst/';

    const recipes = [
        {
            ingredient: [{ item: 'ars_nouveau:earth_essence' }],
            primary_mod: 2.25,
            secondary_mod: 3.5,
            energy_mod: 2.25,
            min_chance: 0.25,
            use_chance: 0.25,
            id: `${id_prefix}earth_essence`
        },
        {
            ingredient: [{ item: 'ars_nouveau:water_essence' }],
            primary_mod: 0.6,
            secondary_mod: 10.5,
            energy_mod: 0.5,
            min_chance: 0.25,
            use_chance: 0.25,
            id: `${id_prefix}water_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer_catalyst';
        event.custom(recipe).id(recipe.id);
    });
});
