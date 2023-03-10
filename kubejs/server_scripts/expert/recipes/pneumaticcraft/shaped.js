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
            id: `${id_prefix}air_compressor`
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
        },
        {
            output: 'pneumaticcraft:pneumatic_wrench',
            pattern: ['AEA', 'BC ', 'D  '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'create:copper_backtank',
                C: '#forge:dyes/orange',
                D: '#forge:wooden_grip',
                E: 'create:gearbox'
            },
            id: `pneumaticcraft:pneumatic_wrench`
        },
        {
            output: 'pneumaticcraft:logistics_configurator',
            pattern: ['AEA', 'BC ', 'D  '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'create:copper_backtank',
                C: '#forge:dyes/red',
                D: '#forge:wooden_grip',
                E: 'create:gearbox'
            },
            id: `pneumaticcraft:logistics_configurator`
        },
        {
            output: 'pneumaticcraft:camo_applicator',
            pattern: ['AEA', 'BC ', 'D  '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'create:copper_backtank',
                C: '#forge:dyes/blue',
                D: '#forge:wooden_grip',
                E: 'create:gearbox'
            },
            id: `pneumaticcraft:camo_applicator`
        },
        {
            output: 'pneumaticcraft:crop_support',
            pattern: ['ABA', 'A A'],
            key: {
                A: '#forge:rods/treated_wood',
                B: 'ars_nouveau:earth_essence'
            },
            id: `pneumaticcraft:crop_support`
        },
        {
            output: 'pneumaticcraft:gas_lift',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'pneumaticcraft:pressure_tube',
                C: 'thermal:fluid_cell_frame',
                D: 'ars_nouveau:air_essence'
            },
            id: `pneumaticcraft:gas_lift`
        },
        {
            output: '6x pneumaticcraft:heat_pipe',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'pneumaticcraft:thermal_lagging',
                B: '#forge:ingots/constantan',
                C: 'ars_nouveau:fire_essence'
            },
            id: `pneumaticcraft:heat_pipe`
        },
        {
            output: '6x pneumaticcraft:heat_pipe',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'pneumaticcraft:thermal_lagging',
                B: '#forge:ingots/constantan',
                C: 'ars_nouveau:fire_essence'
            },
            id: `pneumaticcraft:heat_pipe`
        },
        {
            output: 'pneumaticcraft:charging_station',
            pattern: ['  A', 'BDB', 'CCC'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: 'minecraft:stone_pressure_plate',
                C: 'pneumaticcraft:compressed_stone_slab',
                D: 'ars_nouveau:air_essence'
            },
            id: `pneumaticcraft:charging_station`
        },
        {
            output: '8x pneumaticcraft:charging_module',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: 'ars_nouveau:air_essence'
            },
            id: `pneumaticcraft:charging_module`
        },
        {
            output: 'pneumaticcraft:tube_junction',
            pattern: ['ABA', 'BBB', 'ABA'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'pneumaticcraft:pressure_tube'
            },
            id: `pneumaticcraft:tube_junction`
        },
        {
            output: '4x pneumaticcraft:kerosene_lamp',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'ae2:quartz_glass',
                C: 'ars_nouveau:fire_essence',
                D: 'thermal:fluid_cell_frame'
            },
            id: `pneumaticcraft:kerosene_lamp`
        },
        {
            output: 'pneumaticcraft:turbine_rotor',
            pattern: [' A ', ' B ', 'A A'],
            key: {
                A: 'pneumaticcraft:turbine_blade',
                B: '#forge:ingots/skies'
            },
            id: `pneumaticcraft:turbine_rotor`
        },
        {
            output: '4x pneumaticcraft:reinforced_pressure_tube',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: 'thermal:hazmat_fabric',
                C: 'thermal:cured_rubber'
            },
            id: `${id_prefix}reinforced_pressure_tube`
        },
        {
            output: 'pneumaticcraft:jackhammer',
            pattern: ['ABA', 'CDC', ' E '],
            key: {
                A: '#forge:wooden_grip',
                B: 'create:andesite_casing',
                C: 'naturesaura:gold_leaf',
                D: 'pneumaticcraft:pressure_tube',
                E: 'ars_nouveau:earth_essence'
            },
            id: `pneumaticcraft:jackhammer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
