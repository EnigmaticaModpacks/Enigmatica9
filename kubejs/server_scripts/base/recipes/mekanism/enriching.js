ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/enriching/';

    const recipes = [
        {
            input: '#forge:dusts/dimensional',
            output: Item.of('rftoolsbase:dimensionalshard'),
            id: `${id_prefix}dimensional_shard_from_dust`
        },
        {
            input: '#forge:dusts/niter',
            output: Item.of('emendatusenigmatica:niter_gem'),
            id: `${id_prefix}niter_shard_from_dust`
        },
        {
            input: '#forge:dusts/sulfur',
            output: Item.of('emendatusenigmatica:sulfur_gem'),
            id: `${id_prefix}sulfur_shard_from_dust`
        } //,
        // {
        //     input: '#forge:dusts/glowstone',
        //     output: Item.of('emendatusenigmatica:enriched_glowstone'),
        //     id: `${id_prefix}enriched_glowstone_from_glowstone`
        // },
        // // TEMPORARY until Rid doesn't fix the recipes ^^"
        // {
        //     input: '#forge:dusts/zinc',
        //     output: Item.of('emendatusenigmatica:enriched_zinc'),
        //     id: 'emendatusenigmatica:enriched/from_ingot/zinc'
        // },
        // {
        //     input: '#forge:dusts/silver',
        //     output: Item.of('emendatusenigmatica:enriched_silver'),
        //     id: 'emendatusenigmatica:enriched/from_ingot/silver'
        // },
        // {
        //     input: '#forge:dusts/nickel',
        //     output: Item.of('emendatusenigmatica:enriched_nickel'),
        //     id: 'emendatusenigmatica:enriched/from_ingot/nickel'
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        recipe.input = { ingredient: Ingredient.of(recipe.input).toJson() };
        recipe.output = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
