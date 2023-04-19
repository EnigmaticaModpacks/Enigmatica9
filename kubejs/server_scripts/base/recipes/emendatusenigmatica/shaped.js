ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/emendatusenigmatica/shaped/';

    const recipes = [
        {
            output: 'emendatusenigmatica:dimensional_cluster_shard_block',
            pattern: ['AA ', 'AA ', '   '],
            key: {
                A: 'emendatusenigmatica:dimensional_cluster'
            },
            id: `emendatusenigmatica:block/from_shard/dimensional`
        },
        {
            output: 'emendatusenigmatica:fluorite_cluster_shard_block',
            pattern: ['AA ', 'AA ', '   '],
            key: {
                A: 'emendatusenigmatica:fluorite_cluster'
            },
            id: `emendatusenigmatica:block/from_shard/fluorite`
        },
        {
            output: 'emendatusenigmatica:sulfur_cluster_shard_block',
            pattern: ['AA ', 'AA ', '   '],
            key: {
                A: 'emendatusenigmatica:sulfur_cluster'
            },
            id: `emendatusenigmatica:block/from_shard/sulfur`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
