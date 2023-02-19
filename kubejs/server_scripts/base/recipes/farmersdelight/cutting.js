ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cutting/';
    const recipes = [
        // {
        //     ingredients: [{ item: 'minecraft:acacia_log' }],
        //     result: [{ item: 'minecraft:stripped_acacia_log' }, { item: 'farmersdelight:tree_bark' }],
        //     sound: 'minecraft:item.axe.strip',
        //     tool: {
        //         type: 'farmersdelight:tool_action',
        //         action: 'axe_strip'
        //     },
        //     id: `${id_prefix}stripped_acacia_log`
        // }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            ingredients: [{ item: input }],
            result: [{ item: output }, { item: bark }],
            sound: 'minecraft:item.axe.strip',
            tool: { type: 'farmersdelight:tool_action', action: 'axe_strip' },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Stripped
        input = material.wood.block;
        output = material.wood.stripped;
        recipes.push({
            ingredients: [{ item: input }],
            result: [{ item: output }, { item: bark }],
            sound: 'minecraft:item.axe.strip',
            tool: { type: 'farmersdelight:tool_action', action: 'axe_strip' },
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
