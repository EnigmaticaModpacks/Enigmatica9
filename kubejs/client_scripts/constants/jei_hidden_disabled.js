//priority: 1000

const disabled_item_message =
    "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues";

const disabled_item_tooltip = 'This item has been disabled.';

const jei = {
    base: {
        items: { hidden: [], disabled: [] },
        categories: { hidden: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] }
    },
    normal: {
        items: { hidden: [], disabled: [] },
        categories: { hidden: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] }
    },
    expert: {
        items: { hidden: [], disabled: [] },
        categories: { hidden: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] }
    }
};
// Base
jei.base.items.disabled = [
    'twilightforest:uncrafting_table',
    'engineersdecor:factory_dropper',
    'engineersdecor:factory_hopper',
    'engineersdecor:factory_placer',
    'engineersdecor:fluid_barrel',
    'engineersdecor:small_block_breaker',
    'engineersdecor:small_electrical_furnace',
    'engineersdecor:small_fluid_funnel',
    'engineersdecor:small_freezer',
    'engineersdecor:small_lab_furnace',
    'engineersdecor:small_milking_machine',
    'engineersdecor:small_mineral_smelter',
    'engineersdecor:small_solar_panel',
    'engineersdecor:small_tree_cutter',
    'engineersdecor:small_waste_incinerator',
    'engineersdecor:straight_pipe_valve',
    'engineersdecor:straight_pipe_valve_redstone',
    'engineersdecor:straight_pipe_valve_redstone_analog',
    'engineersdecor:test_block',
    'mekanism:ultimate_bin',
    'mekanism:elite_bin',
    'mekanism:advanced_bin',
    'mekanism:basic_bin',
    /byg:.*pendorite.*/,
    /byg:.*ametrine.*/
];
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
    'kubejs:common_lootbox',
    'kubejs:summon_death_tome',
    'kubejs:spell_night_vision',
    'kubejs:teleport_everdawn',
    'kubejs:teleport_everbright',
    'naturesaura:multiblock_maker',
    'sophisticatedstorage:debug_tool',
    'occultism:debug_djinni_test',
    'occultism:debug_djinni_manage_machine',
    'occultism:debug_foliot_trader',
    'occultism:debug_foliot_cleaner',
    'occultism:debug_foliot_transport_items',
    'occultism:debug_foliot_lumberjack',
    'occultism:debug_wand',
    'occultism:miner_debug_unspecialized',
    'occultism:lighted_air',
    'twilightforest:naga_boss_spawner',
    'twilightforest:final_boss_boss_spawner',
    'twilightforest:snow_queen_boss_spawner',
    'twilightforest:alpha_yeti_boss_spawner',
    'twilightforest:ur_ghast_boss_spawner',
    'twilightforest:knight_phantom_boss_spawner',
    'twilightforest:minoshroom_boss_spawner',
    'twilightforest:lich_boss_spawner',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank'
];
jei.base.categories.hidden = ['twilightforest:uncrafting'];

jei.base.fluids.hidden = [];
jei.base.gases.hidden = [];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [];
jei.normal.categories.hidden = [];
jei.normal.fluids.hidden = [];
jei.normal.gases.hidden = [];

// Expert
jei.expert.items.disabled = [];
jei.expert.items.hidden = [];
jei.expert.categories.hidden = [];
jei.expert.fluids.hidden = [];
jei.expert.gases.hidden = [];
