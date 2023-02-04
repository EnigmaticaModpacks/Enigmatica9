ServerEvents.tags('item', (event) => {
    const items = ['thermal:explosive_grenade'];
    event.get('lychee:item_exploding_catalysts').add(items);
    event.get('lychee:block_exploding_catalysts').add(items);
});
