ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shaped/';

    const recipes = [
        {
            output: '2x industrialforegoing:machine_frame_simple',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'ae2:sky_stone_block',
                B: '#forge:ingots/compressed_iron',
                C: 'powah:energy_cable_niotic',
                D: 'kubejs:energetic_transference_matrix'
            },
            id: `${id_prefix}machine_frame_simple`
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'powah:energizing_rod_niotic',
                B: 'mekanism:teleportation_core',
                C: '#industrialforegoing:machine_frame/simple'
            },
            id: 'industrialforegoing:laser_drill'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
