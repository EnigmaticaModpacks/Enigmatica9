ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/shaped/';

    const recipes = [
        {
            output: Item.of('8x pneumaticcraft:pressure_tube'),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'ars_nouveau:air_essence'
            },
            id: `pneumaticcraft:pressure_tube`
        },
        {
            output: Item.of('pneumaticcraft:air_compressor'),
            pattern: ['AAA', 'ABC', 'ADA'],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'ars_nouveau:air_essence',
                C: 'pneumaticcraft:pressure_tube',
                D: 'minecraft:blast_furnace'
            },
            id: `pneumaticcraft:air_compressor`
        },
        {
            output: Item.of('16x pneumaticcraft:pressure_chamber_wall'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'ars_nouveau:earth_essence'
            },
            id: `pneumaticcraft:pressure_chamber_wall`
        },
        {
            output: Item.of('pneumaticcraft:pressure_gauge'),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/bronze',
                B: 'pneumaticcraft:compressed_stone_slab'
            },
            id: `pneumaticcraft:pressure_gauge`
        },
        {
            output: Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'thermal:fluid_cell_frame',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: `pneumaticcraft:thermopneumatic_processing_plant`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
