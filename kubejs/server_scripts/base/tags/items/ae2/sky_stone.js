ServerEvents.tags('item', (event) => {
    event.get('forge:stone').add(['ae2:sky_stone_block']);
    event.get('forge:stone/sky_stone').add(['ae2:sky_stone_block']);
    event.get('forge:dusts/sky_stone').add(['ae2:sky_dust']);
});
