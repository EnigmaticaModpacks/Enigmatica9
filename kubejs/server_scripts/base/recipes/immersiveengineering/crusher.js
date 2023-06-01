ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/crusher/';

    const recipes = [
        {
            output: '3x minecraft:blaze_powder',
            secondaries: [
                { output: { item: 'minecraft:blaze_powder', count: 3 }, chance: 0.25 },
                { output: { item: 'emendatusenigmatica:sulfur_gem', count: 1 }, chance: 0.25 }
            ],
            input: '#forge:rods/blaze',
            energy: 500,
            id: `${id_prefix}blaze_powder`
        },
        {
            output: '3x thermal:blizz_powder',
            secondaries: [
                { output: { item: 'thermal:blizz_powder', count: 3 }, chance: 0.25 },
                { output: { item: 'minecraft:snowball', count: 1 }, chance: 0.25 }
            ],
            input: '#forge:rods/blizz',
            energy: 500,
            id: `${id_prefix}blizz_powder`
        },
        {
            output: '3x thermal:blitz_powder',
            secondaries: [
                { output: { item: 'thermal:blitz_powder', count: 3 }, chance: 0.25 },
                { output: { item: 'emendatusenigmatica:niter_gem', count: 1 }, chance: 0.5 }
            ],
            input: '#forge:rods/blitz',
            energy: 500,
            id: `${id_prefix}blitz_powder`
        },
        {
            output: '3x thermal:basalz_powder',
            secondaries: [
                { output: { item: 'thermal:basalz_powder', count: 3 }, chance: 0.25 },
                { output: { item: 'thermal:slag', count: 1 }, chance: 0.5 }
            ],
            input: '#forge:rods/basalz',
            energy: 500,
            id: `${id_prefix}basalz_powder`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
