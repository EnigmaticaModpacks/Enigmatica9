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
        'pig_iron_ingot'
    ];

    const ritualDummies = [
        'ritual_summon_death_tome',
        'ritual_spell_night_vision',
        'ritual_teleport_everdawn',
        'ritual_teleport_everbright',
        'ritual_tree_of_life_1',
        'ritual_tree_of_life_2',
        'ritual_tree_of_life_3',
        'ritual_tree_of_life_4',
        'ritual_tree_of_life_5'
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
        { name: 'tree_of_life_4', texture: 'enigmatica_tree' },
        { name: 'tree_of_life_5', texture: 'enigmatica_tree' }
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
