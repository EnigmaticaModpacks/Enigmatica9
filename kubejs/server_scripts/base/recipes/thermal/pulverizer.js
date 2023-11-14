ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer/';

    const recipes = [
        {
            ingredient: { tag: 'forge:rods/blaze' },
            result: [
                { item: 'minecraft:blaze_powder', chance: 3.0 },
                { item: 'emendatusenigmatica:sulfur_gem', chance: 0.25 }
            ],
            energy: 4000,
            id: `thermal:machines/pulverizer/pulverizer_blaze_rod`
        },
        {
            ingredient: { tag: 'forge:rods/blizz' },
            result: [
                { item: 'thermal:blizz_powder', chance: 3.0 },
                { item: 'ae2:certus_quartz_crystal', chance: 0.25 }
            ],
            energy: 4000,
            id: `thermal:machines/pulverizer/pulverizer_blizz_rod`
        },
        {
            ingredient: { tag: 'forge:rods/blitz' },
            result: [
                { item: 'thermal:blitz_powder', chance: 3.0 },
                { item: 'emendatusenigmatica:niter_gem', chance: 0.25 }
            ],
            energy: 4000,
            id: `thermal:machines/pulverizer/pulverizer_blitz_rod`
        },
        {
            ingredient: { tag: 'forge:rods/basalz' },
            result: [
                { item: 'thermal:basalz_powder', chance: 3.0 },
                { item: 'emendatusenigmatica:fluorite_gem', chance: 0.25 }
            ],
            energy: 4000,
            id: `thermal:machines/pulverizer/pulverizer_basalz_rod`
        },
        {
            ingredient: { tag: 'minecraft:leaves' },
            result: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}leaves`
        },
        {
            ingredient: { tag: 'forge:seeds' },
            result: [{ item: 'mekanism:bio_fuel', chance: 0.6 }],
            energy: 2000,
            id: `${id_prefix}seeds`
        },
        {
            ingredient: { tag: 'minecraft:small_flowers' },
            result: [{ item: 'mekanism:bio_fuel', chance: 0.6 }],
            energy: 2000,
            id: `${id_prefix}small_flowers`
        },
        {
            ingredient: { tag: 'minecraft:tall_flowers' },
            result: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}tall_flowers`
        },
        {
            ingredient: { tag: 'forge:mushrooms' },
            result: [{ item: 'mekanism:bio_fuel', chance: 1.8 }],
            energy: 6000,
            id: `${id_prefix}mushrooms`
        },
        {
            ingredient: { tag: 'minecraft:saplings' },
            result: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}saplings`
        },
        {
            ingredient: { tag: 'forge:crops' },
            result: [{ item: 'mekanism:bio_fuel', chance: 1.2 }],
            energy: 4000,
            id: `${id_prefix}crops`
        },
        {
            ingredient: { item: 'minecraft:obsidian' },
            result: [
                { item: 'create:powdered_obsidian', count: 1 },
                { item: 'minecraft:obsidian', chance: 0.15 }
            ],
            energy: 4000,
            id: `${id_prefix}powdered_obsidian`
        },
        {
            ingredient: { item: 'minecraft:moss_block' },
            result: [
                { item: 'quark:moss_paste', count: 2 },
                { item: 'quark:moss_paste', chance: 0.1 }
            ],
            energy: 500,
            id: `${id_prefix}moss_paste`
        },
        {
            ingredient: { tag: 'forge:crops/wheat' },
            result: [
                { item: 'create:wheat_flour', count: 1 },
                { item: 'create:wheat_flour', count: 2, chance: 0.25 },
                { item: 'minecraft:wheat_seeds', chance: 0.25 }
            ],
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
            ingredient: { tag: `forge:sandstone/${color}` },
            result: [
                { item: output, count: 2 },
                { item: 'emendatusenigmatica:niter_gem', chance: 0.3 }
            ],
            energy: 4000,
            id: `${id_prefix}niter_gem_from_${color}_sandstone`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        event.custom(recipe).id(recipe.id);
    });
});
