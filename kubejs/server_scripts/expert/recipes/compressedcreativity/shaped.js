ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/compressedcreativity/shaped/';

    const recipes = [
        {
            output: 'compressedcreativity:compressed_air_engine',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: 'create:shaft',
                C: 'compressedcreativity:engine_rotor',
                D: '#forge:plates/bronze',
                E: 'create:gearbox'
            },
            id: `compressedcreativity:crafting/compressed_air_engine`
        },
        {
            output: '4x compressedcreativity:mesh_empty',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:rods/ancient',
                B: 'pneumaticcraft:compressed_stone'
            },
            id: `compressedcreativity:crafting/mesh_empty`
        },
        {
            output: 'compressedcreativity:mesh_dense',
            pattern: [' A ', 'BBB', ' A '],
            key: {
                A: 'compressedcreativity:mesh_empty',
                B: 'create:andesite_bars'
            },
            id: `compressedcreativity:crafting/mesh_dense`
        },
        {
            output: 'compressedcreativity:air_blower',
            pattern: [' A', 'BC', ' A'],
            key: {
                A: '#forge:plates/bronze',
                B: 'pneumaticcraft:pressure_tube',
                C: 'create:encased_fan'
            },
            id: `compressedcreativity:crafting/air_blower`
        },
        {
            output: 'compressedcreativity:industrial_air_blower',
            pattern: [' A', 'BC', ' A'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:reinforced_pressure_tube',
                C: 'compressedcreativity:air_blower'
            },
            id: `compressedcreativity:crafting/industrial_air_blower`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
