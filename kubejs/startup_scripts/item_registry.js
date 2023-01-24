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
        'ritual_teleport_everbright'
    ];

    const reusableItemTextures = [
        { name: 'altered_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'disabled_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'summon_death_tome', texture: 'ritual_dummy' },
        { name: 'spell_night_vision', texture: 'ritual_dummy' },
        { name: 'teleport_everdawn', texture: 'ritual_dummy' },
        { name: 'teleport_everbright', texture: 'ritual_dummy' }
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
