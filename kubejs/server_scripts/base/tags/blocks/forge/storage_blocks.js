 ServerEvents.tags('block', event => {
    event.add('forge:storage_blocks', ['minecraft:glowstone']);

    event.add('forge:storage_blocks/glowstone', ['minecraft:glowstone']);
});
