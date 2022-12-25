ServerEvents.tags('item', (event) => {
    event.get('enigmatica:containers/bags').add([
        /bit_bag/,
        /sophisticatedbackpacks:.*backpack/,
        // 'botania:bauble_box',
        // 'botania:ender_hand',
        // 'botania:flower_bag',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack',
        'thermal:satchel',
        'occultism:satchel',
        'hexerei:small_satchel',
        'hexerei:medium_satchel',
        'hexerei:large_satchel',
        '#create:toolboxes'
    ]);
});
