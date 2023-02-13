ServerEvents.tags('block', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.get('create:windmill_sails').remove(['#minecraft:wool']);
});
