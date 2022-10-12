ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const items = ['naturesaura:infused_iron'];
    event.add('lychee:fire_immune', items);
});
