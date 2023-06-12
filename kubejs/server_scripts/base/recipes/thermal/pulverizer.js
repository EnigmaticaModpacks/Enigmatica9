ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer/';

    const recipes = [
        // {
        //     input: '#minecraft:logs',
        //     outputs: [{ item: sawdust, count: 8 }],
        //     energy: 1000,
        //     id: `${id_prefix}sawdust_from_logs`
        // }
        {
            input: '#minecraft:leaves',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}leaves`
        },
        {
            input: '#forge:seeds',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 0.6 }],
            energy: 2000,
            id: `${id_prefix}seeds`
        },
        {
            input: '#minecraft:small_flowers',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 0.6 }],
            energy: 2000,
            id: `${id_prefix}small_flowers`
        },
        {
            input: '#minecraft:tall_flowers',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}tall_flowers`
        },
        {
            input: '#forge:mushrooms',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 1.8 }],
            energy: 6000,
            id: `${id_prefix}mushrooms`
        },
        {
            input: '#minecraft:saplings',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}saplings`
        },
        {
            input: '#forge:crops',
            outputs: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}crops`
        },
        {
            input: 'minecraft:obsidian',
            outputs: [
                { item: 'create:powdered_obsidian', count: 1 },
                { item: 'minecraft:obsidian', chance: 0.15 }
            ],
            energy: 4000,
            id: `${id_prefix}powdered_obsidian`
        },
        {
            input: 'minecraft:moss_block',
            outputs: [
                { item: 'quark:moss_paste', count: 2 },
                { item: 'quark:moss_paste', chance: 0.1 }
            ],
            energy: 500,
            id: `${id_prefix}moss_paste`
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
            input: `#forge:sandstone/${color}`,
            outputs: [
                { item: output, count: 2 },
                { item: 'emendatusenigmatica:niter_gem', chance: 0.3 }
            ],
            energy: 4000,
            id: `${id_prefix}niter_gem_from_${color}_sandstone`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
