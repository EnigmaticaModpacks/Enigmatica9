//priority: 1000
// EMI / JEI Added items constants.
// Object format:
// id: -> String ID of the item. REQUIRED
// nbt: -> String JSON with NBT Data.
// after: -> String ID of the item to place 'id' item after on the EMI. Doesn't do anything in JEI. NBT added at the end of the ID in the same String.

// Example object
// { id: 'minecraft:diamond', nbt: '{test:"This field is used by unkown mod lol"}', after: 'minecraft:stone{test2:"Another test nbt field!"}' }

const added_items = {
    base: [],
    normal: [],
    expert: []
};

// Base
added_items.base = [
    { id: 'immersiveengineering:alloy_smelter' },
    { id: 'immersiveengineering:arc_furnace' },
    { id: 'immersiveengineering:assembler' },
    { id: 'immersiveengineering:auto_workbench' },
    { id: 'immersiveengineering:blast_furnace' },
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
    { id: 'occultism:iesnium_ore' },
    { id: 'emendatusenigmatica:bitumen_sandstone_ore' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:1s}]}' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:2s}]}' },
    { id: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"ars_nouveau:reactive",lvl:3s}]}' }
];

// Normal
// Dev Note: Scripts for Normal aren't created yet, as nothing is here!
// If you want to add entries here, you need to copy `emi_add_items.js` and `jei_add_items.js` from base to normal mode, and change the array they work on!
added_items.normal = [];

// Expert
// Dev Note: Scripts for Expert aren't created yet, as nothing is here!
// If you want to add entries here, you need to copy `emi_add_items.js` and `jei_add_items.js` from base to expert mode, and change the array they work on!
added_items.expert = [];

// Automated addition:
const ars_nouveau = {
    sets: ['novice', 'apprentice', 'archmage'],
    types: ['boots', 'leggings', 'robes', 'hood'],
    tiers: ['2', '1']
};

ars_nouveau.tiers.forEach((tier) => {
    ars_nouveau.types.forEach((type) => {
        ars_nouveau.sets.forEach((set) => {
            added_items.base.push({
                id: `ars_nouveau:${set}_${type}`,
                nbt: `{Damage:0,an_stack_perks:{color:"",perks:[],tier:${tier}}}`,
                after: `ars_nouveau:${set}_${type}{Damage:0}`
            });
        });
    });
});