ClientEvents.highPriorityAssets((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const payload = {
        filters: []
    };
    jei.expert.recipes.hidden.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            payload.filters.push({ id: `jei:/${id.replace(':', '/')}` });
        });
    });
    JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hide_recipes.json`, payload);
});
