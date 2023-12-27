ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/enriching/';

    const recipes = [
        {
            input: '#forge:dusts/dimensional',
            output: 'rftoolsbase:dimensionalshard',
            id: `${id_prefix}dimensional_shard_from_dust`
        },
        {
            input: '#forge:dusts/niter',
            output: 'emendatusenigmatica:niter_gem',
            id: `${id_prefix}niter_gem_from_dust`
        },
        {
            input: '#forge:dusts/therium',
            output: 'byg:therium_crystal_shard',
            id: `${id_prefix}therium_shard_from_dust`
        },
        {
            input: '#forge:dusts/subzero',
            output: 'byg:subzero_crystal_shard',
            id: `${id_prefix}subzero_shard_from_dust`
        },
        {
            input: '#forge:dusts/apatite',
            output: 'emendatusenigmatica:apatite_gem',
            id: `${id_prefix}apatite_gem_from_dust`
        },
        {
            input: '#forge:dusts/cinnabar',
            output: 'emendatusenigmatica:cinnabar_gem',
            id: `${id_prefix}cinnabar_gem_from_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        recipe.input = {
            ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
        };
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
