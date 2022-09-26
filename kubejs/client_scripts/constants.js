//priority: 900

// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:cobbled_ether_stone',
    'byg:purpur_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'byg:travertine',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'undergarden:tremblecrust',
    'minecraft:cobbled_deepslate',
    'blue_skies:turquoise_cobblestone'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'blue_skies:blinding_stone',
    'blue_skies:crystal_sandstone',
    'blue_skies:lunar_stone',
    'blue_skies:midnight_sandstone',
    'blue_skies:nature_stone',
    'blue_skies:poison_stone',
    'blue_skies:rimestone',
    'blue_skies:turquoise_stone',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:brimstone',
    'byg:cryptic_stone',
    'byg:dacite',
    'byg:ether_stone',
    'byg:pink_sandstone',
    'byg:purple_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'byg:windswept_sandstone',
    // 'create:limestone',
    // 'create:scoria',
    'minecraft:andesite',
    'minecraft:basalt',
    'minecraft:deepslate',
    'minecraft:diorite',
    'minecraft:dripstone_block',
    'minecraft:granite',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:dusky_myalite',
    'quark:jasper',
    'quark:limestone',
    'quark:myalite',
    'quark:permafrost',
    'quark:soul_sandstone',
    'twilightforest:mazestone'
];
const generatableBasalt = [];

const jei = {
    base: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } },
    normal: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } },
    expert: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } }
};
// Base
jei.base.items.disabled = ['twilightforest:uncrafting_table'];
jei.base.items.hidden = [];
jei.base.categories.hidden = ['twilightforest:uncrafting'];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [];
jei.normal.categories.hidden = [];

// Expert
jei.expert.items.disabled = [Item.of('naturesaura:effect_powder', '{effect:"naturesaura:ore_spawn"}')];
jei.expert.items.hidden = [];
jei.expert.categories.hidden = [];
