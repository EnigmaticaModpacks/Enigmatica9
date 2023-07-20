ClientEvents.highPriorityAssets((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const payload = { filters: [] };
    const modes = ['base', 'expert'];
    const types = ['hidden', 'disabled'];

    modes.forEach((mode) => {
        types.forEach((type) => {
            payload.filters.concat(jei[mode].items[type]);
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hide_items.json`, payload);
});
