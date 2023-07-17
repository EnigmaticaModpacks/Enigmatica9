ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/pigment_extracting/';

    const recipes = [
        {
            input: 'byg:oddity_cactus',
            output: { amount: 768, pigment: 'mekanism:white' },
            id: 'mekanism:compat/byg/pigment_extracting/white'
        },
        {
            input: 'byg:warped_cactus',
            output: { amount: 768, pigment: 'mekanism:cyan' },
            id: 'mekanism:compat/byg/pigment_extracting/cyan'
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            input: { ingredient: { item: `thermal:${color}_rockwool` } },
            output: { amount: 192, pigment: `mekanism:${color}` },
            id: `${id_prefix}${color}_rockwool`
        });
    });

    colors.forEach((color) => {
        let colorables = [
            { item: `ae2:${color}_smart_dense_cable`, amount: 24 },
            { item: `ae2:${color}_covered_dense_cable`, amount: 24 },
            { item: `ae2:${color}_glass_cable`, amount: 24 },
            { item: `ae2:${color}_covered_cable`, amount: 24 },
            { item: `ae2:${color}_smart_cable`, amount: 24 },
            { item: `comforts:hammock_${color}`, amount: 192 },
            { item: `comforts:sleeping_bag_${color}`, amount: 192 },
            { item: `create:${color}_valve_handle`, amount: 192 },
            { item: `create:${color}_seat`, amount: 192 },
            { item: `farmersdelight:${color}_canvas_sign`, amount: 192 },
            { item: `immersiveengineering:sheetmetal_colored_${color}`, amount: 24 },
            { item: `pneumaticcraft:plastic_brick_${color}`, amount: 24 },
            { item: `quark:${color}_framed_glass`, amount: 24 },
            { item: `supplementaries:present_${color}`, amount: 192 },
            { item: `supplementaries:flag_${color}`, amount: 192 },
            { item: `thermal:${color}_rockwool`, amount: 192 },
            { item: `the_bumblezone:super_candle_${color}`, amount: 384 },
            { item: `the_bumblezone:string_curtain_${color}`, amount: 192 }
        ];

        colorables.forEach((colorable) => {
            recipes.push({
                input: { ingredient: { item: colorable.item } },
                output: { amount: colorable.amount, pigment: `mekanism:${color}` },
                id: `${id_prefix}${colorable.item.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:pigment_extracting';
        recipe.input = {
            ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
        };
        event.custom(recipe).id(recipe.id);
    });
});
