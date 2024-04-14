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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
