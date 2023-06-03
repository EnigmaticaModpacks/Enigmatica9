ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/crushing/';
    const recipes = [
        {
            output: [
                { item: 'minecraft:blaze_powder', count: 3, chance: 1.0 },
                { item: 'minecraft:blaze_powder', count: 3, chance: 0.25 },
                { item: 'emendatusenigmatica:sulfur_gem', count: 1, chance: 0.25 }
            ],
            input: '#forge:rods/blaze',
            id: `${id_prefix}blaze_powder`
        },
        {
            output: [
                { item: 'thermal:blizz_powder', count: 3, chance: 1.0 },
                { item: 'thermal:blizz_powder', count: 3, chance: 0.25 },
                { item: 'minecraft:snowball', count: 1, chance: 0.25 }
            ],
            input: '#forge:rods/blizz',
            id: `${id_prefix}blizz_powder`
        },
        {
            output: [
                { item: 'thermal:blitz_powder', count: 3, chance: 1.0 },
                { item: 'thermal:blitz_powder', count: 3, chance: 0.25 },
                { item: 'emendatusenigmatica:niter_gem', count: 1, chance: 0.5 }
            ],
            input: '#forge:rods/blitz',
            id: `${id_prefix}blitz_powder`
        },
        {
            output: [
                { item: 'thermal:basalz_powder', count: 3, chance: 1.0 },
                { item: 'thermal:basalz_powder', count: 3, chance: 0.25 },
                { item: 'thermal:slag', count: 1, chance: 0.5 }
            ],
            input: '#forge:rods/basalz',
            id: `${id_prefix}basalz_powder`
        },
        {
            output: [
                { item: 'create:powdered_obsidian', count: 1, chance: 1.0 },
                { item: 'minecraft:obsidian', count: 1, chance: 0.75 }
            ],
            input: 'minecraft:obsidian',
            id: `${id_prefix}powdered_obsidian`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        recipe.input = Ingredient.of(recipe.input).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
