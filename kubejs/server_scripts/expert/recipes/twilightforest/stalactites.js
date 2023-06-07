ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        { ore: 'minecraft:amethyst_block', max_length: 10, size_variation: 0.8, weight: 50 },
        { ore: 'ae2:quartz_block', max_length: 10, size_variation: 0.8, weight: 50 },
        { ore: 'minecraft:calcite', max_length: 9, size_variation: 0.7, weight: 15 }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`twilightforest:stalactites/entries/${recipe.ore.split(':')[1]}_stalactite.json`, recipe);
    });
});
