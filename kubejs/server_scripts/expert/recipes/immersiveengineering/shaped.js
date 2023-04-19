ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/shaped/';

    const recipes = [
        {
            output: 'immersiveengineering:hammer',
            pattern: [' AB', ' CA', 'C  '],
            key: {
                A: '#forge:ingots/lead',
                B: '#forge:string',
                C: '#forge:rods/wooden'
            },
            id: `immersiveengineering:crafting/hammer`
        },
        {
            output: 'immersiveengineering:watermill',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:waterwheel_segment',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/watermill`
        },
        {
            output: 'immersiveengineering:windmill',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:windmill_blade',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/windmill`
        },
        {
            output: 'immersiveengineering:coil_lv',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:wires/copper',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/coil_lv`
        },
        {
            output: 'immersiveengineering:coil_mv',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:wires/electrum',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/coil_mv`
        },
        {
            output: 'immersiveengineering:coil_hv',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:wires/steel',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/coil_hv`
        },
        {
            output: '20x immersiveengineering:conveyor_basic',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'thermal:redstone_servo',
                B: '#forge:ingots/aluminum',
                C: 'create:belt_connector'
            },
            id: `immersiveengineering:crafting/conveyor_basic`
        },
        {
            output: 'immersiveengineering:conveyor_extract',
            pattern: ['AB', 'CD'],
            key: {
                A: '#forge:treated_wood',
                B: 'immersiveengineering:strip_curtain',
                C: 'thermal:redstone_servo',
                D: 'immersiveengineering:conveyor_basic'
            },
            id: `immersiveengineering:crafting/conveyor_extract`
        },
        {
            output: '6x immersiveengineering:conveyor_vertical',
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
                A: 'immersiveengineering:conveyor_basic',
                B: '#forge:nuggets/aluminum'
            },
            id: `immersiveengineering:crafting/conveyor_vertical`
        },
        {
            output: '3x immersiveengineering:conveyor_splitter',
            pattern: ['ABA', ' A '],
            key: {
                A: 'immersiveengineering:conveyor_basic',
                B: '#forge:ingots/aluminum'
            },
            id: `immersiveengineering:crafting/conveyor_splitter`
        },
        {
            output: '9x immersiveengineering:steel_scaffolding_standard',
            pattern: ['AAA', ' B ', 'B B'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:rods/iron'
            },
            id: `immersiveengineering:crafting/steel_scaffolding_standard`
        },
        {
            output: '6x immersiveengineering:steel_fence',
            pattern: ['ABA', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:rods/iron'
            },
            id: `immersiveengineering:crafting/steel_fence`
        },
        {
            output: '8x immersiveengineering:steel_wallmount',
            pattern: ['AA', 'AB'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:rods/iron'
            },
            id: `immersiveengineering:crafting/steel_wallmount`
        },
        {
            output: Item.of('immersiveengineering:sawblade', { Unbreakable: 1 }),
            pattern: ['AA ', 'ABA', ' AA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/sawblade`
        },
        {
            output: Item.of('immersiveengineering:rockcutter', { Unbreakable: 1 }),
            pattern: ['CA ', 'ABA', ' AC'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'create:shaft',
                C: '#forge:ingots/skies'
            },
            id: `immersiveengineering:crafting/rockcutter`
        },
        {
            output: Item.of('immersiveengineering:drillhead_iron', { Unbreakable: 1 }),
            pattern: ['  A', 'AA ', 'BA '],
            key: {
                A: '#forge:ingots/iron',
                B: 'thermal:redstone_servo'
            },
            id: `immersiveengineering:crafting/drillhead_iron`
        },
        {
            output: Item.of('immersiveengineering:drillhead_steel', { Unbreakable: 1 }),
            pattern: ['  A', 'AA ', 'BA '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'thermal:redstone_servo'
            },
            id: `immersiveengineering:crafting/drillhead_steel`
        },
        {
            output: '4x immersiveengineering:rs_engineering',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: 'powah:capacitor_basic_large',
                C: 'kubejs:energetic_transference_matrix'
            },
            id: `immersiveengineering:crafting/rs_engineering`
        },
        {
            output: '4x immersiveengineering:light_engineering',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: '#forge:gears/bronze',
                C: 'thermal:redstone_servo'
            },
            id: `immersiveengineering:crafting/light_engineering`
        },
        {
            output: '4x immersiveengineering:heavy_engineering',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_black',
                B: '#forge:gears/compressed_iron',
                C: 'thermal:redstone_servo'
            },
            id: `immersiveengineering:crafting/heavy_engineering`
        },
        {
            output: 'immersiveengineering:drill',
            pattern: ['  A', ' BA', 'C  '],
            key: {
                A: '#forge:wooden_grip',
                B: 'immersiveengineering:heavy_engineering',
                C: '#forge:gears/compressed_iron'
            },
            id: `immersiveengineering:crafting/drill`
        },
        {
            output: 'immersiveengineering:buzzsaw',
            pattern: ['  A', 'DBA', 'CD '],
            key: {
                A: '#forge:wooden_grip',
                B: 'immersiveengineering:heavy_engineering',
                C: '#forge:gears/compressed_iron',
                D: '#forge:plates/invar'
            },
            id: `immersiveengineering:crafting/buzzsaw`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_capacity',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/bronze',
                B: '#forge:essences/water',
                C: 'thermal:cured_rubber'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_capacity`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_waterproof',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/tin',
                B: '#forge:essences/air',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_waterproof`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_damage',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:essences/earth',
                C: '#forge:rods/iron'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_damage`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_fortune',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/constantan',
                B: '#forge:essences/fire',
                C: 'immersiveengineering:redstone_acid_bucket'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_fortune`
        },
        {
            output: 'immersiveengineering:gunpart_drum',
            pattern: [' AB', 'ACA', ' A '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:essences/earth',
                C: '#forge:rods/aluminum'
            },
            id: `immersiveengineering:crafting/gunpart_drum`
        },
        {
            output: 'immersiveengineering:gunpart_barrel',
            pattern: ['  B', ' C ', 'A  '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:essences/air',
                C: '#forge:rods/aluminum'
            },
            id: `immersiveengineering:crafting/gunpart_barrel`
        },
        {
            output: 'immersiveengineering:gunpart_hammer',
            pattern: ['  B', 'AA ', ' C '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:essences/fire',
                C: '#forge:rods/aluminum'
            },
            id: `immersiveengineering:crafting/gunpart_hammer`
        },
        {
            output: 'immersiveengineering:speedloader',
            pattern: ['ABC'],
            key: {
                A: '#forge:rods/aluminum',
                B: 'immersiveengineering:gunpart_drum',
                C: '#forge:essences/water'
            },
            id: `immersiveengineering:crafting/speedloader`
        },
        {
            output: '2x immersiveengineering:item_batcher',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:treated_wood',
                B: 'pneumaticcraft:omnidirectional_hopper',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `immersiveengineering:crafting/item_batcher`
        },
        {
            output: '2x immersiveengineering:fluid_sorter',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:treated_wood',
                B: 'pneumaticcraft:liquid_hopper',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `immersiveengineering:crafting/fluid_sorter`
        },
        {
            output: '2x immersiveengineering:sorter',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:treated_wood',
                B: 'immersiveengineering:conveyor_basic',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `immersiveengineering:crafting/sorter`
        },
        {
            output: 'immersiveengineering:furnace_heater',
            pattern: ['ACA', 'ABA'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'naturesaura:furnace_heater',
                C: 'thermal:machine_frame'
            },
            id: `immersiveengineering:crafting/furnace_heater`
        },
        {
            output: 'immersiveengineering:toolupgrade_revolver_magazine',
            pattern: [' BA', 'BAB', 'CB '],
            key: {
                A: '#forge:plates/aluminum',
                B: '#forge:nuggets/bronze',
                C: 'thermal:redstone_servo'
            },
            id: `immersiveengineering:crafting/toolupgrade_revolver_magazine`
        },
        {
            output: 'immersiveengineering:fluid_pump',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'powah:capacitor_basic_large',
                B: '#forge:plates/aluminum',
                C: 'createaddition:electric_motor',
                D: 'create:mechanical_pump'
            },
            id: `immersiveengineering:crafting/fluid_pump`
        },
        {
            output: 'immersiveengineering:toolupgrade_chemthrower_focus',
            pattern: ['AB', 'BC'],
            key: {
                A: 'create:fluid_pipe',
                B: '#forge:plates/obsidian',
                C: '#forge:essences/water'
            },
            id: `immersiveengineering:crafting/toolupgrade_chemthrower_focus`
        },
        {
            output: 'immersiveengineering:toolupgrade_chemthrower_multitank',
            pattern: ['AB', 'BC'],
            key: {
                A: 'create:fluid_pipe',
                B: 'immersiveengineering:toolupgrade_drill_capacity',
                C: 'thermal:cured_rubber'
            },
            id: `immersiveengineering:crafting/toolupgrade_chemthrower_multitank`
        },
        {
            output: 'immersiveengineering:skyhook',
            pattern: ['AA', 'AB'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:wooden_grip'
            },
            id: `immersiveengineering:crafting/skyhook`
        },
        {
            output: 'immersiveengineering:toolupgrade_revolver_bayonet',
            pattern: ['BA', 'CB'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#forge:nuggets/bronze',
                C: '#forge:rods/treated_wood'
            },
            id: `immersiveengineering:crafting/toolupgrade_revolver_bayonet`
        },
        {
            output: '4x immersiveengineering:wirecoil_redstone',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:redstone',
                B: '#forge:wires/aluminum',
                C: '#forge:rods/treated_wood'
            },
            id: `immersiveengineering:crafting/wirecoil_redstone`
        },
        {
            output: 'immersiveengineering:railgun',
            pattern: [' EA', 'BAC', 'DC '],
            key: {
                A: '#forge:rods/aluminum',
                B: 'immersiveengineering:component_electronic',
                C: 'powah:capacitor_spirited',
                D: '#forge:wooden_grip',
                E: '#forge:essences/manipulation'
            },
            id: `immersiveengineering:crafting/railgun`
        },
        {
            output: 'immersiveengineering:toolupgrade_railgun_scope',
            pattern: ['ABC', 'B B', 'CBA'],
            key: {
                A: '#forge:nuggets/bronze',
                B: '#forge:rods/aluminum',
                C: 'occultism:spirit_attuned_gem'
            },
            id: `immersiveengineering:crafting/toolupgrade_railgun_scope`
        },
        {
            output: 'immersiveengineering:turret_chem',
            pattern: [' A ', ' BC', 'DEF'],
            key: {
                A: 'immersiveengineering:toolupgrade_railgun_scope',
                B: 'immersiveengineering:chemthrower',
                C: 'immersiveengineering:component_electronic',
                D: 'thermal:fluid_cell_frame',
                E: 'immersiveengineering:turntable',
                F: 'immersiveengineering:rs_engineering'
            },
            id: `immersiveengineering:crafting/turret_chem`
        },
        {
            output: 'immersiveengineering:turret_gun',
            pattern: [' A ', ' BC', 'DEF'],
            key: {
                A: 'immersiveengineering:toolupgrade_railgun_scope',
                B: 'immersiveengineering:revolver',
                C: 'immersiveengineering:component_electronic',
                D: 'immersiveengineering:toolupgrade_revolver_magazine',
                E: 'immersiveengineering:turntable',
                F: 'immersiveengineering:rs_engineering'
            },
            id: `immersiveengineering:crafting/turret_gun`
        },
        {
            output: 'immersiveengineering:toolupgrade_railgun_capacitors',
            pattern: ['A C', 'BA ', ' BA'],
            key: {
                A: '#forge:plates/constantan',
                B: '#forge:ingots/compressed_iron',
                C: '#forge:essences/air'
            },
            id: `immersiveengineering:crafting/toolupgrade_railgun_capacitors`
        },
        {
            output: '4x immersiveengineering:fluid_pipe',
            pattern: ['ABA'],
            key: {
                A: '#forge:plates/aluminum',
                B: '#forge:ingots/aluminum'
            },
            id: `immersiveengineering:crafting/fluid_pipe`
        },
        {
            output: '4x immersiveengineering:fluid_pipe',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:plates/aluminum',
                B: '#forge:ingots/aluminum'
            },
            id: `${id_prefix}fluid_pipe_vertical`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
