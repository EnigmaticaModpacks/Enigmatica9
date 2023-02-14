ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/shaped/';

    const recipes = [
        {
            output: '8x thermal:jar',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: '#forge:glass/colorless'
            },
            id: `${id_prefix}jar`
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'thermal:cured_rubber',
                B: 'ae2:quartz_glass',
                C: '#forge:gears/bronze'
            },
            id: 'thermal:fluid_cell_frame'
        },
        {
            output: 'thermal:device_tree_extractor',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'supplementaries:faucet',
                B: 'ars_nouveau:earth_essence',
                C: 'create:andesite_casing',
                D: 'thermal:jar'
            },
            id: 'thermal:device_tree_extractor'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
