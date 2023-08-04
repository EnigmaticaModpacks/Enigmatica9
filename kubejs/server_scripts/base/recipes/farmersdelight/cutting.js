ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cutting/';
    const recipes = [
        {
            ingredients: [{ item: 'minecraft:calcite' }],
            result: [{ item: 'minecraft:nautilus_shell', chance: 0.15 }],
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'pickaxe_dig'
            },
            id: `${id_prefix}nautilus_shell`
        },
        {
            ingredients: [{ item: 'minecraft:melon' }],
            result: [{ item: 'minecraft:melon_slice', count: 8 }],
            tool: { tag: 'forge:tools/knives' },
            id: `farmersdelight:cutting/melon`
        },
        {
            ingredients: [{ item: 'byg:therium_crystal_block' }],
            result: [{ item: 'byg:therium_crystal_shard', count: 4 }],
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'pickaxe_dig'
            },
            id: `${id_prefix}therium_crystal_shard`
        },
        {
            ingredients: [{ item: 'byg:subzero_crystal_block' }],
            result: [{ item: 'byg:subzero_crystal_shard', count: 4 }],
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'pickaxe_dig'
            },
            id: `${id_prefix}subzero_crystal_shard`
        },
        {
            ingredients: [{ item: 'minecraft:dripstone_block' }],
            result: [{ item: 'minecraft:pointed_dripstone', count: 4 }],
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'pickaxe_dig'
            },
            id: `${id_prefix}pointed_dripstone`
        }
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
