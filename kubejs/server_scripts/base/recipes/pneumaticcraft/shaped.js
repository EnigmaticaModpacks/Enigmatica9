ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/shaped/';

    const recipes = [
        {
            output: 'pneumaticcraft:thermostat_module',
            pattern: [' A ', ' B ', 'CDC'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: 'pneumaticcraft:heat_pipe',
                C: 'pneumaticcraft:pressure_tube',
                D: '#forge:dusts/redstone'
            },
            id: `pneumaticcraft:thermostat_module`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
