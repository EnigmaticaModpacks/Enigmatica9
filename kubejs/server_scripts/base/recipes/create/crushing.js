ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/crushing/';

    let recipes = [
        {
            outputs: [
                { item: 'minecraft:blaze_powder', count: 3 },
                { item: 'minecraft:blaze_powder', count: 3, chance: 0.25 },
                { item: 'emendatusenigmatica:sulfur_gem', count: 1, chance: 0.25 }
            ],
            inputs: ['#forge:rods/blaze'],
            processingTime: 60,
            id: `${id_prefix}blaze_powder`
        },
        {
            outputs: [
                { item: 'thermal:blizz_powder', count: 3 },
                { item: 'thermal:blizz_powder', count: 3, chance: 0.25 },
                { item: 'minecraft:snowball', count: 1, chance: 0.25 }
            ],
            inputs: ['#forge:rods/blizz'],
            processingTime: 60,
            id: `${id_prefix}blizz_powder`
        },
        {
            outputs: [
                { item: 'thermal:blitz_powder', count: 3 },
                { item: 'thermal:blitz_powder', count: 3, chance: 0.25 },
                { item: 'emendatusenigmatica:niter_gem', count: 1, chance: 0.5 }
            ],
            inputs: ['#forge:rods/blitz'],
            processingTime: 60,
            id: `${id_prefix}blitz_powder`
        },
        {
            outputs: [
                { item: 'thermal:basalz_powder', count: 3 },
                { item: 'thermal:basalz_powder', count: 3, chance: 0.25 },
                { item: 'thermal:slag', count: 1, chance: 0.5 }
            ],
            inputs: ['#forge:rods/basalz'],
            processingTime: 60,
            id: `${id_prefix}basalz_powder`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:crushing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
