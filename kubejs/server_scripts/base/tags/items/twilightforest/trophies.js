ServerEvents.tags('item', (event) => {
    event.get('twilightforest:trophies').add(/twilightforest:.*trophy/);
});
