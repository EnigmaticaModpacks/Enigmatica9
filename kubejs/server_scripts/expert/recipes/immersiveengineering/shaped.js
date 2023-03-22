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
                A: 'immersiveengineering:wirecoil_copper',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/coil_lv`
        },
        {
            output: 'immersiveengineering:coil_mv',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:wirecoil_electrum',
                B: 'create:shaft'
            },
            id: `immersiveengineering:crafting/coil_mv`
        },
        {
            output: 'immersiveengineering:coil_hv',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:wirecoil_steel',
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
                B: 'ars_nouveau:water_essence',
                C: 'thermal:cured_rubber'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_capacity`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_waterproof',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/tin',
                B: 'ars_nouveau:air_essence',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_waterproof`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_damage',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/invar',
                B: 'ars_nouveau:earth_essence',
                C: '#forge:rods/iron'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_damage`
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_fortune',
            pattern: [' A ', 'ABA', ' AC'],
            key: {
                A: '#forge:plates/constantan',
                B: 'ars_nouveau:fire_essence',
                C: 'immersiveengineering:redstone_acid_bucket'
            },
            id: `immersiveengineering:crafting/toolupgrade_drill_fortune`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
