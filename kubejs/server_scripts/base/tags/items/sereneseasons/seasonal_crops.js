ServerEvents.tags('item', (event) => {
    event.removeAll('sereneseasons:summer_crops');
    event.removeAll('sereneseasons:autumn_crops');
    event.removeAll('sereneseasons:spring_crops');
    event.removeAll('sereneseasons:winter_crops');
});
