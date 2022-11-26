ServerEvents.tags('item', (event) => {
    const items = [
        /bit_bag/,
        /sophisticatedbackpacks:.*backpack/,
        // 'botania:bauble_box',
        // 'botania:ender_hand',
        // 'botania:flower_bag',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack',
        // 'thermal:satchel',
        'occultism:satchel',
        // 'hexerei:small_satchel',
        // 'hexerei:medium_satchel',
        // 'hexerei:large_satchel',
        '#create:toolboxes'
    ];

    const tagGroups = ['enigmatica:containers', 'enigmatica:containers/bag'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items);
    });
});
