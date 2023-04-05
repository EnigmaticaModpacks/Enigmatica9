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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        recipe.input = { ingredient: Ingredient.of(recipe.input).toJson() };
        recipe.output = recipe.output.toJson()
        event.custom(recipe).id(recipe.id);
    });
});
