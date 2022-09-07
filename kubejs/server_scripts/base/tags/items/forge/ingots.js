ServerEvents.tags('item', (event) => {
    blueSkiesMetals.forEach((material) => {
        event.add('forge:ingots', `blue_skies:${material}_ingot`);
        event.add(`forge:ingots/${material}`, `blue_skies:${material}_ingot`);
        event.removeAll(`blue_skies:ingots/${material}`);
    });
});
