ServerEvents.tags('item', (event) => {
    event
        .get('enigmatica:containers/bags')
        .add([
            /sophisticatedbackpacks:.*backpack/,
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
