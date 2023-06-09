ServerEvents.tags('item', (event) => {
    event.get('twilightforest:trophies').add(/twilightforest:.*_trophy/);
});
