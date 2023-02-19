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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
