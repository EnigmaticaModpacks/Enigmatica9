ClientEvents.highPriorityAssets((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const payload = { filters: [] };
    const modes = ['base', 'expert'];

    modes.forEach((mode) => {
        jei[mode].categories.hidden.forEach((category) => {
            payload.filters.push({ category: category });
        });
    });
    JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hide_categories.json`, payload);
});
