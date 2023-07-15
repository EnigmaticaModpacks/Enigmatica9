ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/painting/';

    const recipes = [];

    colors.forEach((color) => {
        let colorables = [
            { item: `ae2:${color}_smart_dense_cable`, amount: 32, tag: 'ae2:smart_dense_cable' },
            { item: `ae2:${color}_covered_dense_cable`, amount: 32, tag: 'ae2:covered_dense_cable' },
            { item: `ae2:${color}_glass_cable`, amount: 32, tag: 'ae2:glass_cable' },
            { item: `ae2:${color}_covered_cable`, amount: 32, tag: 'ae2:covered_cable' },
            { item: `ae2:${color}_smart_cable`, amount: 32, tag: 'ae2:smart_cable' },
            { item: `comforts:hammock_${color}`, amount: 256, tag: 'comforts:hammocks' },
            { item: `comforts:sleeping_bag_${color}`, amount: 256, tag: 'comforts:sleeping_bags' },
            { item: `create:${color}_valve_handle`, amount: 256, tag: 'create:valve_handles' },
            { item: `create:${color}_seat`, amount: 256, tag: 'create:seats' },
            { item: `farmersdelight:${color}_canvas_sign`, amount: 256, tag: 'farmersdelight:canvas_signs' },
            { item: `immersiveengineering:sheetmetal_colored_${color}`, amount: 32, tag: 'forge:sheetmetals' },
            { item: `pneumaticcraft:plastic_brick_${color}`, amount: 32, tag: 'pneumaticcraft:plastic_bricks' },
            { item: `quark:${color}_framed_glass`, amount: 32, tag: 'quark:framed_glasses' },
            { item: `supplementaries:present_${color}`, amount: 256, tag: 'supplementaries:presents' },
            { item: `supplementaries:flag_${color}`, amount: 256, tag: 'supplementaries:flags' },
            { item: `thermal:${color}_rockwool`, amount: 256, tag: 'thermal:rockwool' },
            { item: `the_bumblezone:super_candle_${color}`, amount: 512, tag: 'the_bumblezone:super_candles' },
            { item: `the_bumblezone:string_curtain_${color}`, amount: 256, tag: 'the_bumblezone:string_curtains' }
        ];

        colorables.forEach((colorable) => {
            recipes.push({
                output: { item: colorable.item },
                itemInput: {
                    ingredient: {
                        type: 'forge:difference',
                        base: { tag: colorable.tag },
                        subtracted: { item: colorable.item }
                    }
                },
                chemicalInput: { amount: colorable.amount, pigment: `mekanism:${color}` },
                id: `${id_prefix}${colorable.item.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:painting';
        event.custom(recipe).id(recipe.id);
    });
});
