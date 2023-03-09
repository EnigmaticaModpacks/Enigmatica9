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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
