ServerEvents.tags('item', (event) => {
    event.get('forge:foods/meat/raw').add(['twilightforest:raw_venison', 'twilightforest:raw_meef']);

    event.get('forge:foods/meat/cooked').add(['twilightforest:cooked_venison', 'twilightforest:cooked_meef']);
});
