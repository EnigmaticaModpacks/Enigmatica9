//priority: 1000

const disabled_item_message =
    "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues";

const disabled_item_tooltip = 'This item has been disabled.';

const jei = {
    base: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    normal: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    expert: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    }
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
    'thermal:crude_oil_bucket',
    'thermal:heavy_oil_bucket',
    'thermal:light_oil_bucket',
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
    'naturesaura:multiblock_maker',
    'sophisticatedstorage:debug_tool',
    /occultism:.*debug/,
    'occultism:lighted_air',
    /twilightforest:.*boss_spawner/,
    /hexerei:.*selenite/,
    'hexerei:creative_waxing_kit',
    /nomadictents:.*_shamiyana_wall/,
    /nomadictents:.*_tepee_wall/,
    'nomadictents:indlu_wall',
    'nomadictents:bedouin_roof',
    'nomadictents:bedouin_wall',
    'nomadictents:yurt_roof',
    'nomadictents:yurt_wall',
    'nomadictents:rigid_dirt'
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
jei.normal.items.hidden = [
    /kubejs:tree_of_life_/,
    'kubejs:summon_death_tome',
    'kubejs:teleport_everdawn',
    'kubejs:teleport_everbright',
    'kubejs:pig_iron_ingot',
    'kubejs:mystery_mash'
];
jei.normal.fluids.hidden = [];
jei.normal.categories.hidden = [];

// Expert
jei.expert.items.disabled = [
    /computercraft/,
    'ae2:charger',
    'ae2:vibration_chamber',
    'ars_nouveau:agronomic_sourcelink',
    'ars_nouveau:mycelial_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:volcanic_sourcelink',
    'constructionwand:iron_wand',
    'constructionwand:stone_wand',
    'create:empty_blaze_burner',
    'createaddition:alternator',
    'createaddition:modular_accumulator',
    'immersiveengineering:capacitor_hv',
    'immersiveengineering:capacitor_lv',
    'immersiveengineering:capacitor_mv',
    'immersiveengineering:connector_hv',
    'immersiveengineering:connector_hv_relay',
    'immersiveengineering:connector_lv',
    'immersiveengineering:connector_lv_relay',
    'immersiveengineering:connector_mv',
    'immersiveengineering:connector_mv_relay',
    'immersiveengineering:dynamo',
    'immersiveengineering:electric_lantern',
    'immersiveengineering:thermoelectric_generator',
    'immersiveengineering:transformer',
    'immersiveengineering:transformer_hv',
    'industrialforegoing:biofuel_generator',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:mycelial_crimed',
    'industrialforegoing:mycelial_culinary',
    'industrialforegoing:mycelial_death',
    'industrialforegoing:mycelial_disenchantment',
    'industrialforegoing:mycelial_ender',
    'industrialforegoing:mycelial_explosive',
    'industrialforegoing:mycelial_frosty',
    'industrialforegoing:mycelial_furnace',
    'industrialforegoing:mycelial_halitosis',
    'industrialforegoing:mycelial_magma',
    'industrialforegoing:mycelial_meatallurgic',
    'industrialforegoing:mycelial_netherstar',
    'industrialforegoing:mycelial_pink',
    'industrialforegoing:mycelial_potion',
    'industrialforegoing:mycelial_reactor',
    'industrialforegoing:mycelial_rocket',
    'industrialforegoing:mycelial_slimey',
    'industrialforegoing:pitiful_generator',
    'industrialforegoing:washing_factory',
    'mekanism:advanced_energy_cube',
    'mekanism:advanced_induction_cell',
    'mekanism:advanced_induction_provider',
    'mekanism:basic_energy_cube',
    'mekanism:basic_induction_cell',
    'mekanism:basic_induction_provider',
    'mekanism:elite_energy_cube',
    'mekanism:elite_induction_cell',
    'mekanism:elite_induction_provider',
    'mekanism:induction_casing',
    'mekanism:induction_port',
    'mekanism:ultimate_energy_cube',
    'mekanism:ultimate_induction_cell',
    'mekanism:ultimate_induction_provider',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:control_rod_assembly',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_reactor_logic_adapter',
    'mekanismgenerators:fission_reactor_port',
    'mekanismgenerators:fusion_reactor_controller',
    'mekanismgenerators:fusion_reactor_frame',
    'mekanismgenerators:fusion_reactor_logic_adapter',
    'mekanismgenerators:fusion_reactor_port',
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:hohlraum',
    'mekanismgenerators:laser_focus_matrix',
    'mekanismgenerators:reactor_glass',
    'mekanismgenerators:rotational_complex',
    'mekanismgenerators:saturating_condenser',
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:turbine_casing',
    'mekanismgenerators:turbine_rotor',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:turbine_vent',
    'mekanismgenerators:wind_generator',
    'naturesaura:animal_generator',
    'naturesaura:chorus_generator',
    'naturesaura:flower_generator',
    'naturesaura:moss_generator',
    'naturesaura:oak_generator',
    'naturesaura:slime_split_generator',
    'naturesaura:token_anger',
    'naturesaura:token_euphoria',
    'naturesaura:token_fear',
    'naturesaura:token_grief',
    'naturesaura:token_joy',
    'naturesaura:token_rage',
    'naturesaura:token_sorrow',
    'naturesaura:token_terror',
    'pneumaticcraft:advanced_air_compressor',
    'pneumaticcraft:advanced_liquid_compressor',
    'pneumaticcraft:liquid_compressor',
    'pneumaticcraft:manual_compressor',
    'pneumaticcraft:pneumatic_dynamo',
    'pneumaticcraft:solar_compressor',
    'pneumaticcraft:thermal_compressor',
    'pneumaticcraft:spawner_agitator',
    'powah:furnator_basic',
    'powah:furnator_blazing',
    'powah:furnator_hardened',
    'powah:furnator_niotic',
    'powah:furnator_nitro',
    'powah:furnator_spirited',
    'powah:magmator_basic',
    'powah:magmator_blazing',
    'powah:magmator_hardened',
    'powah:magmator_niotic',
    'powah:magmator_nitro',
    'powah:magmator_spirited',
    'powah:solar_panel_basic',
    'powah:solar_panel_blazing',
    'powah:solar_panel_hardened',
    'powah:solar_panel_niotic',
    'powah:solar_panel_nitro',
    'powah:solar_panel_spirited',
    'powah:thermo_generator_basic',
    'powah:thermo_generator_blazing',
    'powah:thermo_generator_hardened',
    'powah:thermo_generator_niotic',
    'powah:thermo_generator_nitro',
    'powah:thermo_generator_spirited',
    'superiorshields:copper_shield',
    'superiorshields:diamond_shield',
    'superiorshields:electric_shield',
    'superiorshields:engineers_shield',
    'superiorshields:fiery_shield',
    'superiorshields:golden_shield',
    'superiorshields:invar_shield',
    'superiorshields:iron_shield',
    'superiorshields:lapis_shield',
    'superiorshields:lead_shield',
    'superiorshields:netherite_shield',
    'superiorshields:nickel_shield',
    'superiorshields:osmium_shield',
    'superiorshields:refined_glowstone_shield',
    'superiorshields:refined_obsidian_shield',
    'superiorshields:silver_shield',
    'superiorshields:steel_shield',
    'superiorshields:tin_shield',
    'superiorshields:spirit_hunter_shield',
    'superiorshields:soul_stained_steel_shield',
    'thermal:dynamo_compression',
    'thermal:dynamo_gourmand',
    'thermal:dynamo_lapidary',
    'thermal:dynamo_magmatic',
    'thermal:dynamo_numismatic',
    'thermal:dynamo_stirling'
];
jei.expert.items.hidden = [];
jei.expert.fluids.hidden = [];
jei.expert.categories.hidden = [];
jei.expert.recipes.hidden = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            'naturesaura:gold_fiber',
            'naturesaura:wood_stand',
            'naturesaura:offering_table',
            'naturesaura:flower_generator',
            'naturesaura:oak_generator',
            'naturesaura:slime_split_generator',
            'naturesaura:animal_generator',
            'naturesaura:chorus_generator',
            'naturesaura:moss_generator',
            'naturesaura:loot_finder',
            'naturesaura:light_staff',
            'naturesaura:cave_finder',
            'naturesaura:pet_reviver',
            'naturesaura:shockwave_creator'
        ]
    },
    {
        category: 'naturesaura:altar',
        recipes_by_id: ['naturesaura:altar/infused_stone']
    },
    {
        category: 'naturesaura:tree_ritual',
        recipes_by_id: [
            'naturesaura:tree_ritual/ore_spawn_powder',
            'naturesaura:tree_ritual/crushing_catalyst',
            'naturesaura:tree_ritual/conversion_catalyst',
            'naturesaura:tree_ritual/nature_altar',
            'naturesaura:tree_ritual/token_sorrow',
            'naturesaura:tree_ritual/token_anger',
            'naturesaura:tree_ritual/token_fear',
            'naturesaura:tree_ritual/token_joy'
        ]
    },
    {
        category: 'naturesaura:offering',
        recipes_by_id: [
            'naturesaura:offering/token_grief',
            'naturesaura:offering/token_rage',
            'naturesaura:offering/token_terror',
            'naturesaura:offering/token_euphoria',
            'naturesaura:offering/sky_ingot_from_gold'
        ]
    }
];
