ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/spirit/soul_cage_tier/';
    const recipes = [
        {
            displayName: 'spirit.soul_cage.tier_1',
            requiredSouls: 8,
            minSpawnDelay: 300,
            maxSpawnDelay: 1000,
            spawnCount: 3,
            spawnRange: 5,
            id: `spirit:tiers/tier_1`
        },
        {
            displayName: 'spirit.soul_cage.tier_2',
            requiredSouls: 32,
            minSpawnDelay: 150,
            maxSpawnDelay: 600,
            spawnCount: 5,
            spawnRange: 7,
            id: `spirit:tiers/tier_2`
        },
        {
            displayName: 'spirit.soul_cage.tier_3',
            requiredSouls: 128,
            minSpawnDelay: 75,
            maxSpawnDelay: 400,
            spawnCount: 7,
            spawnRange: 9,
            id: `spirit:tiers/tier_3`
        },
        {
            displayName: 'spirit.soul_cage.tier_4',
            requiredSouls: 512,
            minSpawnDelay: 25,
            maxSpawnDelay: 300,
            spawnCount: 9,
            spawnRange: 11,
            id: `spirit:tiers/tier_4`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'spirit:soul_cage_tier';

        // All tiers can be controlled by redstone, ignore spawn conditions, and don't require a player nearby.
        // Blacklist is covered by tags already.
        recipe.nearbyRange = -1;
        recipe.redstoneControlled = true;
        recipe.ignoreSpawnConditions = true;
        recipe.blacklist = [];

        event.custom(recipe).id(recipe.id);
    });
});
