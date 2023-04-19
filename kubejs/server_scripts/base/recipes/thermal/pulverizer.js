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
            input: '#forge:gems/coal',
            outputs: [{ item: 'emendatusenigmatica:coal_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}coal_dust`
        },
        {
            input: '#forge:ingots/copper',
            outputs: [{ item: 'emendatusenigmatica:copper_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}copper_dust`
        },
        {
            input: '#forge:ingots/gold',
            outputs: [{ item: 'emendatusenigmatica:gold_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}gold_dust`
        },
        {
            input: '#forge:ingots/iron',
            outputs: [{ item: 'emendatusenigmatica:iron_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}iron_dust`
        },
        {
            input: '#forge:gems/dimensional',
            outputs: [{ item: 'emendatusenigmatica:dimensional_dust', count: 1 }],
            energy: 4000,
            id: `${id_prefix}dimensional_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
