ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/framedblocks/shaped/';

    const recipes = [
        {
            output: '9x framedblocks:framed_fancy_detector_rail',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: '#forge:rods/osmium',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:dusts/redstone',
                D: 'framedblocks:framed_cube'
            },
            id: `${id_prefix}framed_fancy_detector_rail_from_osmium`
        },
        {
            output: '3x framedblocks:framed_fancy_detector_rail',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: '#forge:rods/bronze',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:dusts/redstone',
                D: 'framedblocks:framed_cube'
            },
            id: `${id_prefix}framed_fancy_detector_rail_from_bronze`
        },
        {
            output: '9x framedblocks:framed_fancy_activator_rail',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/osmium',
                B: 'framedblocks:framed_cube',
                C: 'minecraft:redstone_torch'
            },
            id: `${id_prefix}framed_fancy_activator_rail_from_osmium`
        },
        {
            output: '3x framedblocks:framed_fancy_activator_rail',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/bronze',
                B: 'framedblocks:framed_cube',
                C: 'minecraft:redstone_torch'
            },
            id: `${id_prefix}framed_fancy_activator_rail_from_bronze`
        },
        {
            output: '8x framedblocks:framed_fancy_rail',
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/bronze',
                B: 'framedblocks:framed_cube'
            },
            id: `${id_prefix}framed_fancy_rail_from_bronze`
        },
        {
            output: '24x framedblocks:framed_fancy_rail',
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/osmium',
                B: 'framedblocks:framed_cube'
            },
            id: `${id_prefix}framed_fancy_rail_from_osmium`
        },
        {
            output: 'framedblocks:framed_key',
            pattern: ['AAB', 'CC '],
            key: {
                A: '#forge:rods/wooden',
                B: 'framedblocks:framed_cube',
                C: '#forge:nuggets/bronze'
            },
            id: 'framedblocks:framed_key'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
