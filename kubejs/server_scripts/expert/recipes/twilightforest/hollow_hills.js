ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            name: 'small_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:redstone_ore_stalactite',
                'twilightforest:lapis_ore_stalactite',
                'twilightforest:emerald_ore_stalactite',

                'twilightforest:gold_ore_stalactite',
                'twilightforest:silver_ore_stalactite',
                'twilightforest:copper_ore_stalactite'
            ]
        },
        {
            name: 'medium_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:redstone_ore_stalactite',
                'twilightforest:lapis_ore_stalactite',
                'twilightforest:emerald_ore_stalactite',

                'twilightforest:gold_ore_stalactite',
                'twilightforest:iron_ore_stalactite',
                'twilightforest:silver_ore_stalactite',
                'twilightforest:copper_ore_stalactite',
                'twilightforest:tin_ore_stalactite'
            ]
        },
        {
            name: 'large_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:emerald_ore_stalactite',
                'twilightforest:diamond_ore_stalactite',

                'twilightforest:gold_ore_stalactite',
                'twilightforest:iron_ore_stalactite',
                'twilightforest:silver_ore_stalactite',
                'twilightforest:copper_ore_stalactite',
                'twilightforest:tin_ore_stalactite'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`twilightforest:stalactites/${recipe.name}.json`, recipe);
    });
});
