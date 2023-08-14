ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks

    const payload = {
        added: [
            { stack: 'item:immersiveengineering:alloy_smelter' },
            { stack: 'item:immersiveengineering:arc_furnace' },
            { stack: 'item:immersiveengineering:assembler' },
            { stack: 'item:immersiveengineering:auto_workbench' },
            { stack: 'item:immersiveengineering:blast_furnace' },
            { stack: 'item:immersiveengineering:bottling_machine' },
            { stack: 'item:immersiveengineering:coke_oven' },
            { stack: 'item:immersiveengineering:crusher' },
            { stack: 'item:immersiveengineering:diesel_generator' },
            { stack: 'item:immersiveengineering:excavator' },
            { stack: 'item:immersiveengineering:fermenter' },
            { stack: 'item:immersiveengineering:advanced_blast_furnace' },
            { stack: 'item:immersiveengineering:lightning_rod' },
            { stack: 'item:immersiveengineering:metal_press' },
            { stack: 'item:immersiveengineering:mixer' },
            { stack: 'item:immersiveengineering:refinery' },
            { stack: 'item:immersiveengineering:sawmill' },
            { stack: 'item:immersiveengineering:silo' },
            { stack: 'item:immersiveengineering:squeezer' },
            { stack: 'item:immersiveengineering:tank' },
            { stack: 'item:emendatusenigmatica:bitumen_sandstone_ore' },
            { stack: 'item:minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:1s}]}' },
            { stack: 'item:minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:2s}]}' },
            { stack: 'item:minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:3s}]}' }
        ]
    };

    const ars_nouveau = {
        sets: ['novice', 'apprentice', 'archmage'],
        types: ['boots', 'leggings', 'robes', 'hood'],
        tiers: ['2', '1']
    };

    ars_nouveau.tiers.forEach((tier) => {
        ars_nouveau.types.forEach((type) => {
            ars_nouveau.sets.forEach((set) => {
                payload.added.push({
                    stack: `item:ars_nouveau:${set}_${type}{Damage:0,an_stack_perks:{color:"",perks:[],tier:${tier}}}`,
                    after: `item:ars_nouveau:${set}_${type}{Damage:0}`
                });
            });
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_added_items.json`, payload);
});
