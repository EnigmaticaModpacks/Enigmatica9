ServerEvents.tags('item', (event) => {
    event.get('forge:stone').add(stones).remove('#pneumaticcraft:compressed_stone');
});
