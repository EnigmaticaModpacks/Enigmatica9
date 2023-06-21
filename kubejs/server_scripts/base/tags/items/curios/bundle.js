ServerEvents.tags('item', (event) => {
    // Note: Minecraft Bundles are obtainable through a few intentional methods, but do not work well with curio slots.
    event.get('curios:bundle').remove('minecraft:bundle');
});
