ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/pulverizer/';

    const recipes = [
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
        },
        {
            input: '#forge:ores/netherite',
            outputs: [{ item: 'mekanism:dirty_netherite_scrap', count: 1, chance: 1 }],
            energy: 4000,
            id: `${id_prefix}netherite_scrap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
