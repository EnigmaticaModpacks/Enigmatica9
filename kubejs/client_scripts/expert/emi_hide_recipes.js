ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Filters
    if (global.isExpertMode == false) {
        return;
    }
    const payload = { filters: [] };
    const modes = ['base', 'expert'];

    modes.forEach((mode) => {
        jei[mode].recipes.hidden.forEach((recipe) => {
            recipe.recipes_by_id.forEach((id) => {
                payload.filters.push({ id: `jei:/${id.replace(':', '/')}` });
            });
        });
    });

    JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hide_recipes.json`, payload);
});
