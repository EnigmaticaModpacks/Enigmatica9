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
        },
        {
            output: '4x thermal:earth_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'ars_nouveau:earth_essence',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}earth_charge`
        },
        {
            output: '4x thermal:lightning_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'ars_nouveau:air_essence',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}lightning_charge`
        },
        {
            output: '4x thermal:ice_charge',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'ars_nouveau:water_essence',
                B: 'ae2:tiny_tnt'
            },
            id: `${id_prefix}ice_charge`
        },
        {
            output: '2x thermal:machine_frame',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:rods/aluminum',
                B: '#forge:plates/aluminum'
            },
            id: `thermal:machine_frame`
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'immersiveengineering:wirecoil_electrum',
                C: 'thermal:machine_frame'
            },
            id: `thermal:energy_cell_frame`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
