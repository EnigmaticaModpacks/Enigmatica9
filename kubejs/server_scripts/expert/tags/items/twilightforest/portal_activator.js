ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.get('twilightforest:portal/activator').removeAll();
});
