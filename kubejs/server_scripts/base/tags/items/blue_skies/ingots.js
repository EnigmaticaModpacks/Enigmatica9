ServerEvents.tags('item', (event) => {
    event.removeAll(`blue_skies:ingots`);
    // event.removeAll(`blue_skies:ingots/falsite`);
    event.removeAll(`blue_skies:ingots/ventium`);
    event.removeAll(`blue_skies:ingots/horizonite`);
});
