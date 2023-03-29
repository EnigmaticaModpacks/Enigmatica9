ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/shaped/';

    const recipes = [
        {
            output: '8x mekanism:teleporter_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/infused_iron',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'mekanism:teleporter_frame'
        },
        {
            output: 'mekanism:teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'thermal:energy_cell_frame',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:teleporter'
        },
        {
            output: 'mekanism:portable_teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'supplementaries:crystal_display',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:portable_teleporter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
