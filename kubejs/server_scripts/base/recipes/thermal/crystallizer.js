ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/crystallizer/';

    const recipes = [
        {
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:dusts/amethyst'],
            fluid: Fluid.of('minecraft:water', 2000),
            outputs: [Item.of('ae2:fluix_crystal', 2)],
            energy: 20000,
            id: `${id_prefix}fluix_crystal_from_amethyst_dust`
        },
        {
            inputs: ['ae2:charged_certus_quartz_crystal', 'ae2:fluix_dust'],
            fluid: Fluid.of('minecraft:water', 1000),
            outputs: [Item.of('ae2:fluix_crystal')],
            energy: 10000,
            id: `${id_prefix}fluix_crystal_from_fluix_dust`
        },
        {
            inputs: ['ae2:charged_certus_quartz_crystal', 'ae2:quartz_block'],
            fluid: Fluid.of('minecraft:water', 500),
            outputs: [Item.of('ae2:damaged_budding_quartz')],
            energy: 5000,
            id: `${id_prefix}damaged_budding_quartz`
        },
        {
            inputs: ['ae2:charged_certus_quartz_crystal', 'ae2:damaged_budding_quartz'],
            fluid: Fluid.of('minecraft:water', 500),
            outputs: [Item.of('ae2:chipped_budding_quartz')],
            energy: 5000,
            id: `${id_prefix}chipped_budding_quartz`
        },
        {
            inputs: ['ae2:charged_certus_quartz_crystal', 'ae2:chipped_budding_quartz'],
            fluid: Fluid.of('minecraft:water', 500),
            outputs: [Item.of('ae2:flawed_budding_quartz')],
            energy: 5000,
            id: `${id_prefix}flawed_budding_quartz`
        },
        {
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:dusts/certus_quartz'],
            fluid: Fluid.of('minecraft:water', 2000),
            outputs: [Item.of('ae2:certus_quartz_crystal', 2)],
            energy: 20000,
            id: `${id_prefix}certus_quartz_crystal`
        },
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
