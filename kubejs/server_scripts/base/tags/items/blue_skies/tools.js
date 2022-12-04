ServerEvents.tags('item', (event) => {
    event.removeAll('blue_skies:tools');
    event.removeAll(`blue_skies:tools/swords`);
    event.removeAll(`blue_skies:tools/pickaxes`);
    event.removeAll(`blue_skies:tools/axes`);
    event.removeAll(`blue_skies:tools/hoes`);
    event.removeAll(`blue_skies:tools/shovels`);
});
