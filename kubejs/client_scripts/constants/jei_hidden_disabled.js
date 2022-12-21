//priority: 1000

const disabled_item_message =
    "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues";

const disabled_item_tooltip = 'This item has been disabled.';

const jei = {
    base: { items: { hidden: [], disabled: [] }, fluids: { hidden: [] }, categories: { hidden: [] } },
    normal: { items: { hidden: [], disabled: [] }, fluids: { hidden: [] }, categories: { hidden: [] } },
    expert: { items: { hidden: [], disabled: [] }, fluids: { hidden: [] }, categories: { hidden: [] } }
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
    'immersiveengineering:blast_furnace',
    'immersiveengineering:alloy_smelter',
    'thermal:flax',
    'thermal:flax_block',
    'thermal:flax_seeds',
    'thermal:hops',
    'thermal:hops_block',
    'thermal:hops_seeds',
    'thermal:onion',
    'thermal:onion_block',
    'thermal:onion_seeds',
    'thermal:rice',
    'thermal:rice_block',
    'thermal:rice_seeds',
    'thermal:tomato',
    'thermal:tomato_block',
    'thermal:tomato_seeds',
    'industrialforegoing:dryrubber',
    'thermal:latex_bucket',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'thermal:heavy_oil_bucket',
    'thermal:light_oil_bucket',
    'thermal:refined_fuel_bucket',
    'immersiveengineering:plantoil_bucket',
    'immersiveengineering:ethanol_bucket',
    'immersiveengineering:biodiesel_bucket',
    'occultism:butcher_knife',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore',
    'powah:uraninite_ore_poor',
    'powah:deepslate_uraninite_ore_dense',
    'powah:deepslate_uraninite_ore',
    'powah:deepslate_uraninite_ore_poor',
    'powah:uraninite_raw',
    'powah:energy_discharger_starter',
    'powah:energy_hopper_starter',
    'powah:player_transmitter_starter',
    'powah:reactor_starter',
    'powah:solar_panel_starter',
    'powah:thermo_generator_starter',
    'powah:magmator_starter',
    'powah:furnator_starter',
    'powah:energizing_rod_starter',
    'powah:ender_gate_starter',
    'powah:energy_cable_starter',
    'powah:ender_cell_starter',
    'powah:energy_cell_starter',
    'powah:battery_starter',
    'powah:capacitor_basic',
    'powah:capacitor_basic_tiny'
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
    'hexerei:small_selenite_bud',
    'hexerei:medium_selenite_bud',
    'hexerei:large_selenite_bud',
    'hexerei:selenite_cluster',
    'hexerei:budding_selenite',
    'hexerei:selenite_block',
    'hexerei:creative_waxing_kit',
    'hexerei:selenite_shard'
];
jei.base.fluids.hidden = [
    'thermal:latex',
    'thermal:creosote',
    'thermal:crude_oil',
    'thermal:heavy_oil',
    'thermal:light_oil',
    'thermal:refined_fuel',
    'immersiveengineering:plantoil',
    'immersiveengineering:ethanol',
    'immersiveengineering:biodiesel'
];
jei.base.categories.hidden = ['twilightforest:uncrafting'];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [];
jei.normal.fluids.hidden = [];
jei.normal.categories.hidden = [];

// Expert
jei.expert.items.disabled = [];
jei.expert.items.hidden = [];
jei.expert.fluids.hidden = [];
jei.expert.categories.hidden = [];
