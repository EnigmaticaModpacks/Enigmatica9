//priority: 900
StartupEvents.registry('item', (event) => {
    const items = [
        'common_lootbox',
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'miners_delight',
        'sorcerers_delight',
        'farmers_delight',
        'blacksmiths_delight',
        'scavengers_delight',
        'alchemists_delight',
        'amethyst_dust',
        'subzero_dust',
        'therium_dust',
        'aura_leaf',
        'crude_iron_ingot',
        'red_nether_brick',
        'kaolin_clay',
        'calcined_kaolin_pearl',
        'kaolin_powder',
        'mystery_mash',
        'energetic_transference_matrix',
        'dimensional_storage_crystal',
        'magebloom_filter',
        'saturated_magebloom_filter',
        'dream_stone',
        'dim_arcanite_crystal',
        'bright_arcanite_crystal',
        'iridescent_arcanite_crystal',
        'sylvanite',
        'mote_of_renewal',
        'mote_of_enduring',
        'mote_of_rebirth',
        'mote_of_wisdom',
        'shard_of_renewal',
        'shard_of_enduring',
        'shard_of_rebirth',
        'shard_of_wisdom',
        'mastery_token_air',
        'mastery_token_earth',
        'mastery_token_fire',
        'mastery_token_water',
        'primordial_seed',
        'withered_soul',
        'genius_loci'
    ];

    const ritualDummies = [
        'ritual_teleport_nether',
        'ritual_teleport_overworld',
        'ritual_teleport_end',
        'ritual_tree_of_life_1',
        'ritual_tree_of_life_2',
        'ritual_tree_of_life_3',
        'ritual_tree_of_life_4',
        'ritual_summon_wixie',
        'ritual_summon_wixie_from_shards',
        'ritual_summon_amethyst_golem',
        'ritual_summon_bookwyrm',
        'ritual_summon_starbuncle',
        'ritual_summon_starbuncle_from_shards',
        'ritual_summon_drygmy',
        'ritual_summon_drygmy_from_shards',
        'ritual_summon_whirlisprig',
        'ritual_summon_whirlisprig_from_shards',
        'ritual_summon_firenando',
        'ritual_summon_siren',
        'ritual_summon_siren_from_shards',
        'ritual_summon_crow',
        'ritual_summon_pumpkin_warden',
        'ritual_summon_cactem',
        'ritual_summon_allay',
        'ritual_summon_bound_blaze',
        'ritual_summon_bound_blitz',
        'ritual_summon_bound_basalz',
        'ritual_summon_bound_blizz',
        'ritual_craft_willow_broom',
        'ritual_craft_witch_hazel_broom',
        'ritual_craft_archwood_broom',
        'ritual_craft_mahogany_broom',
        'ritual_craft_blaze_burner',
        'ritual_craft_module_expansion_card',
        'ritual_craft_energetic_transference_matrix',
        'ritual_craft_controller',
        'ritual_craft_ore_laser_base',
        'ritual_craft_fluid_laser_base',
        'ritual_craft_flux_compressor',
        'ritual_craft_electric_motor',
        'ritual_craft_component_electronic',
        'ritual_craft_jet_boots_upgrade_3',
        'ritual_of_enduring_flight',
        'ritual_craft_sps_port',
        'ritual_craft_energizing_orb',
        'ritual_craft_tree_of_life_trophy',
        'ritual_craft_market'
    ];

    const reusableItemTextures = [
        { name: 'altered_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'disabled_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'teleport_overworld', texture: 'ritual_dummy' },
        { name: 'teleport_end', texture: 'ritual_dummy' },
        { name: 'teleport_nether', texture: 'ritual_dummy' },
        { name: 'tree_of_life_1', texture: 'enigmatica_tree' },
        { name: 'tree_of_life_2', texture: 'enigmatica_tree' },
        { name: 'tree_of_life_3', texture: 'enigmatica_tree' },
        { name: 'tree_of_life_4', texture: 'enigmatica_tree' }
    ];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });

    reusableItemTextures.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });

    ritualDummies.forEach((item) => {
        event.create(item, 'occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/ritual_dummy');
    });

    // Special Items
    event.create('spirit_of_devotion').group('KubeJS').texture(`kubejs:item/spirit_of_devotion`).glow(true);
    event.create('heart_of_the_inferno').group('KubeJS').texture(`kubejs:item/heart_of_the_inferno`).rarity('uncommon');
    event
        .create('heart_of_the_mountain')
        .group('KubeJS')
        .texture(`kubejs:item/heart_of_the_mountain`)
        .rarity('uncommon');
    event.create('heart_of_the_tempest').group('KubeJS').texture(`kubejs:item/heart_of_the_tempest`).rarity('uncommon');
    event.create('heart_of_the_sea').group('KubeJS').texture(`kubejs:item/heart_of_the_sea`).rarity('uncommon');
    event.create('primed_aetheric_heart').group('KubeJS').texture(`kubejs:item/primed_aetheric_heart`).rarity('rare');
});
