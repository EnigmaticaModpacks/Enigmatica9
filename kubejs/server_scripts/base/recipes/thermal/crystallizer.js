ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/crystallizer/';

    const recipes = [
        {
            inputs: ['#forge:dusts/dimensional'],
            fluid: Fluid.of('minecraft:water', 1000),
            outputs: [Item.of('rftoolsbase:dimensionalshard')],
            energy: 2500,
            id: `${id_prefix}dimensional_shard_from_dust`
        },
        {
            inputs: ['#forge:dusts/fluorite'],
            fluid: Fluid.of('minecraft:water', 1000),
            outputs: [Item.of('emendatusenigmatica:fluorite_gem')],
            energy: 2500,
            id: `${id_prefix}fluorite_shard_from_dust`
        },
        {
            inputs: ['#forge:dusts/therium'],
            fluid: Fluid.of('minecraft:water', 1000),
            outputs: [Item.of('byg:therium_crystal_shard')],
            energy: 2500,
            id: `${id_prefix}therium_shard_from_dust`
        },
        {
            inputs: ['#forge:dusts/subzero'],
            fluid: Fluid.of('minecraft:water', 1000),
            outputs: [Item.of('byg:subzero_crystal_shard')],
            energy: 2500,
            id: `${id_prefix}subzero_shard_from_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';

        // "ingredients": [{ "tag": "forge:ingots/copper" }, { "item": "thermal:press_coin_die" }]
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.ingredients.push(recipe.fluid.toJson());
        recipe.result = recipe.outputs.map((output) => output.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
