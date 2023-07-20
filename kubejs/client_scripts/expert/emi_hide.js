ClientEvents.highPriorityAssets((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    jei.expert.recipes.hidden.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            event.add(`emi:recipe/filters/${id.replace(/(\/|:)/g, '_')}`, {
                filters: [{ id: `jei:/${id.replace(':', '/')}` }]
            });
        });
    });
});
