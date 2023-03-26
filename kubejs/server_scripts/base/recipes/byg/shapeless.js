ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/byg/shapeless/';

    const recipes = [
        {
            output: 'byg:frost_magma',
            inputs: ['minecraft:magma_block', 'thermal:ice_charge'],
            id: `${id_prefix}permafrost`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
