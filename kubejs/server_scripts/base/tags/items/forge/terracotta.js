ServerEvents.tags('item', (event) => {
    colors.forEach((color) => {
        event.get(`forge:terracotta/${color}`).add(`minecraft:${color}_terracotta`);
    });
    event.get(`forge:terracotta/plain`).add(`minecraft:terracotta`);
});
