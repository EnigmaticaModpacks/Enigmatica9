ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/rftools/shapeless/';

    const recipes = [
        {
            output: 'emendatusenigmatica:dimensional_block',
            inputs: ['9x #forge:gems/dimensional'],
            id: `${id_prefix}dimensional_block`
        },
        {
            output: '9x rftoolsbase:dimensionalshard',
            inputs: ['#forge:storage_blocks/dimensional'],
            id: `${id_prefix}dimensional_shard`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
