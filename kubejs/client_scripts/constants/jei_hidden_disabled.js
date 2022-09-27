//priority: 1000

const disabled_item_message =
    "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues";

const jei = {
    base: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } },
    normal: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } },
    expert: { items: { hidden: [], disabled: [] }, categories: { hidden: [] } }
};
// Base
jei.base.items.disabled = ['twilightforest:uncrafting_table'];
jei.base.items.hidden = [
    'kubejs:altered_recipe_indicator',
    'kubejs:disabled_recipe_indicator',
    'kubejs:disabled_structure_indicator',
    'kubejs:alchemists_delight',
    'kubejs:scavengers_delight',
    'kubejs:blacksmiths_delight',
    'kubejs:farmers_delight',
    'kubejs:sorcerers_delight',
    'kubejs:miners_delight',
    'kubejs:legendary_lootbox',
    'kubejs:epic_lootbox',
    'kubejs:rare_lootbox',
    'kubejs:common_lootbox'
];
jei.base.categories.hidden = ['twilightforest:uncrafting'];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [];
jei.normal.categories.hidden = [];

// Expert
jei.expert.items.disabled = [];
jei.expert.items.hidden = [];
jei.expert.categories.hidden = [];
