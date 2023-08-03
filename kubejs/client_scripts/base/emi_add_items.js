ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks

    const payload = { added: [] };

    const added_items = [
        'immersiveengineering:alloy_smelter',
        'immersiveengineering:arc_furnace',
        'immersiveengineering:assembler',
        'immersiveengineering:auto_workbench',
        'immersiveengineering:blast_furnace',
        'immersiveengineering:bottling_machine',
        'immersiveengineering:coke_oven',
        'immersiveengineering:crusher',
        'immersiveengineering:diesel_generator',
        'immersiveengineering:excavator',
        'immersiveengineering:fermenter',
        'immersiveengineering:advanced_blast_furnace',
        'immersiveengineering:lightning_rod',
        'immersiveengineering:metal_press',
        'immersiveengineering:mixer',
        'immersiveengineering:refinery',
        'immersiveengineering:sawmill',
        'immersiveengineering:silo',
        'immersiveengineering:squeezer',
        'immersiveengineering:tank',
        'emendatusenigmatica:bitumen_sandstone_ore',
        'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:1s}]}',
        'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:2s}]}',
        'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:3s}]}'
    ];

    added_items.forEach((stack) => {
        payload.added.push({ stack: `item:${stack}` });
    });
    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_added_items.json`, payload);
});
