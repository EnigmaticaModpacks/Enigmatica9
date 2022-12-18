ServerEvents.recipes((event) => {
    const recipes = [
        // Defaults
        /*
        { item: 'minecraft:snowball', amount: 12, temp: -3 },
        { item: 'minecraft:snow_block', amount: 48, temp: -3 },
        { item: 'minecraft:ice', amount: 48, temp: -5 },
        { item: 'minecraft:packed_ice', amount: 192, temp: -8 },
        { item: 'minecraft:blue_ice', amount: 568, temp: -17 },
        { item: 'powah:dry_ice', amount: 712, temp: -32 },
        */

        { item: 'minecraft:snowball', amount: 12, temp: -3 },
        { item: 'minecraft:snow_block', amount: 48, temp: -3 },
        { item: 'minecraft:ice', amount: 48, temp: -5 },
        { item: 'minecraft:packed_ice', amount: 192, temp: -8 },
        { item: 'minecraft:blue_ice', amount: 568, temp: -17 },
        { item: 'powah:dry_ice', amount: 712, temp: -32 },
        { item: 'thermal:blizz_rod', amount: 568, temp: -50 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerSolidCoolant(Item.of(recipe.item).item, recipe.amount, recipe.temp);
    });
});
