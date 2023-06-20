ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/shaped/';

    const recipes = [
        {
            output: '8x pneumaticcraft:pressure_tube',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: '#forge:essences/air'
            },
            id: `pneumaticcraft:pressure_tube`
        },
        {
            output: '16x pneumaticcraft:pressure_chamber_wall',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: '#forge:essences/earth'
            },
            id: `pneumaticcraft:pressure_chamber_wall`
        },
        {
            output: 'pneumaticcraft:pressure_gauge',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/bronze',
                B: 'pneumaticcraft:compressed_stone_slab'
            },
            id: `pneumaticcraft:pressure_gauge`
        },
        {
            output: 'pneumaticcraft:thermopneumatic_processing_plant',
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
                B: '#forge:essences/earth'
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
                D: '#forge:essences/air'
            },
            id: `pneumaticcraft:gas_lift`
        },
        {
            output: '6x pneumaticcraft:heat_pipe',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'pneumaticcraft:thermal_lagging',
                B: '#forge:ingots/constantan',
                C: '#forge:essences/fire'
            },
            id: `pneumaticcraft:heat_pipe`
        },
        {
            output: 'pneumaticcraft:heat_sink',
            pattern: ['AC ', 'BAC', ' BA'],
            key: {
                A: '#forge:plates/constantan',
                B: '#forge:plates/copper',
                C: '#forge:essences/air'
            },
            id: `pneumaticcraft:heat_sink`
        },
        {
            output: 'pneumaticcraft:charging_station',
            pattern: ['  A', 'BDB', 'CCC'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: 'minecraft:stone_pressure_plate',
                C: 'pneumaticcraft:compressed_stone_slab',
                D: '#forge:essences/air'
            },
            id: `pneumaticcraft:charging_station`
        },
        {
            output: '8x pneumaticcraft:charging_module',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: '#forge:essences/air'
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
                C: '#forge:essences/fire',
                D: 'thermal:fluid_cell_frame'
            },
            id: `pneumaticcraft:kerosene_lamp`
        },
        {
            output: 'pneumaticcraft:turbine_rotor',
            pattern: [' A ', ' B ', 'A A'],
            key: {
                A: 'pneumaticcraft:turbine_blade',
                B: '#forge:ingots/sky'
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
                E: '#forge:essences/air'
            },
            id: `pneumaticcraft:jackhammer`
        },
        {
            output: 'pneumaticcraft:sentry_turret',
            pattern: [' A ', ' BC', 'DEF'],
            key: {
                A: 'immersiveengineering:toolupgrade_railgun_scope',
                B: 'pneumaticcraft:minigun',
                C: 'immersiveengineering:component_electronic',
                D: 'create:copper_backtank',
                E: 'immersiveengineering:turntable',
                F: 'immersiveengineering:rs_engineering'
            },
            id: `pneumaticcraft:sentry_turret`
        },
        {
            output: 'pneumaticcraft:minigun',
            pattern: ['ABD', 'BCB', 'EB '],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'immersiveengineering:gunpart_barrel',
                C: '#forge:gears/compressed_iron',
                D: '#forge:plates/bronze',
                E: '#forge:wooden_grip'
            },
            id: `pneumaticcraft:minigun`
        },
        {
            output: 'pneumaticcraft:vacuum_pump',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: 'pneumaticcraft:turbine_rotor',
                C: 'pneumaticcraft:pressure_tube',
                D: 'naturesaura:vacuum_bottle',
                E: 'ae2:sky_stone_slab'
            },
            id: `pneumaticcraft:vacuum_pump`
        },
        {
            output: '2x pneumaticcraft:pneumatic_cylinder',
            pattern: ['ABA', 'ACA'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: '#forge:rods/aluminum',
                C: 'pneumaticcraft:cannon_barrel'
            },
            id: `pneumaticcraft:pneumatic_cylinder`
        },
        {
            output: '4x pneumaticcraft:printed_circuit_board',
            pattern: [' BA', 'BCB', 'AB '],
            key: {
                A: 'ae2:logic_processor',
                B: 'quark:rainbow_rune',
                C: 'immersiveengineering:circuit_board'
            },
            id: `pneumaticcraft:printed_circuit_board`
        },
        {
            output: 'pneumaticcraft:assembly_platform',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board'
            },
            id: `pneumaticcraft:assembly_platform`
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: [' E ', 'AB ', 'CDC'],
            key: {
                A: 'pneumaticcraft:pressure_tube',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board',
                E: 'supplementaries:crystal_display'
            },
            id: `pneumaticcraft:assembly_controller`
        },
        {
            output: 'pneumaticcraft:assembly_laser',
            pattern: ['EAA', ' BA', 'CDC'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board',
                E: 'quark:rainbow_rune'
            },
            id: `pneumaticcraft:assembly_laser`
        },
        {
            output: 'pneumaticcraft:assembly_drill',
            pattern: ['EAA', ' BA', 'CDC'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board',
                E: 'pneumaticcraft:drill_bit_diamond'
            },
            id: `pneumaticcraft:assembly_drill`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_import',
            pattern: ['EAA', ' BA', 'CDC'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board',
                E: 'create:brass_hand'
            },
            id: `pneumaticcraft:assembly_io_unit_import`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_export',
            pattern: ['AAE', 'AB ', 'CDC'],
            key: {
                A: 'pneumaticcraft:pneumatic_cylinder',
                B: '#forge:ingots/energized_steel',
                C: '#forge:ingots/compressed_iron',
                D: 'pneumaticcraft:printed_circuit_board',
                E: 'create:brass_hand'
            },
            id: `pneumaticcraft:assembly_io_unit_export`
        },
        {
            output: '2x pneumaticcraft:pressure_chamber_interface',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: 'create:portable_storage_interface',
                C: 'pneumaticcraft:module_expansion_card'
            },
            id: `pneumaticcraft:pressure_chamber_interface`
        },
        {
            output: 'pneumaticcraft:vacuum_trap',
            pattern: ['ABA', 'CDE', 'FFF'],
            key: {
                A: '#forge:gears/netherite',
                B: 'supplementaries:netherite_trapdoor',
                C: '#forge:storage_blocks/soul_steel',
                D: 'spirit:soul_crystal',
                E: 'pneumaticcraft:pressure_tube',
                F: '#forge:ingots/soul_steel'
            },
            id: `pneumaticcraft:vacuum_trap`
        },
        {
            output: 'pneumaticcraft:pressurized_spawner',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/soul_steel',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'spirit:soul_cage'
            },
            id: `pneumaticcraft:pressurized_spawner`
        },
        {
            output: 'pneumaticcraft:remote',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'pneumaticcraft:network_io_port',
                B: 'powah:blank_card',
                C: 'pneumaticcraft:gps_tool',
                D: 'pneumaticcraft:network_data_storage'
            },
            id: `pneumaticcraft:remote`
        },
        {
            output: 'pneumaticcraft:small_tank',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'thermal:cured_rubber',
                B: 'pneumaticcraft:compressed_stone',
                C: 'ae2:quartz_glass'
            },
            id: `pneumaticcraft:small_tank`
        },
        {
            output: 'pneumaticcraft:fluid_mixer',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: 'thermal:fluid_cell_frame',
                B: 'pneumaticcraft:compressed_stone',
                C: 'create:propeller',
                D: 'pneumaticcraft:pressure_tube'
            },
            id: `pneumaticcraft:fluid_mixer`
        },
        {
            output: 'pneumaticcraft:vortex_tube',
            pattern: ['ABA', 'CBC', 'ADA'],
            key: {
                A: '#forge:ingots/ironwood',
                B: 'pneumaticcraft:pressure_tube',
                C: '#forge:plates/gold',
                D: '#forge:essences/air'
            },
            id: `pneumaticcraft:vortex_tube`
        },
        {
            output: 'pneumaticcraft:universal_sensor',
            pattern: [' AB', ' C ', 'DE '],
            key: {
                A: '#forge:plates/signalum',
                B: 'littlelogistics:receiver_component',
                C: 'create:turntable',
                D: 'pneumaticcraft:pressure_tube',
                E: 'pneumaticcraft:compressed_stone'
            },
            id: `pneumaticcraft:universal_sensor`
        },
        {
            output: 'pneumaticcraft:aerial_interface',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'compactmachines:wall',
                B: 'pneumaticcraft:omnidirectional_hopper',
                C: 'occultism:stable_wormhole',
                D: 'powah:player_transmitter_basic',
                E: 'pneumaticcraft:advanced_pressure_tube'
            },
            id: `pneumaticcraft:aerial_interface`
        }
    ];

    const network_components = [
        { item: 'pneumaticcraft:network_registry', color: 'lime' },
        { item: 'pneumaticcraft:network_data_storage', color: 'gray' },
        { item: 'pneumaticcraft:network_api', color: 'blue' },
        { item: 'pneumaticcraft:diagnostic_subroutine', color: 'red' },
        { item: 'pneumaticcraft:network_node', color: 'magenta' },
        { item: 'pneumaticcraft:network_io_port', color: 'cyan' }
    ];

    network_components.forEach((component) => {
        recipes.push({
            output: `16x ${component.item}`,
            pattern: [' BA', 'BCB', 'AB '],
            key: {
                A: 'ae2:calculation_processor',
                B: `quark:${component.color}_rune`,
                C: 'immersiveengineering:circuit_board'
            },
            id: component.item
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
