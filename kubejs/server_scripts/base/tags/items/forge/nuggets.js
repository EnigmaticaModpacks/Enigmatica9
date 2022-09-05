ServerEvents.tags('item', (event) => {
    blueSkiesMetals.forEach((material) => {
        event.add('forge:nuggets', `blue_skies:${material}_nugget`);
        event.add(`forge:nuggets/${material}`, `blue_skies:${material}_nugget`);
        event.removeAll(`blue_skies:nuggets/${material}`);
    });
});
