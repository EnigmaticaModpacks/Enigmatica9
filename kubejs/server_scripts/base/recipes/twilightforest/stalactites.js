ServerEvents.highPriorityData((event) => {
    const recipes = [
        { ore: 'emendatusenigmatica:redstone_ore', max_length: 8, size_variation: 0.8, weight: 40 },
        { ore: 'emendatusenigmatica:diamond_ore', max_length: 6, size_variation: 0.5, weight: 30 },
        { ore: 'emendatusenigmatica:emerald_ore', max_length: 6, size_variation: 0.5, weight: 15 },
        { ore: 'emendatusenigmatica:lapis_ore', max_length: 8, size_variation: 0.8, weight: 26 },
        { ore: 'emendatusenigmatica:coal_ore', max_length: 10, size_variation: 0.8, weight: 40 },

        { ore: 'emendatusenigmatica:copper_ore', max_length: 8, size_variation: 0.6, weight: 20 },
        { ore: 'emendatusenigmatica:silver_ore', max_length: 7, size_variation: 0.7, weight: 30 },
        { ore: 'emendatusenigmatica:gold_ore', max_length: 7, size_variation: 0.6, weight: 24 },
        { ore: 'emendatusenigmatica:iron_ore', max_length: 10, size_variation: 0.7, weight: 20 },
        { ore: 'emendatusenigmatica:tin_ore', max_length: 10, size_variation: 0.9, weight: 20 },

        { ore: 'emendatusenigmatica:aluminum_ore', max_length: 8, size_variation: 0.7, weight: 30 },
        { ore: 'emendatusenigmatica:uranium_ore', max_length: 12, size_variation: 0.4, weight: 10 },
        { ore: 'emendatusenigmatica:nickel_ore', max_length: 8, size_variation: 0.9, weight: 30 },
        { ore: 'emendatusenigmatica:osmium_ore', max_length: 10, size_variation: 0.8, weight: 15 },
        { ore: 'emendatusenigmatica:lead_ore', max_length: 9, size_variation: 0.7, weight: 15 }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`twilightforest:stalactites/entries/${recipe.ore.split(':')[1]}_stalactite.json`, recipe);
    });
});
