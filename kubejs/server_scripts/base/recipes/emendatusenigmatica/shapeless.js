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
        },
        {
            inputs: 'emendatusenigmatica:raw_osmium_block',
            output: '9x emendatusenigmatica:raw_osmium',
            id: `${id_prefix}from_block/osmium`
        },
        {
            inputs: 'emendatusenigmatica:raw_tin_block',
            output: '9x emendatusenigmatica:raw_tin',
            id: `${id_prefix}from_block/tin`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
