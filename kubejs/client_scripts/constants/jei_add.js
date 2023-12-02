//priority: 999
// EMI / JEI Added items constants.
// Object format:
// id: -> String ID of the item. REQUIRED
// nbt: -> String JSON with NBT Data.
// after: -> String ID of the item to place 'id' item after on the EMI. Doesn't do anything in JEI. NBT added at the end of the ID in the same String.

// Example object
// { id: 'minecraft:diamond', nbt: '{test:"This field is used by unkown mod lol"}', after: 'minecraft:stone{test2:"Another test nbt field!"}' }

// Base
jei.base.items.added = [
    { id: 'immersiveengineering:arc_furnace' },
    { id: 'immersiveengineering:assembler' },
    { id: 'immersiveengineering:auto_workbench' },
    { id: 'immersiveengineering:bottling_machine' },
    { id: 'immersiveengineering:coke_oven' },
    { id: 'immersiveengineering:crusher' },
    { id: 'immersiveengineering:diesel_generator' },
    { id: 'immersiveengineering:excavator' },
    { id: 'immersiveengineering:fermenter' },
    { id: 'immersiveengineering:advanced_blast_furnace' },
    { id: 'immersiveengineering:lightning_rod' },
    { id: 'immersiveengineering:metal_press' },
    { id: 'immersiveengineering:mixer' },
    { id: 'immersiveengineering:refinery' },
    { id: 'immersiveengineering:sawmill' },
    { id: 'immersiveengineering:silo' },
    { id: 'immersiveengineering:squeezer' },
    { id: 'immersiveengineering:tank' },
    { id: 'emendatusenigmatica:bitumen_sandstone_ore', after: 'emendatusenigmatica:iron_ore' },
    { id: 'emendatusenigmatica:quartz_netherrack_ore', after: 'emendatusenigmatica:bitumen_sandstone_ore' },
    { id: 'occultism:iesnium_ore', after: 'emendatusenigmatica:quartz_netherrack_ore' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:1s}]}', after: 'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:mana_boost",lvl:3s}]}' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:2s}]}', after: 'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:1s}]}' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:3s}]}', after: 'minecraft:enchanted_book{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:2s}]}' }
];

// Normal
jei.normal.items.added = [
    { id: 'immersiveengineering:alloy_smelter' },
    { id: 'immersiveengineering:blast_furnace' }
];

// Expert
jei.expert.items.added = [];

// Automated addition:
const ars_nouveau = {
    sets: ['novice', 'apprentice', 'archmage'],
    types: ['boots', 'leggings', 'robes', 'hood'],
    tiers: ['2', '1']
};

ars_nouveau.tiers.forEach((tier) => {
    ars_nouveau.types.forEach((type) => {
        ars_nouveau.sets.forEach((set) => {
            jei.base.items.added.push({
                id: `ars_nouveau:${set}_${type}`,
                nbt: `{Damage:0,an_stack_perks:{color:"",perks:[],tier:${tier}}}`,
                after: `ars_nouveau:${set}_${type}{Damage:0}`
            });
        });
    });
});