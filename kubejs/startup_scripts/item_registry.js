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
        'aura_leaf',
        'pig_iron_ingot',
        'red_nether_brick',
        'kaolin_clay',
        'calcined_kaolin_pearls',
        'kaolin_powder',
        'mystery_mash'
    ];

    const ritualDummies = [
        'ritual_summon_death_tome',
        'ritual_teleport_everdawn',
        'ritual_teleport_everbright',
        'ritual_tree_of_life_1',
        'ritual_tree_of_life_2',
        'ritual_tree_of_life_3',
        'ritual_tree_of_life_4',
        'ritual_summon_wixie',
        'ritual_summon_wixie_from_shards',
        'ritual_summon_amethyst_golem',
        'ritual_summon_starbuncle',
        'ritual_summon_starbuncle_from_shards',
        'ritual_summon_crow',
        'ritual_summon_bound_blaze',
        'ritual_summon_bound_blitz',
        'ritual_summon_bound_basalz',
        'ritual_summon_bound_blizz',
        'ritual_craft_willow_broom',
        'ritual_craft_blaze_burner',
        'ritual_craft_module_expansion_card'
    ];

    const reusableItemTextures = [
        { name: 'altered_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'disabled_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'summon_death_tome', texture: 'ritual_dummy' },
        { name: 'spell_night_vision', texture: 'ritual_dummy' },
        { name: 'teleport_everdawn', texture: 'ritual_dummy' },
        { name: 'teleport_everbright', texture: 'ritual_dummy' },
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
});
