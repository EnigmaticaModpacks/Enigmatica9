ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Category-Properties
    if (global.isNormalMode == false) {
        return;
    }
    const modes = ['base', 'expert'];
    const payload = { filters: [] };

    modes.forEach((mode) => {
        jei[mode].categories.hidden.forEach((category) => {
            payload.filters.push({ category: category });
        });
    });
    JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hidden_categories.json`, payload);
});
