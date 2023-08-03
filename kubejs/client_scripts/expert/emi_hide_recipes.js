ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Filters
    if (global.isExpertMode == false) {
        return;
    }
    const modes = ['base', 'expert'];
    const payload = { filters: [] };

    modes.forEach((mode) => {
        jei[mode].recipes.hidden.forEach((recipe) => {
            recipe.recipes_by_id.forEach((id) => {
                if (!recipe.category.startsWith('minecraft')) {
                    id = `jei:/${id.replace(':', '/')}`;
                }
                payload.filters.push({ id: id });
            });
        });
    });

    JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hidden_recipes.json`, payload);
});
