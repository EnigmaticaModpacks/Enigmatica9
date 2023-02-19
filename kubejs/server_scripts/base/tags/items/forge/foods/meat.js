ServerEvents.tags('item', (event) => {
    event
        .get('forge:foods/meat/raw')
        .add(['blue_skies:carabeef', 'blue_skies:venison', 'twilightforest:raw_venison', 'twilightforest:raw_meef']);

    event
        .get('forge:foods/meat/cooked')
        .add([
            'blue_skies:cooked_carabeef',
            'blue_skies:cooked_venison',
            'twilightforest:cooked_venison',
            'twilightforest:cooked_meef'
        ]);
});
