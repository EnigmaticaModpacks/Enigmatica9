ServerEvents.tags('item', (event) => {
    colors.forEach((color) => {
        event.get(`forge:glazed_terracotta/${color}`).add(`minecraft:${color}_glazed_terracotta`);
        event.get(`forge:glazed_terracotta`).add(`minecraft:${color}_glazed_terracotta`);
    });
});
