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
    /pendorite/,
    /emeraldite/,
    /ametrine/,

    'createaddition:copper_spool',
    'createaddition:spool',
    'createaddition:festive_spool',
    'createaddition:gold_spool',
    'createaddition:connector',
    'createaddition:accumulator',
    'createaddition:redstone_relay',
    'createaddition:gold_wire',
    'createaddition:iron_wire',
    'createaddition:copper_wire',
    'createaddition:barbed_wire',
    'createaddition:biomass',
    'createaddition:bioethanol_bucket',
    'createaddition:seed_oil_bucket',

    'engineersdecor:factory_dropper',
    'engineersdecor:factory_hopper',
    'engineersdecor:factory_placer',
    'engineersdecor:fluid_barrel',
    /engineersdecor:small_/,
    'engineersdecor:straight_pipe_valve_redstone',
    'engineersdecor:straight_pipe_valve_redstone_analog',
    'engineersdecor:test_block',

    /mekanism:.*_bin/,

    'immersiveengineering:blast_furnace',
    'immersiveengineering:alloy_smelter',
    'immersiveengineering:plantoil_bucket',
    'immersiveengineering:ethanol_bucket',
    'immersiveengineering:biodiesel_bucket',

    'industrialforegoing:dryrubber',

    /thermal:flax/,
    /thermal:hops/,
    /thermal:onion/,
    /thermal:rice/,
    /thermal:tomato/,
    /thermal:.*_oil_bucket/,
    'thermal:latex_bucket',
    'thermal:creosote_bucket',
    'thermal:refined_fuel_bucket',

    'twilightforest:uncrafting_table',

    'occultism:butcher_knife',

    'powah:uraninite_raw',
    /uraninite_ore/,
    /powah:.*_starter/,
    'powah:capacitor_basic',
    'powah:capacitor_basic_tiny',

    'superiorshields:manasteel_shield',
    'superiorshields:terrasteel_shield',
    'superiorshields:elementium_shield',

    'sushigocrafting:rice_seeds',
    'sushigocrafting:rice'
];
jei.base.items.hidden = [
    /kubejs:.*indicator/,
    /kubejs:.*delight/,
    /kubejs:.*lootbox/,
    'kubejs:summon_death_tome',
    'kubejs:spell_night_vision',
    'kubejs:teleport_everdawn',
    'kubejs:teleport_everbright',
    'kubejs:pig_iron_ingot',
    'naturesaura:multiblock_maker',
    'sophisticatedstorage:debug_tool',
    /occultism:.*debug/,
    'occultism:lighted_air',
    /twilightforest:.*boss_spawner/,
    /hexerei:.*selenite/,
    'hexerei:creative_waxing_kit'
];
jei.base.fluids.hidden = [
    'thermal:latex',
    'thermal:creosote',
    /thermal:.*_oil/,
    'thermal:refined_fuel',
    'immersiveengineering:plantoil',
    'immersiveengineering:ethanol',
    'immersiveengineering:biodiesel',
    'createaddition:seed_oil',
    'createaddition:bioethanol'
];
jei.base.categories.hidden = ['twilightforest:uncrafting'];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [/kubejs:tree_of_life_/];
jei.normal.fluids.hidden = [];
jei.normal.categories.hidden = [];

// Expert
jei.expert.items.disabled = [
    /computercraft/,
    'industrialforegoing:washing_factory',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:fluid_sieving_machine',
    'naturesaura:token_grief',
    'naturesaura:token_rage',
    'naturesaura:token_terror',
    'naturesaura:token_euphoria',
    'naturesaura:token_sorrow',
    'naturesaura:token_anger',
    'naturesaura:token_fear',
    'naturesaura:token_joy',
    'ae2:charger',
    'ae2:vibration_chamber',
    'pneumaticcraft:thermal_compressor',
    'pneumaticcraft:advanced_air_compressor',
    'pneumaticcraft:advanced_liquid_compressor',
    'pneumaticcraft:liquid_compressor',
    'pneumaticcraft:solar_compressor',
    'pneumaticcraft:manual_compressor',
    'ars_nouveau:mycelial_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:volcanic_sourcelink',
    'ars_nouveau:agronomic_sourcelink',
    'naturesaura:flower_generator',
    'naturesaura:oak_generator',
    'naturesaura:slime_split_generator',
    'naturesaura:animal_generator',
    'naturesaura:chorus_generator',
    'naturesaura:moss_generator',
    'superiorshields:engineers_shield',
    'superiorshields:electric_shield',
    'superiorshields:fiery_shield',
    'superiorshields:netherite_shield',
    'superiorshields:diamond_shield',
    'superiorshields:lapis_shield',
    'superiorshields:refined_obsidian_shield',
    'superiorshields:refined_glowstone_shield',
    'superiorshields:osmium_shield',
    'superiorshields:nickel_shield',
    'superiorshields:silver_shield',
    'superiorshields:lead_shield',
    'superiorshields:tin_shield',
    'superiorshields:golden_shield',
    'superiorshields:copper_shield',
    'superiorshields:iron_shield',
    'superiorshields:steel_shield',
    'superiorshields:invar_shield',
    'constructionwand:stone_wand',
    'constructionwand:iron_wand'
];
jei.expert.items.hidden = [];
jei.expert.fluids.hidden = [];
jei.expert.categories.hidden = [];
