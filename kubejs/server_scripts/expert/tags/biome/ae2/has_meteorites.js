ServerEvents.tags('biome', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.get('ae2:has_meteorites').removeAll();
});
