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
        },
        {
            output: 'create:powdered_obsidian',
            secondaries: [{ output: { item: 'minecraft:obsidian', count: 1 }, chance: 0.75 }],
            input: 'minecraft:obsidian',
            energy: 2000,
            id: `${id_prefix}powdered_obsidian`
        },
        {
            output: 'create:wheat_flour',
            secondaries: [
                { output: { item: 'create:wheat_flour', count: 2 }, chance: 0.25 },
                { output: { item: 'minecraft:wheat_seeds', count: 1 }, chance: 0.25 }
            ],
            input: 'minecraft:obsidian',
            energy: 500,
            id: `${id_prefix}wheat_flour`
        }
    ];

    sandstone_colors.forEach((color) => {
        let output = '';

        if (color == 'colorless') {
            output = 'minecraft:sand';
        } else if (color == 'red') {
            output = 'minecraft:red_sand';
        } else {
            output = `byg:${color}_sand`;
        }

        recipes.push({
            output: `2x ${output}`,
            secondaries: [{ output: { item: 'emendatusenigmatica:niter_gem', count: 1 }, chance: 0.5 }],
            input: `#forge:sandstone/${color}`,
            energy: 4000,
            id: `${id_prefix}niter_gem_from_${color}_sandstone`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
