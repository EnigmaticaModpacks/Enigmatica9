ServerEvents.highPriorityData((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            name: 'small_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:glowstone_stalactite',
                'twilightforest:coal_ore_stalactite',

                'twilightforest:copper_ore_stalactite',
                'twilightforest:iron_ore_stalactite',
                'twilightforest:tin_ore_stalactite'
            ]
        },
        {
            name: 'medium_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:redstone_ore_stalactite',

                'twilightforest:aluminum_ore_stalactite',
                'twilightforest:nickel_ore_stalactite',
                'twilightforest:gold_ore_stalactite',
                'twilightforest:lead_ore_stalactite'
            ]
        },
        {
            name: 'large_hollow_hill',
            replace: true,
            stalactites: [
                'twilightforest:emerald_ore_stalactite',
                'twilightforest:diamond_ore_stalactite',
                'twilightforest:lapis_ore_stalactite',

                'twilightforest:uranium_ore_stalactite',
                'twilightforest:silver_ore_stalactite',
                'twilightforest:osmium_ore_stalactite'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`twilightforest:stalactites/${recipe.name}.json`, recipe);
    });
});
