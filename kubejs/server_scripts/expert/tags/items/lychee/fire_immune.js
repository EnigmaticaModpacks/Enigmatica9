ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const items = [];
    event.add('lychee:fire_immune', items);
});
