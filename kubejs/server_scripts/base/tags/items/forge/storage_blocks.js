ServerEvents.tags('item', (event) => {
    let storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, ['minecraft:glowstone']);
    event.add(`${storageBlocks}/glowstone`, 'minecraft:glowstone');

    blueSkiesMetals.forEach((material) => {
        event.add(storageBlocks, `blue_skies:${material}_block`);
        event.add(`${storageBlocks}/${material}`, `blue_skies:${material}_block`);
        event.removeAll(`blue_skies:storage_blocks/${material}`);
    });

    blueSkiesGems.forEach((material) => {
        event.add(storageBlocks, `blue_skies:${material}_block`);
        event.add(`${storageBlocks}/${material}`, `blue_skies:${material}_block`);
        event.removeAll(`blue_skies:storage_blocks/${material}`);
    });
});
