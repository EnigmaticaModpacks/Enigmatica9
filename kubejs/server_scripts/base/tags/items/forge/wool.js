ServerEvents.tags('item', (event) => {
    colors.forEach((color) => {
        event.get(`forge:wool`).add(`minecraft:${color}_wool`);
        event.get(`forge:wool/${color}`).add(`minecraft:${color}_wool`);
    });
});
