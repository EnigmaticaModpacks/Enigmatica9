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
        'alchemists_delight'
    ];

    const ritualDummies = [];

    const reusableItemTextures = [
        { name: 'altered_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'disabled_recipe_indicator', texture: 'enigmatica_tree' },
        { name: 'summon_death_tome', texture: 'enigmatica_tree' }
    ];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });

    ritualDummies.forEach((item) => {
        event.create(item).type('occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/pentacle');
    });

    reusableItemTextures.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });
});
