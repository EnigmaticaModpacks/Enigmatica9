MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            professions: ['ae2:fluix_researcher', 'immersiveengineering:electrician', 'immersiveengineering:machinist'],
            levels: ['all'],
            vanilla: true,
            modded: true
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.levels == 'all') {
            recipe.levels = [1, 2, 3, 4, 5];
        }

        recipe.levels.forEach((level) => {
            if (recipe.vanilla) event.removeVanillaTrades(recipe.professions, level);
            if (recipe.modded) event.removeModdedTrades(recipe.professions, level);
        });
    });
});
