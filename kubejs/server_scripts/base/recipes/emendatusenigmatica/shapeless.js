ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/emendatusenigmatica/shapeless/';

    const recipes = [
        {
            inputs: 'emendatusenigmatica:dimensional_cluster_shard_block',
            output: '4x emendatusenigmatica:dimensional_cluster',
            id: `${id_prefix}from_block/dimensional`
        },
        {
            inputs: 'emendatusenigmatica:fluorite_cluster_shard_block',
            output: '4x emendatusenigmatica:fluorite_cluster',
            id: `${id_prefix}from_block/fluorite`
        },
        {
            inputs: 'emendatusenigmatica:sulfur_cluster_shard_block',
            output: '4x emendatusenigmatica:sulfur_cluster',
            id: `${id_prefix}from_block/sulfur`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
