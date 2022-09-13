ServerEvents.tags('block', (event) => {
    event.add('forge:storage_blocks', ['minecraft:glowstone']);

    event.add('forge:storage_blocks/glowstone', ['minecraft:glowstone']);

    blueSkiesMetals.forEach((material) => {
        event.add('forge:storage_blocks', `blue_skies:${material}_block`);
        event.add(`forge:storage_blocks/${material}`, `blue_skies:${material}_block`);
        event.removeAll(`blue_skies:storage_blocks/${material}`);
    });
});
